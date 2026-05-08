# Bright Path Education

This project is now wired for Sanity CMS with local fallback content.

## Run the website

```bash
npm run dev
```

## Run Sanity Studio

Before starting Studio, create a Sanity project and add these environment variables:

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-05-08
```

Then start Studio:

```bash
npm run studio
```

## What to edit in Studio

Open the `Site Settings` document and fill:

1. Hero content
2. About section
3. Programs
4. Facilities
5. Admission steps
6. Gallery
7. Testimonials
8. Achievements
9. Contact details
10. FAQ

If Sanity is not configured, the site will still work using the built-in fallback content.
