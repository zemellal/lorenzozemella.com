---
layout: layouts/homepage.njk
url: /
title: Lorenzo Zemella
subtitle: Software developer, entrepreneur
description: Lorenzo Zemella's personal website.
tags: index
---

<header>

<h1><a href="/" class="text-inherit no-underline">{{ title }}</a></h1>

<p class="subtitle">{{subtitle}}</p>

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

My goal with [this site](/about/) is to keep it timeless and very lightweight. I want to keep it current without putting in too much work, so I simply write content in Markdown, and automatically export the static files and deploy globally. 

My [uses](/uses/). Other interests and hobbies of mine are [photography](/photography/), automobiles, playing [guitar](guitar), watches, and drinking lots of coffee. 

<!-- Some useful facts and [references](/references/). Hopefully they are also useful to you.  -->

More coming soon ... 

</section><section>

## Connect

Find me on [LinkedIn]({{author.x.social.linkedin}}). 

</section>