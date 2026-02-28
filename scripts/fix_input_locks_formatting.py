#!/usr/bin/env python3
"""Fix formatting issues in input-locks.html"""

import re

filepath = 'articles/input-locks.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix squished </figure><h2>
content = re.sub(r'</figure><h2>', '</figure>\n\n    <h2>', content)

# Fix squished </figure><p>
content = re.sub(r'</figure><p>', '</figure>\n\n<p>', content)

# Fix "we can run" -> "We can run"
content = content.replace('<p>we can run the test runner', '<p>We can run the test runner')

# Fix ":D." -> "!"
content = content.replace('works :D.</p>', 'works!</p>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Fixed formatting issues in input-locks.html")
