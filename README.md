# Aeti Cleaning Services Website

A modern React-based website for Aeti Cleaning Services with updated service offerings, a polished UI, and a quote form for cleaning and laundry requests.

## Project overview

This project is built with React and Create React App. It includes:
- a modern landing page for the brand
- updated services for carpet, rugs, upholstery, mattresses, curtains/blinds, windows, and laundry
- a quote form with dynamic pricing logic
- a responsive layout suitable for desktop and mobile browsing

## Local development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Install dependencies

```bash
npm install
```

### Start the local development server

```bash
npm start
```

Open http://localhost:3000 to view the website locally.

### Run tests

```bash
npm test -- --watch=false
```

### Build for production locally

```bash
npm run build
```

The production build will be generated in the `build` folder.

## Local deployment checklist

1. Install dependencies with `npm install`.
2. Start the app using `npm start`.
3. Verify the site at http://localhost:3000.
4. Run `npm test -- --watch=false`.
5. Run `npm run build`.
6. Review the generated `build` directory.
7. Upload the contents of `build` to the hosting account when ready.

## Live deployment notes for Bisup Nepal Hosting

### Hosting details
- Hosting package: Business
- Domain: http://aeticleaningservices.com.au/
- Nameserver 1: ns50.bisup.com
- Nameserver 2: ns51.bisup.com
- Temporary FTP host: 138.199.140.147
- Temporary webpage URL: http://138.199.140.147/~aeticlea/
- FTP username: aeticlea
- Use the password provided in your Bisup hosting control panel

### Deployment method
This project is a React single-page application, so the recommended deployment approach is:
1. Build the app locally with `npm run build`.
2. Upload the contents of the `build` folder to the public web directory of your hosting account.
3. Ensure the server supports URL rewriting for client-side routes.

### Important hosting note for SPA routing
Because this app uses React Router, the hosting server should rewrite all requests to `index.html` so routes such as `/services` and `/about` work correctly.

A `.htaccess` file is included in the project for Apache-based hosting. Upload it alongside the build files if your hosting panel supports Apache rewriting.

### Recommended deployment sequence
1. Upload the build files to the hosting root or public_html folder.
2. Test the temporary URL first.
3. Once the domain propagation is complete, test the live domain.
4. Confirm the homepage and all internal routes load correctly.
5. Verify the contact and quote form submission flow once the site is live.

## Recommended content and branding notes

- Brand name should remain: Aeti Cleaning Services
- Core services should remain aligned with the updated offerings:
  - Carpet per room
  - Rugs
  - Couch/Upholstery
  - Mattress options: Single / Double / King
  - Curtains/Blinds (Window and Door)
  - Window cleaning
  - Laundry: Washing, Drying, Ironing, Folding
  - Delivery fee: +$10

## Troubleshooting

### If the local app does not start
- Make sure Node.js and npm are installed.
- Delete `node_modules` and reinstall dependencies if necessary.
- Run `npm install` again.

### If the live site shows a blank page
- Confirm that all files from the `build` folder were uploaded.
- Confirm that `.htaccess` is uploaded correctly.
- Check that the server supports URL rewriting.

### If the quote form does not send
- Verify the EmailJS configuration in the project.
- Confirm that the service ID, template ID, and public key are valid.

## Future development guidance

Keep future changes aligned with the original business goal:
- keep the design modern, fresh, and professional
- preserve the updated laundry and fabric-care service offerings
- maintain a mobile-friendly experience
- keep deployment simple and hosting-friendly for Bisup
