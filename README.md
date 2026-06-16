# Find A Site - Website Directory

A simple, fast, and beautiful directory to discover websites across various categories. Built with HTML, CSS, and JavaScript.

## Features

- **Search functionality** - Find websites by name, description, or category
- **Browse by category** - Filter websites by topic (Development, Learning, Entertainment, etc.)
- **Featured websites** - Discover popular sites on the homepage
- **Responsive design** - Works perfectly on desktop, tablet, and mobile
- **Fast and lightweight** - Pure static site with no dependencies

## Getting Started

### Run locally

1. Clone the repository:
```bash
git clone https://github.com/michaelgdavis2013-crypto/find-a-site.com.git
cd find-a-site.com
```

2. Open `index.html` in your browser, or run a local server:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Deploying to GitHub Pages

1. Push your repository to GitHub
2. Go to repository settings
3. Scroll to "GitHub Pages"
4. Select "Deploy from a branch"
5. Choose `main` branch
6. Save

Your site will be live at `https://yourusername.github.io/find-a-site.com`

To use a custom domain (like `www.find-a-site.com`):
1. Update your domain DNS settings to point to GitHub Pages
2. In GitHub repository settings, set the custom domain in the "GitHub Pages" section
3. The `CNAME` file is already configured

## Deploying to Netlify

1. Sign up at https://www.netlify.com
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set publish directory to `.`
5. Deploy

The site will be live on a `*.netlify.app` domain, or you can configure a custom domain.

## Deploying to Vercel

1. Sign up at https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it as a static site
5. Deploy

Your site will be live with a vercel domain or custom domain.

## File Structure

```
find-a-site.com/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript functionality
├── CNAME           # Custom domain file for GitHub Pages
├── netlify.toml    # Netlify deployment config
├── vercel.json     # Vercel deployment config
└── README.md       # This file
```

## Adding More Websites

Edit `script.js` and add to the `websites` array:

```javascript
{
  name: 'Your Site',
  url: 'https://yoursite.com',
  category: 'Your Category',
  description: 'Site description here'
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please create an issue on GitHub.