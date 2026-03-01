#!/usr/bin/env python3
"""
Convert blog HTML files to use shared-components.js placeholders
Replaces duplicated HTML blocks with placeholder divs to achieve DRY architecture
"""

import os
import re
from pathlib import Path

# Define the HTML blocks to replace with their placeholder IDs
REPLACEMENTS = [
    {
        'id': 'reading-progress',
        'placeholder': '<div id="reading-progress-placeholder"></div>',
        'pattern': r'<!-- Reading Progress Indicator -->.*?</div>\s*</div>',
        'description': 'Reading progress indicator'
    },
    {
        'id': 'skip-link',
        'placeholder': '<div id="skip-link-placeholder"></div>',
        'pattern': r'<a href="#main-content" class="skip-link">Skip to main content</a>',
        'description': 'Skip link'
    },
    {
        'id': 'bg-glows',
        'placeholder': '<div id="bg-glows-placeholder"></div>',
        'pattern': r'<div class="bg-glow g1"></div>\s*<div class="bg-glow g2"></div>',
        'description': 'Background glows'
    },
    {
        'id': 'nav',
        'placeholder': '<div id="nav-placeholder"></div>',
        'pattern': r'<!-- NAV -->.*?</nav>',
        'description': 'Navigation with theme panel'
    },
    {
        'id': 'social-share',
        'placeholder': '<div id="social-share-placeholder"></div>',
        'pattern': r'<!-- SOCIAL SHARE -->.*?</div>\s*</div>',
        'description': 'Social share buttons'
    },
    {
        'id': 'footer',
        'placeholder': '<div id="footer-placeholder"></div>',
        'pattern': r'<!-- FOOTER -->.*?</footer>',
        'description': 'Footer'
    }
]

def convert_file(filepath):
    """Convert a single HTML file to use component placeholders"""
    print(f"Processing: {filepath.name}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    replacements_made = []

    # Apply each replacement
    for replacement in REPLACEMENTS:
        pattern = replacement['pattern']
        placeholder = replacement['placeholder']
        description = replacement['description']

        # Use DOTALL flag to match across newlines
        matches = re.findall(pattern, content, re.DOTALL | re.IGNORECASE)
        if matches:
            content = re.sub(pattern, placeholder, content, flags=re.DOTALL | re.IGNORECASE)
            replacements_made.append(description)

    # Check if shared-components.js script is already present
    if 'shared-components.js' not in content:
        # Add script tag before closing body tag or before other scripts
        # Find the position before the first script tag in the body
        script_pattern = r'(<script src="\.\./js/)'
        if re.search(script_pattern, content):
            # Insert before the first script
            content = re.sub(
                script_pattern,
                r'<script src="../js/shared-components.js"></script>\n  \1',
                content,
                count=1
            )
            replacements_made.append('Added shared-components.js script')
        else:
            # Fallback: add before </body>
            content = content.replace(
                '</body>',
                '  <script src="../js/shared-components.js"></script>\n</body>'
            )
            replacements_made.append('Added shared-components.js script (before </body>)')

    # Only write if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ Replaced: {', '.join(replacements_made)}")
        return True
    else:
        print(f"  ⊘ No changes needed (already converted or no matches)")
        return False

def main():
    """Convert all HTML files in the articles directory"""
    articles_dir = Path(__file__).parent.parent / 'articles'

    if not articles_dir.exists():
        print(f"Error: Articles directory not found at {articles_dir}")
        return

    # Get all HTML files
    html_files = sorted(articles_dir.glob('*.html'))

    if not html_files:
        print(f"No HTML files found in {articles_dir}")
        return

    print(f"Found {len(html_files)} HTML files to process\n")

    converted_count = 0
    for filepath in html_files:
        if convert_file(filepath):
            converted_count += 1
        print()  # Blank line between files

    print(f"{'='*60}")
    print(f"Conversion complete!")
    print(f"Files modified: {converted_count}/{len(html_files)}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
