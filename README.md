# 🌿 Eco-Me Africa Website

A complete, modern, SEO-optimized nonprofit website for Eco-Me Africa — built with HTML5, CSS3, and Vanilla JavaScript. Ready for GitHub Pages hosting.

---

## 📁 Folder Structure

```
eco-me-africa/
├── index.html              ← Main homepage (all sections included)
├── css/
│   └── style.css           ← All styles (modular, responsive)
├── js/
│   └── script.js           ← All interactive features
├── assets/                 ← Place ALL images here
│   ├── logo.png            ← Brand logo
│   ├── hero.jpg            ← Hero section background
│   ├── founder.jpg         ← Founder Amdiyya portrait
│   ├── community-1.jpg     ← Mission section image
│   ├── product-1.jpg       ← Everyday Pad product photo
│   ├── product-2.jpg       ← Night & Heavy Pad product photo
│   ├── product-3.jpg       ← Starter Kit product photo
│   ├── blog-1.jpg          ← Blog post 1 featured image
│   ├── blog-2.jpg          ← Blog post 2 featured image
│   ├── blog-3.jpg          ← Blog post 3 featured image
│   ├── gallery-1.jpg       ← Gallery: community outreach
│   ├── gallery-2.jpg       ← Gallery: school visit
│   ├── gallery-3.jpg       ← Gallery: products
│   ├── gallery-4.jpg       ← Gallery: community
│   ├── gallery-5.jpg       ← Gallery: founder activities
│   ├── gallery-6.jpg       ← Gallery: outreach event
│   ├── partner-1.png       ← Partner logo 1
│   ├── partner-2.png       ← Partner logo 2
│   ├── partner-3.png       ← Partner logo 3
│   ├── partner-4.png       ← Partner logo 4
│   ├── partner-5.png       ← Partner logo 5
│   └── partnership-deck.pdf ← Downloadable partnership deck
└── README.md
```

---

## 🚀 GitHub Pages Deployment

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set Source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/eco-me-africa/`

---

## 📸 Image Recommendations

| File | Recommended Size | Notes |
|------|-----------------|-------|
| hero.jpg | 1920×1080px | Horizontal, community/woman-focused |
| founder.jpg | 800×1000px | Portrait orientation |
| community-1.jpg | 900×700px | Outreach or community scene |
| product-*.jpg | 600×600px | Clean product shots on white/light bg |
| blog-*.jpg | 800×500px | Relevant editorial images |
| gallery-*.jpg | 800×600px | Mix of landscape and portrait |
| partner-*.png | 300×100px | Transparent background logos |
| logo.png | 200×200px | Transparent background |

**Pro tip:** Convert all images to WebP format for 30-40% smaller file sizes.

---

## ✨ Features Included

- ✅ Sticky navigation with scroll effects
- ✅ Mobile hamburger menu
- ✅ Hero section with emotional storytelling
- ✅ Animated impact counters
- ✅ Scroll reveal animations
- ✅ Testimonial slider with touch/swipe support
- ✅ Blog modal (no 404 errors — opens inline)
- ✅ Blog category filtering
- ✅ Gallery lightbox with keyboard navigation
- ✅ WhatsApp floating button
- ✅ Scroll-to-top button
- ✅ Newsletter form with validation
- ✅ Contact form with validation
- ✅ Toast notifications
- ✅ FAQ accordion (ready to use)
- ✅ Full SEO meta tags + Open Graph
- ✅ Semantic HTML5 + ARIA accessibility
- ✅ Mobile-first responsive design
- ✅ Lazy image loading
- ✅ CSS custom properties for easy theming

---

## 🎨 Brand Colors

```css
--green-primary: #3D8B3D
--green-bright:  #7CC243
--pink-primary:  #C21875
--pink-bright:   #EC3E9B
--pink-light:    #F8B6D2
```

---

## 📧 Connecting the Contact Form

Replace the contact form submit handler in `js/script.js` with a real form backend:

**Option A — Formspree (free):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B — EmailJS:**
See [emailjs.com](https://www.emailjs.com/) for setup.

---

## 🗺️ Adding Google Maps

In `index.html`, replace the `.map-placeholder` div with:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="300" style="border:0;" allowfullscreen=""
  loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

Made with 💚 for Eco-Me Africa | Ending period poverty, one pad at a time.
