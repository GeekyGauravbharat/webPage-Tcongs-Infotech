# Tcongs Infotech — Website

A responsive marketing website for **Tcongs Infotech**, showcasing services, work process, FAQs, and a contact section for potential clients.

## 🔗 Live Preview

> Add your live URL here once deployed (e.g. GitHub Pages, Netlify, Vercel).

## 📁 Project Structure

```
tcongs/
├── index.html      # Page markup
├── styles.css       # All styling (layout, colors, responsive design)
├── script.js        # Contact form interaction
└── README.md
```

## ✨ Features

- Responsive layout that adapts to mobile, tablet, and desktop
- Sticky navigation with smooth-scroll anchor links
- Sections for Hero, Services, Process, FAQ, and Contact
- Accessible `<details>`-based FAQ accordion (no JS required)
- Simple contact form with basic client-side submit handling
- Clean, CSS-variable-based theme for easy customization

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. Open `index.html` in your browser — no build step or dependencies required.

## 🎨 Customization

Colors, spacing, and border radius are controlled via CSS variables at the top of `styles.css`:

```css
:root {
  --bg: #ffffff;
  --primary: #4f46e5;
  --text: #1a1d24;
  --radius: 12px;
  ...
}
```

Update these values to quickly re-theme the site.

## 📬 Contact Form

The form in `script.js` currently prevents the default page reload and shows a confirmation alert. To make it functional, connect it to a backend endpoint or a form service such as Formspree, Netlify Forms, or EmailJS.

## 📄 License

This project is provided as-is for use by Tcongs Infotech. Add a license of your choice (e.g. MIT) if this repository will be public/open-source.

## 📍 About

Tcongs Infotech — Mumbai, India. Serving clients worldwide with web development, app development, e-commerce, and digital marketing solutions.
