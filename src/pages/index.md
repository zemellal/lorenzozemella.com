---
layout: layouts/homepage.njk
url: /
title: Lorenzo Zemella
subtitle: Software developer, entrepreneur
description: Lorenzo Zemella's personal website.
date: 2023-04-23
tags: index
---

<header>

<h1><a href="/" class="text-inherit no-underline">{{ title }}</a></h1>

<p class="subtitle">{{subtitle}}</p>

</header>

<section>

This is my minimalistic landing page. I am a [web developer](/profile/) and co-founder of [Novele]({{links.Novele}}). 

Say hi by emailing [{{author.email}}](mailto:{{author.email}}). You can also find me on [LinkedIn]({{author.x.social.linkedin}}) and [Instagram]({{author.x.social.instagram}}). 

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

</section>