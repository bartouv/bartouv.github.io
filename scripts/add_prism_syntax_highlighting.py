#!/usr/bin/env python3
"""
Add Prism.js syntax highlighting to all article HTML files.
Adds Dracula theme CSS and Prism.js library for C# and YAML syntax highlighting.
"""

import os
import re

# Path to articles directory
ARTICLES_DIR = os.path.join(os.path.dirname(__file__), '..', 'articles')

# CSS to add in <head>
PRISM_CSS = '<link rel="stylesheet" href="../css/prism-dracula.css">'

# Scripts to add before </body>
PRISM_SCRIPTS = """
<!-- PRISM.JS FOR SYNTAX HIGHLIGHTING -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-csharp.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-yaml.min.js"></script>
"""

def add_prism_to_article(filepath):
    """Add Prism.js CSS and scripts to an article HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already has Prism
    if 'prism-dracula.css' in content:
        print(f"  ✓ Already has Prism: {os.path.basename(filepath)}")
        return False

    # Add CSS after article.css
    css_pattern = r'(<link rel="stylesheet" href="\.\./css/article\.css">)'
    if re.search(css_pattern, content):
        content = re.sub(
            css_pattern,
            r'\1\n' + PRISM_CSS,
            content
        )
    else:
        print(f"  ⚠ Warning: Could not find article.css link in {os.path.basename(filepath)}")
        return False

    # Add scripts before </body>
    script_pattern = r'(</body>)'
    if re.search(script_pattern, content):
        content = re.sub(
            script_pattern,
            PRISM_SCRIPTS + r'\n\1',
            content
        )
    else:
        print(f"  ⚠ Warning: Could not find </body> tag in {os.path.basename(filepath)}")
        return False

    # Write updated content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Added Prism: {os.path.basename(filepath)}")
    return True

def main():
    """Process all HTML files in articles directory."""
    print("Adding Prism.js syntax highlighting to articles...\n")

    if not os.path.exists(ARTICLES_DIR):
        print(f"Error: Articles directory not found at {ARTICLES_DIR}")
        return

    updated_count = 0
    skipped_count = 0

    # Process all HTML files
    for filename in sorted(os.listdir(ARTICLES_DIR)):
        if filename.endswith('.html') and filename != 'template.html':
            filepath = os.path.join(ARTICLES_DIR, filename)
            if add_prism_to_article(filepath):
                updated_count += 1
            else:
                skipped_count += 1

    print(f"\n✅ Complete!")
    print(f"   Updated: {updated_count} files")
    print(f"   Skipped: {skipped_count} files (already had Prism)")

if __name__ == '__main__':
    main()
