#!/bin/bash
# Convert PNG/JPG images to WebP format using macOS sips and cwebp
# Note: cwebp needs to be installed via: brew install webp

IMAGES_DIR="/Users/galbar-touv/Blog/images/projects"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠ cwebp not found. Installing via Homebrew..."
    brew install webp
fi

cd "$IMAGES_DIR" || exit

total_original=0
total_webp=0
converted_count=0

for img in *.png *.jpg; do
    # Skip if file doesn't exist (glob didn't match)
    [ -e "$img" ] || continue

    # Get base name without extension
    base="${img%.*}"
    webp_file="${base}.webp"

    # Skip if WebP already exists
    if [ -f "$webp_file" ]; then
        echo "  ℹ ${webp_file} already exists, skipping"
        continue
    fi

    echo "Converting ${img}..."

    # Get original size in bytes
    original_size=$(stat -f%z "$img")
    total_original=$((total_original + original_size))

    # Convert to WebP with quality 85
    cwebp -q 85 "$img" -o "$webp_file" > /dev/null 2>&1

    if [ $? -eq 0 ]; then
        # Get WebP size
        webp_size=$(stat -f%z "$webp_file")
        total_webp=$((total_webp + webp_size))

        # Calculate sizes in MB
        original_mb=$(echo "scale=1; $original_size / 1024 / 1024" | bc)
        webp_mb=$(echo "scale=1; $webp_size / 1024 / 1024" | bc)

        # Calculate reduction percentage
        reduction=$(echo "scale=1; ($original_size - $webp_size) * 100 / $original_size" | bc)

        echo "  ✓ ${img} (${original_mb}MB) → ${webp_file} (${webp_mb}MB)"
        echo "    Reduction: ${reduction}%"

        converted_count=$((converted_count + 1))
    else
        echo "  ✗ Failed to convert ${img}"
    fi
done

if [ $converted_count -gt 0 ]; then
    total_original_mb=$(echo "scale=1; $total_original / 1024 / 1024" | bc)
    total_webp_mb=$(echo "scale=1; $total_webp / 1024 / 1024" | bc)
    total_reduction=$(echo "scale=1; ($total_original - $total_webp) * 100 / $total_original" | bc)

    echo ""
    echo "✓ Conversion complete!"
    echo "Total original size: ${total_original_mb}MB"
    echo "Total WebP size: ${total_webp_mb}MB"
    echo "Total reduction: ${total_reduction}%"
else
    echo ""
    echo "✓ All images already converted to WebP!"
fi
