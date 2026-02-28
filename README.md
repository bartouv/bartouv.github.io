# GB/DEV Unity Blog

Unity development blog by Gal Bartouv. 9+ years shipping mobile games. Real-world patterns, systems, and hard-won lessons from production Unity games.

## Project Structure

```
/Blog
├── index.html              # Main landing page
├── Avatar.png              # Profile image (33KB)
│
├── /css                    # Stylesheets
│   ├── shared.css          # Shared styles for all pages
│   └── index.css           # Index-specific styles
│
├── /js                     # JavaScript modules
│   ├── theme.js            # 14-theme color system with localStorage
│   └── mobile-nav.js       # Hamburger menu functionality
│
├── /articles               # Blog post HTML files (18 articles)
│   ├── taming-polymorphic-serialization.html
│   ├── ui-shine-effect.html
│   └── ...
│
├── /images/projects        # Project screenshots
│   ├── solaria.png         # Original PNG (7.2MB)
│   ├── solaria.webp        # WebP version (0.2MB, 96% reduction)
│   └── ...                 # 6 images total
│
└── /scripts                # Python automation scripts
    ├── article_metadata.json           # SEO data for all articles
    ├── add_seo_metadata.py             # Inject SEO tags
    ├── add_accessibility.py            # Add ARIA labels, skip links
    ├── add_hamburger_menu.py           # Insert mobile nav button
    ├── update_article_themes.py        # Sync 14 themes across articles
    ├── audit_alt_text.py               # Check image alt text
    ├── convert_images_webp_sips.sh     # Convert images to WebP
    └── ...
```

## Features

### 🎨 14-Theme Color System
- **Dracula, Purple & Cyan, Teal & Pink, Gold & Violet, Lime & Violet, Rose & Teal, Orange & Violet, Sky & Orange, Amber & Indigo, Lemon & Violet, Cyan & Magenta, Magenta & Cyan, Peach & Blue, Purple & Mint**
- Theme persistence via `localStorage` (key: `gb-theme`)
- CSS custom properties for instant theme switching
- Synchronized across all 19 pages (index + 18 articles)

### 📱 Mobile-First Responsive Design
- Hamburger menu with slide-in navigation (<768px)
- Touch-friendly UI elements
- Adaptive layouts for mobile, tablet, desktop
- Breakpoint: 768px

### 🚀 SEO Optimized
- Meta descriptions on all pages (150-160 chars)
- Open Graph tags for social sharing
- Twitter Cards
- JSON-LD structured data (Article/Blog schema)
- Semantic HTML5

### ♿ Accessibility (WCAG AA)
- Skip links for keyboard navigation
- ARIA labels and roles (`navigation`, `main`, `contentinfo`)
- Keyboard focus indicators (2px accent outline)
- Alt text on all decorative images
- Screen reader friendly

### ⚡ Performance
- **WebP images**: 94.7% size reduction (17.3MB → 0.9MB)
- Lazy loading on project images
- External CSS/JS for better caching
- Minified HTML structure (1875 → 610 lines on index.html)

## Adding a New Article

1. **Create HTML file** in `/articles/` directory
2. **Use template structure** from `template.html`
3. **Add metadata** to `/scripts/article_metadata.json`:

```json
{
  "your-article.html": {
    "title": "Your Article Title — Unity Dev Blog",
    "description": "Article description (150-160 chars)",
    "category": "Category Name",
    "date": "2026-02",
    "readTime": "8 min read",
    "image": "https://galbartouv.com/Avatar.png",
    "keywords": ["Unity", "Keyword2", "Keyword3"]
  }
}
```

4. **Run automation scripts**:

```bash
# Add SEO metadata
python3 scripts/add_seo_metadata.py

# Add accessibility features
python3 scripts/add_accessibility.py

# Add hamburger menu button
python3 scripts/add_hamburger_menu.py
```

5. **Update index.html** - Add post card to the posts grid:

```html
<a class="post-card" href="articles/your-article.html">
  <div class="post-tag">// CATEGORY</div>
  <div class="post-title">Your Article Title</div>
  <p class="post-excerpt">Article excerpt...</p>
  <div class="post-footer">
    <span class="post-date">Feb 2026 · 8 min read</span>
    <span class="post-arrow">→</span>
  </div>
</a>
```

## Theme System

### How It Works

1. **14 Themes defined** in `/js/theme.js` (p1-p14)
2. **CSS Custom Properties** updated via JavaScript
3. **Preference saved** to `localStorage`
4. **Restored on page load**

### Adding a New Theme

Edit `/js/theme.js`:

```javascript
const themes = {
  // ... existing themes
  p15: {
    '--bg': '#1a1a2e',
    '--bg2': '#16213e',
    '--bg3': '#0f3460',
    '--panel': '#533483',
    '--accent': '#e94560',
    '--accent2': '#f39c12',
    '--accent3': '#3498db',
    '--text': '#ffffff',
    '--muted': '#95a5a6',
    '--dim': '#7f8c8d'
  }
};
```

Then add the button to all HTML files (index + articles):

```html
<button class="theme-option" data-theme="p15" onclick="setTheme('p15')">
  <span class="theme-swatch" style="background:linear-gradient(135deg,#e94560,#f39c12)"></span>
  <span>Your Theme Name</span>
</button>
```

## Image Optimization

### Converting Images to WebP

```bash
# Convert PNG/JPG to WebP
chmod +x scripts/convert_images_webp_sips.sh
./scripts/convert_images_webp_sips.sh
```

**Results:**
- solaria.png: 7.2MB → 0.2MB (96.2% reduction)
- dice-life.png: 4.8MB → 0.1MB (96.3% reduction)
- Total: 17.3MB → 0.9MB (94.7% reduction)

### Using WebP Images

Use `<picture>` tags for WebP with PNG/JPG fallback:

```html
<picture>
  <source srcset="images/projects/solaria.webp" type="image/webp">
  <img src="images/projects/solaria.png" alt="Solaria" class="project-image" loading="lazy">
</picture>
```

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `add_seo_metadata.py` | Inject Open Graph, Twitter Cards, JSON-LD to all articles |
| `add_accessibility.py` | Add skip links, ARIA labels, keyboard focus |
| `add_hamburger_menu.py` | Insert hamburger button HTML to all pages |
| `update_article_themes.py` | Sync 14 themes across all article pages |
| `audit_alt_text.py` | Scan for missing/empty alt attributes |
| `convert_images_webp_sips.sh` | Convert PNG/JPG to WebP (macOS, requires `cwebp`) |

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks
- **Python 3** - Automation scripts
- **WebP** - Image optimization
- **localStorage** - Theme persistence

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile

## Performance Metrics

**Before Optimization:**
- Index.html: 1875 lines
- Total images: 17.3MB
- No lazy loading
- Inline CSS/JS

**After Optimization:**
- Index.html: 610 lines (67% reduction)
- Total images: 0.9MB (94.7% reduction)
- Lazy loading enabled
- External CSS/JS with caching

**Lighthouse Targets:**
- Performance: >90
- Accessibility: >95
- SEO: >95

## License

Content © 2024 Gal Bartouv. All rights reserved.

## Contact

- Website: https://galbartouv.com
- LinkedIn: https://www.linkedin.com/in/gal-bar-touv-65a331b6/
- GitHub: https://github.com/bartouv
- Medium: https://medium.com/@galbartouv
