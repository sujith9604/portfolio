# Portfolio

React + Vite portfolio of Sujith Sai Dhaipule. Live: https://sujith9604.github.io/portfolio/

## Edit the content

All text lives in `src/data/site.js` (name, experience, skills, education, projects).
Lines marked `CONFIRM` should be checked once. Project images are animated SVGs in `public/images/`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
npm run lint
npm run build
npm run preview    # http://localhost:4173/portfolio/
```

## Contact form

The form is a placeholder: clicking "Send Message" shows a message asking visitors to email you instead.
To make it work later, connect it to a service such as EmailJS or Formspree in `src/pages/Contact.jsx`.

## Deploy (GitHub Pages)

```bash
npm run deploy     # builds, then publishes dist/ to the gh-pages branch
```

GitHub repo, Settings, Pages: Source "Deploy from a branch", Branch `gh-pages`, folder `/ (root)`.
Routing uses `BrowserRouter` with `basename="/portfolio"`, and `public/404.html` redirects deep links
back to the app.
