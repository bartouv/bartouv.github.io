#!/usr/bin/env python3
"""
Generate sitemap.xml and feed.xml from article_metadata.json.
Run this whenever a new article is published.
"""

from pathlib import Path
from email.utils import formatdate
import calendar
import json

BASE_URL = "https://bartouv.github.io"
script_dir = Path(__file__).parent
root_dir = script_dir.parent

with open(script_dir / "article_metadata.json", "r", encoding="utf-8") as f:
    metadata = json.load(f)


def meta_to_iso(date_str):
    """'2025-09' -> '2025-09-01'"""
    return f"{date_str}-01"


def meta_to_rfc822(date_str):
    """'2025-09' -> 'Wed, 01 Sep 2025 00:00:00+0000'"""
    year, month = map(int, date_str.split("-"))
    # calendar.timegm needs a time tuple; formatdate takes a timestamp
    import time
    ts = calendar.timegm(time.strptime(f"{year}-{month:02d}-01", "%Y-%m-%d"))
    return formatdate(ts, usegmt=True)


# Sort articles newest first
sorted_articles = sorted(
    metadata.items(),
    key=lambda kv: kv[1]["date"],
    reverse=True,
)

# ── sitemap.xml ────────────────────────────────────────────────────────────────

sitemap_urls = [
    f"""  <url>
    <loc>{BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>"""
]

for filename, meta in sorted_articles:
    url = f"{BASE_URL}/articles/{filename}"
    lastmod = meta_to_iso(meta["date"])
    sitemap_urls.append(
        f"""  <url>
    <loc>{url}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""
    )

sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
sitemap_xml += "\n".join(sitemap_urls)
sitemap_xml += "\n</urlset>\n"

sitemap_path = root_dir / "sitemap.xml"
sitemap_path.write_text(sitemap_xml, encoding="utf-8")
print(f"✓ Generated sitemap.xml ({len(sorted_articles) + 1} URLs)")

# ── feed.xml (RSS 2.0) ────────────────────────────────────────────────────────

items = []
for filename, meta in sorted_articles:
    url = f"{BASE_URL}/articles/{filename}"
    title = meta["title"].replace("&", "&amp;")
    description = meta["description"].replace("&", "&amp;")
    pub_date = meta_to_rfc822(meta["date"])
    category = meta["category"]
    items.append(
        f"""    <item>
      <title>{title}</title>
      <link>{url}</link>
      <guid isPermaLink="true">{url}</guid>
      <description>{description}</description>
      <pubDate>{pub_date}</pubDate>
      <category>{category}</category>
    </item>"""
    )

feed_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
feed_xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n'
feed_xml += "  <channel>\n"
feed_xml += f"    <title>GB/DEV — Unity Dev Blog</title>\n"
feed_xml += f"    <link>{BASE_URL}</link>\n"
feed_xml += f"    <description>Unity game development articles on architecture, rendering, optimization, and tooling.</description>\n"
feed_xml += f"    <language>en-us</language>\n"
feed_xml += f"    <atom:link href=\"{BASE_URL}/feed.xml\" rel=\"self\" type=\"application/rss+xml\" />\n"
feed_xml += "\n".join(items)
feed_xml += "\n  </channel>\n"
feed_xml += "</rss>\n"

feed_path = root_dir / "feed.xml"
feed_path.write_text(feed_xml, encoding="utf-8")
print(f"✓ Generated feed.xml ({len(sorted_articles)} articles)")
