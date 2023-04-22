---
url: /about/
title: Site
subtitle: About this website
description: About this website
tags:
    - page
    - about
---

The goal is to keep it timeless and very lightweight. No navigation bar, no JavaScript, only HTML and minimal CSS with [TailwindCSS](https://tailwindcss.com/) classes. Just click the title to go back to the home page. The sans-serif font I used is [Nunito](https://fonts.google.com/specimen/Nunito).

The content is all written in Markdown with [Nunjucks](https://mozilla.github.io/nunjucks/) templating language. I commit the changes to a git repo, no CMS or database. After the commit is pushed, it is statically built by [Lume](https://lume.land/) + [Deno](https://deno.land/) on [Cloudflare Pages](https://pages.cloudflare.com/), where it is globally deployed at the edge for super quick latency. I wanted to use something different to build this site, and was looking for simplicity, fast builds, and no JavaScript frameworks.  I use Cloudflare professionally and for many personal projects. 