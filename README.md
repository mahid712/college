# Mahatma Gandhi Memorial College Website

The official website for Mahatma Gandhi Memorial College (MGM), Udupi. The site brings together information about the college, its academic departments, student services, campus facilities, events, scholarships, and admissions.

## Features

- College information, including its history, vision, management, and messages from the Principal and Vice Principal.
- Academic program, department, faculty, research, and campus-life pages.
- Student resources, including syllabus information, e-resources, placements, and facilities.
- Scholarship and endowment information, with a guided scholarship application portal and document uploads.
- An India and Karnataka festival calendar.
- Day College and Evening College admissions form links.
- Responsive layouts for desktop and mobile devices.

## Technology

- React
- React Router
- Vite
- Sass (SCSS)
- ESLint

## Requirements

- Node.js and npm

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal when the server is ready.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run deploy` | Publish the built site using `gh-pages`. |

## Project Structure

```text
src/
  assets/       Images, documents, and other static resources
  components/   React pages and shared interface components
  data/         Data used by pages, including calendar events
  scss/         Page and component styles
  App.jsx       Application routes and shared layout
  main.jsx      React application entry point
```

## Deployment

The site is configured for GitHub Pages under the `/college/` base path. To build and deploy:

```bash
npm run deploy
```

The `predeploy` script builds the site before it is published.

## Scholarship Portal

The scholarship portal includes a multi-step application flow, document size checks, and an availability check before allowing submission. Submitted applications are sent to the college's configured Firebase Realtime Database. Maintain the Firebase project configuration and database security rules in line with the college's operational and privacy requirements.
