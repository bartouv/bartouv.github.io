#!/usr/bin/env python3
"""
Add accessibility improvements to all HTML files.
Adds:
- Skip link at the beginning of body
- role="navigation" and aria-label to <nav>
- role="main" and id="main-content" to <main>
- aria-label to theme toggle button
- role="contentinfo" to <footer>
"""

from pathlib import Path
import re

blog_dir = Path('/Users/galbar-touv/Blog')

# Process index.html and all article pages
html_files = [blog_dir / 'index.html'] + list((blog_dir / 'articles').glob('*.html'))

for html_file in html_files:
    if 'template.html' in str(html_file):
        continue

    print(f"Processing {html_file.name}...")

    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already processed
    if 'skip-link' in content:
        print(f"  ℹ Accessibility features already added to {html_file.name}, skipping")
        continue

    # 1. Add skip link right after <body> tag
    content = re.sub(
        r'(<body>)',
        r'\1\n<a href="#main-content" class="skip-link">Skip to main content</a>',
        content
    )

    # 2. Add role and aria-label to <nav>
    content = re.sub(
        r'<nav>',
        r'<nav role="navigation" aria-label="Main navigation">',
        content
    )

    # 3. Add role="main" and id="main-content" to <main>
    # Handle both cases: <main> and <main class="...">
    content = re.sub(
        r'<main(\s+class="[^"]*")?',
        r'<main\1 role="main" id="main-content"',
        content
    )

    # 4. Add aria-label to theme toggle button
    content = re.sub(
        r'(<button class="theme-toggle-btn")',
        r'\1 aria-label="Open theme selector"',
        content
    )

    # 5. Add role="contentinfo" to <footer>
    content = re.sub(
        r'<footer>',
        r'<footer role="contentinfo">',
        content
    )

    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ Added accessibility features to {html_file.name}")

print(f"\n✓ Accessibility features added to all pages!")
