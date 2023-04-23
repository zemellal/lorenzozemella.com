---
url: /about/
title: Site
subtitle: About this website
description: About this website
date: 2023-04-21
tags:
    - about
    - site
    - Deno
    - Lume
    - Nunjucks
    - Cloudflare Pages
    - TailwindCSS
---

The goal is to keep it timeless and very lightweight. No navigation bar, no JavaScript, only HTML and minimal CSS with [Tailwind CSS](https://tailwindcss.com/) classes. Just click the title to go back to the home page. The sans-serif font is [Nunito](https://fonts.google.com/specimen/Nunito).

The content is all written in Markdown with [Nunjucks](https://mozilla.github.io/nunjucks/) templating language for the layouts and dynamic components. Everything is kept in one place, no CMS or database to sign in to.  After I commit the changes to a git repo, it is statically built by [Lume](https://lume.land/) + [Deno](https://deno.land/) on [Cloudflare Pages](https://pages.cloudflare.com/), where it is globally deployed at the edge for super quick latency. I wanted to use something different to build this site, and was looking for simplicity, fast builds, and no JavaScript frameworks.  I use Cloudflare professionally and for many personal projects. 