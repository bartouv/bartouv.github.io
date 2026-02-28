#!/usr/bin/env python3
"""
Remove all inline CSS from index.html.
The CSS has already been extracted to css/index.css and css/shared.css.
"""

from pathlib import Path
import re

index_file = Path('/Users/galbar-touv/Blog/index.html')

with open(index_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all <style>...</style> blocks
content = re.sub(
    r'<style>.*?</style>',
    '',
    content,
    flags=re.DOTALL
)

# Clean up orphaned CSS between <body> and first actual HTML content
# Pattern: </head><body> ... orphaned CSS ... <div class="bg-glow"
content = re.sub(
    r'(</head>\s*<body>)\s*:root\s*\{.*?@media.*?\}\s*(\s*<div class="bg-glow)',
    r'\1\n\n\2',
    content,
    flags=re.DOTALL
)

with open(index_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Removed all inline CSS from index.html")
