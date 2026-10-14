import easyocr
import os
import json
from pathlib import Path

img_dir = r"D:\COACH\study-app\ex-question\bit to exabyte"
files = sorted([f for f in os.listdir(img_dir) if f.endswith('.jpg')])
already_done = set(f.rsplit('.', 1)[0] + '.md' for f in os.listdir(img_dir) if f.endswith('.md'))
remaining = [f for f in files if f.rsplit('.', 1)[0] + '.md' not in already_done]
print(f"Remaining: {len(remaining)} images")

reader = easyocr.Reader(['en'], gpu=False)

for idx, fname in enumerate(remaining):
    img_path = os.path.join(img_dir, fname)
    md_name = fname.rsplit('.', 1)[0] + '.md'
    md_path = os.path.join(img_dir, md_name)
    
    try:
        results = reader.readtext(img_path)
        # Merge nearby text lines that are likely fragments
        lines = []
        for bbox, text, conf in results:
            lines.append((bbox, text, conf))
        
        # Group vertically close lines
        merged = []
        current_y = None
        current_text = []
        current_conf = []
        
        for bbox, text, conf in sorted(lines, key=lambda x: (x[0][1], x[0][0])):
            top, left, bottom, right = bbox
            center_y = (top + bottom) / 2
            if current_y is not None and abs(center_y - current_y) < 15:
                current_text.append(text)
                current_conf.append(conf)
            else:
                if current_text:
                    merged.append((' '.join(current_text), sum(current_conf)/len(current_conf)))
                current_text = [text]
                current_conf = [conf]
                current_y = center_y
        if current_text:
            merged.append((' '.join(current_text), sum(current_conf)/len(current_conf)))
        
        avg_conf = sum(c for _, c in merged) / len(merged) if merged else 0
        
        content = f"# {fname}\n\nOCR confidence: {avg_conf:.2f} avg\n\n"
        content += "\n".join(text for text, _ in merged)
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"[{idx+1}/{len(remaining)}] {fname[:40]}... -> {len(merged)} lines")
    except Exception as e:
        print(f"[{idx+1}/{len(remaining)}] FAILED: {fname[:50]}... - {e}")

print("Done!")
