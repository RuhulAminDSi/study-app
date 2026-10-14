import easyocr
import os
import json
import time

img_dir = r"D:\COACH\study-app\ex-question\bit to exabyte"
log_file = os.path.join(img_dir, "progress.json")

if os.path.exists(log_file):
    with open(log_file, encoding='utf-8') as f:
        progress = json.load(f)
else:
    progress = {}

files = sorted([f for f in os.listdir(img_dir) if f.endswith('.jpg')])
done = set(progress.keys())
remaining = [f for f in files if f not in done]
print(f"Total: {len(files)}, done: {len(done)}, remaining: {len(remaining)}")

if not remaining:
    print("All done!")
    exit(0)

print("Loading EasyOCR...")
reader = easyocr.Reader(['en'], gpu=False)
print("Reader ready")

for i, fname in enumerate(remaining):
    img_path = os.path.join(img_dir, fname)
    t0 = time.time()
    
    try:
        results = reader.readtext(img_path)
        
        lines = []
        for bbox, text, conf in results:
            lines.append((bbox, text, float(conf)))
        
        merged = []
        current_y = None
        current_text = []
        current_confs = []
        
        for bbox, text, conf in sorted(lines, key=lambda x: (x[0][1], x[0][0])):
            top, left, bottom, right = bbox
            center_y = (top + bottom) / 2
            if current_y is not None and abs(center_y - current_y) < 15:
                current_text.append(text)
                current_confs.append(conf)
            else:
                if current_text:
                    merged.append((' '.join(current_text), sum(current_confs) / len(current_confs)))
                current_text = [text]
                current_confs = [conf]
                current_y = center_y
        if current_text:
            merged.append((' '.join(current_text), sum(current_confs) / len(current_confs)))
        
        avg_conf = sum(c for _, c in merged) / len(merged) if merged else 0
        
        content = f"# {fname}\n\nOCR confidence: {avg_conf:.2f} avg\n\n"
        content += "\n".join(text for text, _ in merged)
        
        md_name = fname.rsplit('.', 1)[0] + '.md'
        md_path = os.path.join(img_dir, md_name)
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        progress[fname] = {"lines": len(merged), "conf": avg_conf, "time": time.time() - t0}
        
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(progress, f)
        
        elapsed = time.time() - t0
        print(f"[{len(progress)}/{len(files)}] {fname[:55]} ({len(merged)} lines, {elapsed:.1f}s)")
        
    except Exception as e:
        elapsed = time.time() - t0
        print(f"[{len(progress)}/{len(files)}] FAILED {fname[:55]}: {e} ({elapsed:.1f}s)")
        progress[fname] = {"error": str(e)}
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(progress, f)

print(f"\nDone! {len(progress)} images processed")
