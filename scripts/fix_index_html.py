#!/usr/bin/env python3
"""
Fix index.html by removing orphaned CSS (lines 11-1006).
"""

from pathlib import Path

index_file = Path('/Users/galbar-touv/Blog/index.html')

with open(index_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Keep lines 0-10 (header) and 1006+ (actual HTML content)
# Lines 11-1005 contain orphaned CSS that needs to be removed
fixed_lines = lines[:10] + lines[1006:]

with open(index_file, 'w', encoding='utf-8') as f:
    f.writelines(fixed_lines)

print(f"✓ Removed {1006 - 10} lines of orphaned CSS from index.html")
print(f"✓ File reduced from {len(lines)} lines to {len(fixed_lines)} lines")
