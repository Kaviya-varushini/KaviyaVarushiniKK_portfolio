# Kaviya Varushini — Full-Stack Developer Portfolio

A responsive full-stack developer portfolio with a Node.js + Express + MongoDB contact form.

## Highlights
- Responsive portfolio UI
- Premium contact form
- Contact submissions stored in MongoDB
- Node.js + Express backend
- Helmet, CORS and rate limiting
- BluePrints live project and GitHub link
- Downloadable resume PDF
- LinkedIn profile button with LinkedIn logo

## Links
- Portfolio: https://kaviyaportfolio.s.gy/
- BluePrints: https://blueprintstech.netlify.app/
- BluePrints GitHub: https://github.com/Kaviya-varushini/blueprintstech
- LinkedIn: https://www.linkedin.com/in/kaviyavarushini

## Run locally
1. Copy .env.example to .env.
2. Set MONGODB_URI to your MongoDB connection string.
3. Run npm install.
4. Run npm start.
5. Open http://localhost:5000 (do not double-click public/index.html).

## Contact form troubleshooting
If you see “Failed to fetch”, the browser cannot reach the Node.js API. Start the backend with npm start and open the site at http://localhost:5000. The form endpoint is POST /api/contact. The .js.map source-map warnings shown by browser developer tools are unrelated to the contact form.
