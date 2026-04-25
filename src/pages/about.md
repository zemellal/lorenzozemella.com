---
layout: ../layouts/PageLayout.astro
title: Site
description: About this website
lastUpdated: March 29, 2026
---

The goal is to keep it timeless and very lightweight. No navigation bar, no JavaScript, only HTML and minimal CSS with [Tailwind CSS](https://tailwindcss.com/) classes. Just click the title to go back to the home page. The sans-serif font is [Geist](https://fonts.google.com/specimen/Geist).

The content is all written in Markdown. Everything is kept in one place, no CMS or database to sign in to. After I commit the changes to a git repo, it is statically built by [Astro](https://astro.build/) on [Cloudflare Workers](https://workers.cloudflare.com/), where it is globally deployed at the edge for super quick latency. I use Cloudflare professionally and for many personal projects.
