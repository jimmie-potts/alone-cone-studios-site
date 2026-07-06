# AGENTS.md

## Project

This repo contains Minnie's artist portfolio and service website.

The initial website showcases Minnie's mural work while introducing her upcoming holiday window painting services.

Future versions may expand to include:

* Stickers
* Greeting cards
* Tattoos
* Online store

---

# Primary Goals

* Showcase Minnie's mural portfolio.
* Introduce holiday window painting as an upcoming service.
* Make the site feel playful, colorful, and approachable.
* Help potential clients understand what Minnie offers.
* Make it easy for clients to contact Minnie by email.
* Keep the site simple, fast, and easy to maintain.

---

# Current Scope

Included in the POC:

* Single-page website
* Hero section
* Featured mural portfolio
* Holiday Window Painting (Coming Soon) section
* Short About Minnie section
* Services section
* Contact section
* Email-based inquiries

Not included in the POC:

* Online store
* Booking system
* Blog
* CMS
* Authentication
* Custom backend
* Database
* Full ecommerce
* Dedicated tattoo, sticker, or greeting card pages

The Holiday Window Painting section is intended to introduce a new service rather than display completed work. Since there are currently no holiday window painting projects to showcase, the section should invite prospective clients to reach out for more information and future bookings.

---

# Brand Direction

The website should feel:

* Derpy
* Colorful
* Flora/fauna inspired
* Silly
* Kind
* Fun
* Lighthearted
* Like a colorful adventure

Visitors should leave the site feeling like they had a good time.

The overall experience should feel like a blend of:

* A playful art gallery
* A small creative business

The artwork should always be the primary focus. The website exists to frame Minnie's work, not compete with it.

---

# Visual Direction

Preferred theme:

* Light mode

Preferred colors:

* Butter yellow
* Periwinkle blue / purple
* White
* Black

Typography direction:

* Permanent marker style
* Hand-drawn feeling
* Playful
* Bold and expressive
* Highly readable

Typography should feel like something Minnie herself might write on a sketchbook or mural wall.

Avoid typography that feels:

* Corporate
* Ultra-modern
* Luxury fashion
* Thin or delicate
* Difficult to read

Design inspiration:

* https://edie-parker.com/

Avoid visual styles that feel like:

* Generic SaaS landing pages
* Corporate consulting websites
* Dark, moody portfolios
* Sterile minimalist templates

The website should feel handcrafted without feeling messy.

---

# Tone and Copy

Copy should feel:

* Friendly
* Warm
* Playful
* Approachable
* Slightly whimsical
* Easy to read

Avoid:

* Marketing buzzwords
* Corporate language
* Sales-heavy copy
* Overly formal writing

Good examples:

> Big bright murals for playful spaces.

> Holiday windows, happy walls, and colorful little worlds.

Avoid:

> We deliver premium visual solutions for commercial environments.

---

# Tech Stack

Use:

* Astro
* React
* TypeScript
* Tailwind CSS
* Static content files
* Cloudflare Pages

Avoid unless explicitly requested:

* Custom backend services
* Databases
* Authentication
* Complex CMS platforms
* Ecommerce

---

# Development Principles

Prefer static-first architecture.

Use Astro pages by default.

Only introduce React where interactivity is needed.

Keep components:

* Small
* Reusable
* Easy to understand

Avoid over-engineering.

Optimize for simplicity and future growth.

---

# Responsive Design Requirements

The website **must be fully responsive**.

Design mobile-first.

The experience should feel equally polished on:

* Phones
* Tablets
* Laptops
* Desktop computers

Layouts should gracefully adapt without requiring separate mobile pages.

Navigation, images, galleries, videos, buttons, and contact information should remain easy to use regardless of screen size.

Test layouts at approximately:

* 375px
* 768px
* 1024px
* 1440px+

No desktop-only assumptions should be made during development.

---

# Suggested Project Structure

```text
src/
  components/
  content/
  layouts/
  pages/
  styles/

public/
  images/
  videos/

docs/
  stories/
  decisions/
```

---

# POC Site Structure

Build toward a single-page website.

Sections:

1. Hero
2. Featured Murals
3. Holiday Window Painting (Coming Soon)
4. About Minnie
5. Services
6. Contact

