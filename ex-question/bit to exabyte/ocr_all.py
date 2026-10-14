import easyocr
import os
import json
from pathlib import Path

img_dir = r"D:\COACH\study-app\ex-question\bit to exabyte"
files = sorted([f for f in os.listdir(img_dir) if f.endswith('.jpg')])
print(f"Found {len(files)} images")

reader = easyocr.Reader(['en'], gpu=False)

for idx, fname in enumerate(files):
    img_path = os.path.join(img_dir, fname)
    md_name = fname.rsplit('.', 1)[0] + '.md'
    md_path = os.path.join(img_dir, md_name)
    
    try:
        results = reader.readtext(img_path)
        lines = []
        for bbox, text, conf in results:
            lines.append(text)
        
        content = f"# {fname}\n\n"
        content += f"OCR confidence: {sum(r[2] for r in results)/len(results):.2f} avg\n\n"
        content += "\n".join(lines)
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"[{idx+1}/{len(files)}] {fname} -> {md_name} ({len(lines)} lines)")
    except Exception as e:
        print(f"[{idx+1}/{len(files)}] FAILED: {fname} - {e}")

print("Done!")
