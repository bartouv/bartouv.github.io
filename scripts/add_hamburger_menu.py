#!/usr/bin/env python3
"""
Add hamburger menu button HTML to all pages.

This script inserts the hamburger button HTML after .nav-links and before .theme-switcher
in both index.html and all article pages.
"""

from pathlib import Path
import re

# Hamburger button HTML
hamburger_html = '''  <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
'''

def add_hamburger_to_file(file_path):
    """Add hamburger button to a single HTML file."""
    print(f"Processing {file_path.name}...")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if hamburger already exists
    if 'class="hamburger"' in content:
        print(f"  ⚠ Hamburger already exists in {file_path.name}, skipping")
        return

    # Insert hamburger button after </ul> of nav-links, before theme-switcher div
    content = re.sub(
        r'(</ul>\s*)(<div class="theme-switcher")',
        r'\1' + hamburger_html + r'\2',
        content
    )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ Added hamburger menu to {file_path.name}")

# Process index.html
index_file = Path('/Users/galbar-touv/Blog/index.html')
add_hamburger_to_file(index_file)

# Process all article pages
articles_dir = Path('/Users/galbar-touv/Blog/articles')
for article_file in sorted(articles_dir.glob('*.html')):
    add_hamburger_to_file(article_file)

print(f"\n✓ Added hamburger menu to all pages!")
