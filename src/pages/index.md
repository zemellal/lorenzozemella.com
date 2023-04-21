---
layout: layouts/homepage.njk
url: /
title: Lorenzo Zemella
subtitle: tech - code - batteries - cars - guitar - watches - coffee
description: Lorenzo Zemella's personal website.
tags: index
---

<header>

<h1><a href="/" class="text-inherit no-underline">{{ title }}</a></h1>

<p class="text-stone-500">{{subtitle}}</p>

</header>

<section>

My minimalistic landing page. 

</section><section>

## Posts

<ul class="pt-4">
{% for post in search.pages("type=post", "date=desc") %}
  <li>
      <a href="{{post.data.url}}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>

</section><section>

## About

My goal with this site is to keep it timeless and very lightweight. I write the content in Markdown, commit the changes to the git repo, which is statically built by [Lume](https://lume.land/) + [Deno](https://deno.land/), and deployed globally with [Cloudflare Pages](https://pages.cloudflare.com/). 

My [uses](/uses/).

Some useful facts and [references](/references/). Hopefully they are also useful to you. 

More coming soon ... 

</section><section>

## Connect

Find me on [LinkedIn]({{author.x.social.linkedin}}). 

</section>