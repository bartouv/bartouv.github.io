#!/usr/bin/env python3
"""
Add SEO metadata to all article pages.
Reads metadata from article_metadata.json and injects:
- Meta description
- Meta keywords
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
"""

from pathlib import Path
import json
import re

# Load metadata
script_dir = Path(__file__).parent
with open(script_dir / 'article_metadata.json', 'r', encoding='utf-8') as f:
    metadata = json.load(f)

articles_dir = Path('/Users/galbar-touv/Blog/articles')

for filename, meta in metadata.items():
    article_path = articles_dir / filename

    if not article_path.exists():
        print(f"⚠ Skipping {filename} - file not found")
        continue

    print(f"Processing {filename}...")

    with open(article_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if metadata already exists
    if 'og:title' in content or 'twitter:card' in content:
        print(f"  ℹ SEO metadata already exists in {filename}, skipping")
        continue

    # Create the SEO metadata HTML
    article_url = f"https://galbartouv.com/articles/{filename}"

    seo_html = f'''
<!-- SEO Meta Tags -->
<meta name="description" content="{meta['description']}">
<meta name="keywords" content="{', '.join(meta['keywords'])}">

<!-- Open Graph Tags -->
<meta property="og:type" content="article">
<meta property="og:title" content="{meta['title']}">
<meta property="og:description" content="{meta['description']}">
<meta property="og:url" content="{article_url}">
<meta property="og:image" content="{meta['image']}">
<meta property="article:published_time" content="{meta['date']}-01">
<meta property="article:author" content="Gal Bartouv">
<meta property="article:section" content="{meta['category']}">
<meta property="article:tag" content="Unity">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{meta['title']}">
<meta name="twitter:description" content="{meta['description']}">
<meta name="twitter:image" content="{meta['image']}">

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{meta['title'].replace(' — Unity Dev Blog', '')}",
  "description": "{meta['description']}",
  "image": "{meta['image']}",
  "author": {{
    "@type": "Person",
    "name": "Gal Bartouv",
    "url": "https://galbartouv.com"
  }},
  "publisher": {{
    "@type": "Person",
    "name": "Gal Bartouv"
  }},
  "datePublished": "{meta['date']}-01",
  "mainEntityOfPage": {{
    "@type": "WebPage",
    "@id": "{article_url}"
  }}
}}
</script>
'''

    # Insert after <title> tag but before </head>
    content = re.sub(
        r'(<title>.*?</title>)',
        r'\1' + seo_html,
        content,
        flags=re.DOTALL
    )

    with open(article_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ Added SEO metadata to {filename}")

print(f"\n✓ SEO metadata added to all article pages!")
