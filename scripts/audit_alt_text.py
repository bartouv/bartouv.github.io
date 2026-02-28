#!/usr/bin/env python3
"""
Audit all images for missing or empty alt text.
Scans all HTML files and reports issues.
"""

from pathlib import Path
import re

blog_dir = Path('/Users/galbar-touv/Blog')

# Process index.html and all article pages
html_files = [blog_dir / 'index.html'] + list((blog_dir / 'articles').glob('*.html'))

issues_found = []

for html_file in html_files:
    if 'template.html' in str(html_file):
        continue

    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all <img> tags
    img_tags = re.findall(r'<img[^>]*>', content, re.DOTALL)

    for img_tag in img_tags:
        # Check if alt attribute exists
        alt_match = re.search(r'alt="([^"]*)"', img_tag)

        if not alt_match:
            # Extract src for reporting
            src_match = re.search(r'src="([^"]*)"', img_tag)
            src = src_match.group(1) if src_match else 'unknown'
            issues_found.append({
                'file': html_file.name,
                'src': src,
                'issue': 'Missing alt attribute'
            })
        elif not alt_match.group(1).strip():
            # Alt attribute exists but is empty
            src_match = re.search(r'src="([^"]*)"', img_tag)
            src = src_match.group(1) if src_match else 'unknown'
            issues_found.append({
                'file': html_file.name,
                'src': src,
                'issue': 'Empty alt attribute'
            })

# Report findings
if issues_found:
    print(f"⚠ Found {len(issues_found)} alt text issues:\n")
    for issue in issues_found:
        print(f"  {issue['file']}:")
        print(f"    Image: {issue['src']}")
        print(f"    Issue: {issue['issue']}")
        print()
else:
    print("✓ All images have proper alt text!")

print(f"\nScanned {len(html_files) - 1} files") # -1 for template
print(f"Total issues: {len(issues_found)}")
