# Portfolio Website Specification

## Project Overview
- **Type**: Personal portfolio website
- **Core**: Dynamically generated project pages, profile showcasing
- **Tech Stack**: React + Vite, React Router, Framer Motion

## Architecture

```
/src
  /components
    /layout     - Layout components (Header, Footer, Layout...)
    /home       - Home page components
  /pages
    /Home       - Home page
    /Projects   - Projects list page
    /ProjectDetail - Dynamic project page
  /data
    profile.json - Personal information
    projects.json - Projects data
  /styles       - Global styles
```

## Data Structure

### profile.json
```json
{
  "name": "string",
  "role": "string",
  "title": "string",
  "shortBio": "string",
  "fullBio": "string",
  "socials": {
    "instagram": "url",
    "linkedin": "url",
    "facebook": "url",
    "email": "email",
    "github": "url"
  }
}
```

### projects.json
```json
[
  {
    "id": "string",
    "slug": "string",
    "title": "string",
    "summary": "string",
    "description": "string",
    "technologies": ["string"],
    "status": "completed|in-progress|planned",
    "image": "url",
    "links": { "live": "url", "github": "url" },
    "files": [{ "name": "url" }],
    "timeSpent": "string",
    "idea": "string",
    "timeline": [{ "step": "string", "date": "string" }],
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

## Features

1. **Home Page**: Profile with animations, social links, visual depth
2. **Projects**: Filterable cards grid, modern design
3. **Project Pages**: Dynamic routing /projects/:slug, rich content