The Holiday Window Painting section should clearly communicate that this service is launching soon. Since there are currently no completed projects to display, do **not** use placeholder artwork or stock images pretending to represent Minnie's work.

Instead, use friendly, inviting copy that encourages visitors to contact Minnie if they're interested in custom holiday window painting for their business, storefront, or event.

Future sections may include:

* Stickers
* Greeting Cards
* Tattoos
* Shop

Do not build these until requested.

---

# Content Guidelines

The initial content should focus on:

* Murals
* Holiday window painting (coming soon)
* Hiring Minnie

Murals are the primary portfolio content for Version 1.

Holiday Window Painting is an upcoming service.

The Holiday Window Painting section should be informational until real projects become available.

Suggested messaging should communicate excitement about the upcoming service and invite potential clients to reach out for more information.

Never fabricate:

* Portfolio pieces
* Testimonials
* Example projects
* Biography details
* Pricing
* Availability
* Service locations
* Business policies

Use placeholder content only when it is clearly labeled as placeholder.

---

# Design Guidance

The artwork is the hero.

The interface should support the artwork instead of competing with it.

Design ideas that fit the project:

* Rounded corners
* Organic shapes
* Hand-drawn accents
* Playful transitions
* Soft shadows
* Bright but restrained colors
* Plenty of white space

Avoid visual clutter.

Avoid making every section visually different.

Consistency is more important than showing off.

---

# Contact Guidance

Primary contact method:

* Email

The website should make it easy to inquire about:

* Murals
* Holiday window painting

For Holiday Window Painting specifically, encourage visitors to reach out even though portfolio examples are not yet available.

The messaging should present this as an exciting new service rather than apologizing for the lack of completed projects.

A hosted contact solution such as Formspree may be added later.

Do not build a custom backend.

---

# Ecommerce Guidance

Do not build ecommerce.

Possible future integrations:

* Shopify
* Etsy
* Square
* Big Cartel

Design with future expansion in mind without implementing it now.

---

# Agent Workflow Rules

Before making changes:

1. Read this file.
2. Read the assigned story.
3. Understand the acceptance criteria.
4. Identify the files you expect to modify.
5. Avoid unrelated changes.
6. Keep commits focused.

---

# Parallel Development Rules

Each implementation agent should work in its own:

* Branch
* Git worktree

Avoid editing shared files simultaneously.

Shared files include:

* `package.json`
* `astro.config.*`
* `tailwind.config.*`
* Global CSS
* Root layouts
* Content schemas

---

# File Ownership Guidance

Safe parallel work:

* Individual pages
* Individual components
* Documentation
* Individual content collections

Avoid parallel edits to:

* Shared layouts
* Global styles
* Configuration files
* Build tooling
* Shared content schemas

---

# Coding Standards

Use TypeScript.

Prefer descriptive names.

Favor readability over cleverness.

Keep components focused.

Avoid unnecessary dependencies.

Use Tailwind utilities before writing custom CSS.

Comment code only when the intent is not obvious.

---

# Accessibility

Use semantic HTML.

Every meaningful image requires descriptive alt text.

Interactive elements must support keyboard navigation.

Maintain sufficient color contrast.

Do not rely solely on color to communicate information.

Videos should never autoplay with sound.

---

# Performance

Optimize for static generation.

Ship as little JavaScript as possible.

Use responsive images.

Compress images before committing.

Optimize videos for web playback.

Prefer fast loading over flashy animations.

---

# Testing

Before completing a story, run:

```bash
npm install
npm run build
```

If available, also run:

```bash
npm run lint
npm run format
```

Do not claim tests passed unless they were actually run.

If they cannot be run, explain why.

---

# Pull Request Expectations

Each PR should include:

* Summary
* Files changed
* Testing performed
* Screenshots for UI changes
* Known limitations
* Follow-up work (if applicable)

---

# Definition of Done

A story is complete when:

* The requested functionality exists.
* The site builds successfully.
* The implementation is responsive.
* Accessibility basics are satisfied.
* Placeholder content is clearly identified.
* No unrelated files were modified.
* Follow-up work is documented when necessary.

When making design decisions not explicitly covered by this document, choose the option that best reinforces Minnie's personality: **playful, colorful, approachable, handcrafted, and centered on her artwork.**
