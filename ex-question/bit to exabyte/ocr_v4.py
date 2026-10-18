import easyocr
import os
import json
import time
import numpy as np

img_dir = r"D:\COACH\study-app\ex-question\bit to exabyte"
log_file = os.path.join(img_dir, "progress2.json")

if os.path.exists(log_file):
    with open(log_file, encoding='utf-8') as f:
        progress = json.load(f)
else:
    progress = {}

files = sorted([f for f in os.listdir(img_dir) if f.endswith('.jpg')])
print(f"Total: {len(files)} images")

print("Loading EasyOCR...")
reader = easyocr.Reader(['en'], gpu=False)
print("Reader ready")

for i, fname in enumerate(files):
    img_path = os.path.join(img_dir, fname)
    t0 = time.time()
    
    try:
        results = reader.readtext(img_path)
        
        # Collect text with proper float conversion
        lines = []
        for bbox, text, conf in results:
            lines.append((float(conf), text))
        
        # Group vertically close lines (y-center within 15px)
        sorted_lines = sorted(lines, key=lambda x: x[1])  # sort by text for now
        # Better: sort by y position from bbox
        raw = []
        for bbox, text, conf in results:
            top = float(bbox[0][1])
            left = float(bbox[0][0])
            bottom = float(bbox[2][1])
            right = float(bbox[2][0])
            raw.append((top, left, bottom, right, text, float(conf)))
        
        raw.sort(key=lambda x: (x[0], x[1]))  # top to bottom, left to right
        
        merged = []
        cur_y = None
        cur_text = []
        cur_confs = []
        
        for top, left, bottom, right, text, conf in raw:
            center_y = (top + bottom) / 2
            if cur_y is not None and abs(center_y - cur_y) < 15:
                cur_text.append(text)
                cur_confs.append(conf)
            else:
                if cur_text:
                    avg_c = sum(cur_confs) / len(cur_confs)
                    merged.append((' '.join(cur_text), avg_c))
                cur_text = [text]
                cur_confs = [conf]
                cur_y = center_y
        if cur_text:
            avg_c = sum(cur_confs) / len(cur_confs)
            merged.append((' '.join(cur_text), avg_c))
        
        avg_conf = sum(c for _, c in merged) / len(merged) if merged else 0.0
        
        content = f"# {fname}\n\nOCR confidence: {avg_conf:.2f} avg\n\n"
        content += "\n".join(text for text, _ in merged)
        
        md_name = fname.rsplit('.', 1)[0] + '.md'
        md_path = os.path.join(img_dir, md_name)
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        progress[fname] = {"lines": len(merged), "conf": avg_conf}
        
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(progress, f)
        
        elapsed = time.time() - t0
        print(f"[{i+1}/{len(files)}] {fname[:55]} ({len(merged)} lines, {elapsed:.1f}s)")
        
    except Exception as e:
        elapsed = time.time() - t0
        print(f"[{i+1}/{len(files)}] FAILED {fname[:55]}: {e} ({elapsed:.1f}s)")
        progress[fname] = {"error": str(e)}
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(progress, f)

print(f"\nDone! {len(progress)} images processed")
