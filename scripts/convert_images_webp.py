#!/usr/bin/env python3
"""
Convert PNG/JPG images to WebP format for better performance.
Uses Pillow (PIL) to convert project images.
Quality: 85 for good balance between size and quality.
Keeps originals as fallback.
"""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("⚠ Pillow not installed. Installing...")
    import subprocess
    subprocess.check_call(['pip3', 'install', 'Pillow'])
    from PIL import Image

blog_dir = Path('/Users/galbar-touv/Blog')
images_dir = blog_dir / 'images' / 'projects'

# Images to convert
image_files = list(images_dir.glob('*.png')) + list(images_dir.glob('*.jpg'))

total_original_size = 0
total_webp_size = 0

for img_path in image_files:
    # Skip if WebP already exists
    webp_path = img_path.with_suffix('.webp')
    if webp_path.exists():
        print(f"  ℹ {webp_path.name} already exists, skipping")
        continue

    print(f"Converting {img_path.name}...")

    # Get original size
    original_size = img_path.stat().st_size
    total_original_size += original_size

    # Open and convert to WebP
    img = Image.open(img_path)

    # Convert RGBA to RGB if needed (WebP doesn't handle transparency the same way)
    if img.mode == 'RGBA':
        # Create white background
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
        img = background

    # Save as WebP
    img.save(webp_path, 'webp', quality=85, method=6)

    # Get new size
    webp_size = webp_path.stat().st_size
    total_webp_size += webp_size

    # Calculate reduction
    reduction = ((original_size - webp_size) / original_size) * 100

    print(f"  ✓ {img_path.name} ({original_size / 1024 / 1024:.1f}MB) → {webp_path.name} ({webp_size / 1024 / 1024:.1f}MB)")
    print(f"    Reduction: {reduction:.1f}%")

if total_original_size > 0:
    total_reduction = ((total_original_size - total_webp_size) / total_original_size) * 100
    print(f"\n✓ Conversion complete!")
    print(f"Total original size: {total_original_size / 1024 / 1024:.1f}MB")
    print(f"Total WebP size: {total_webp_size / 1024 / 1024:.1f}MB")
    print(f"Total reduction: {total_reduction:.1f}%")
else:
    print("\n✓ All images already converted to WebP!")
