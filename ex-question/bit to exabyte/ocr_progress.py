import easyocr
import os
import json
from pathlib import Path
import time

img_dir = r"D:\COACH\study-app\ex-question\bit to exabyte"
log_file = os.path.join(img_dir, "progress.json")

# Load progress
if os.path.exists(log_file):
    with open(log_file) as f:
        progress = json.load(f)
else:
    progress = {}

files = sorted([f for f in os.listdir(img_dir) if f.endswith('.jpg')])
print(f"Total: {len(files)} images, already done: {len(progress)}")

# Initialize reader once
print("Loading EasyOCR model...")
reader = easyocr.Reader(['en'], gpu=False)
print("Reader ready")

for fname in files:
    if fname in progress:
        continue
    
    img_path = os.path.join(img_dir, fname)
    t0 = time.time()
    
    try:
        results = reader.readtext(img_path)
        
        # Group vertically close lines
        lines = []
        for bbox, text, conf in results:
            lines.append((bbox, text, conf))
        
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
        
        md_name = fname.rsplit('.', 1)[0] + '.md'
        md_path = os.path.join(img_dir, md_name)
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        progress[fname] = {"lines": len(merged), "conf": avg_conf, "time": time.time() - t0}
        
        # Save progress every image
        with open(log_file, 'w') as f:
            json.dump(progress, f)
        
        print(f"[{len(progress)}/{len(files)}] {fname[:50]}... ({len(merged)} lines, {time.time()-t0:.1f}s)")
        
    except Exception as e:
        print(f"[{len(progress)}/{len(files)}] FAILED: {fname[:50]}... - {e}")
        progress[fname] = {"error": str(e)}
        with open(log_file, 'w') as f:
            json.dump(progress, f)

print(f"\nDone! {len(progress)} images processed")
