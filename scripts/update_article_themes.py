#!/usr/bin/env python3
"""
Update article pages with 14 themes and external JavaScript.

This script:
1. Adds 4 missing theme buttons (p11-p14) to theme panel
2. Removes inline <script> blocks
3. Adds external script references to theme.js and mobile-nav.js
"""

from pathlib import Path
import re

# New theme buttons to add (p11-p14)
new_theme_buttons = """      <button class="theme-option" data-theme="p11" onclick="setTheme('p11')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#50f0f0,#ff60a0)"></span>
        <span>Cyan & Magenta</span>
      </button>
      <button class="theme-option" data-theme="p12" onclick="setTheme('p12')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff80ff,#40d0d0)"></span>
        <span>Magenta & Cyan</span>
      </button>
      <button class="theme-option" data-theme="p13" onclick="setTheme('p13')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffa850,#50a0ff)"></span>
        <span>Peach & Blue</span>
      </button>
      <button class="theme-option" data-theme="p14" onclick="setTheme('p14')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#d080ff,#50f090)"></span>
        <span>Purple & Mint</span>
      </button>
    </div>"""

articles_dir = Path('/Users/galbar-touv/Blog/articles')

for article_file in sorted(articles_dir.glob('*.html')):
    print(f"Processing {article_file.name}...")

    with open(article_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add 4 missing theme buttons (p11-p14) before closing </div> of theme-panel
    # Find the last theme button (p10) and replace the closing </div> after it
    content = re.sub(
        r'(<button class="theme-option" data-theme="p10"[^>]*>.*?</button>)\s*</div>',
        r'\1\n' + new_theme_buttons,
        content,
        flags=re.DOTALL
    )

    # Remove inline <script> block (entire theme JavaScript)
    content = re.sub(
        r'<script>.*?</script>\s*(?=</body>)',
        '',
        content,
        flags=re.DOTALL
    )

    # Add external script references before </body>
    content = re.sub(
        r'(</body>)',
        r'<script src="../js/theme.js"></script>\n<script src="../js/mobile-nav.js"></script>\n\n\1',
        content
    )

    with open(article_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ Updated {article_file.name}")

print(f"\n✓ Updated all article pages with 14 themes and external JavaScript!")
