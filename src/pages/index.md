---
layout: layouts/homepage.njk
url: /
title: Full-Stack Engineer | CTO | Co-founder
subtitle: Software developer, entrepreneur
description: Lorenzo Zemella's personal website.
date: 2023-04-23
tags: index
---

<header>

<h1><a href="/" class="text-inherit no-underline">{{ author.name }}</a></h1>

<p class="subtitle">{{subtitle}}</p>

</header>

<section>

This is my minimalistic landing page. I am a [full-stack developer](/profile/) with expertise in building high-performing web applications and APIs for fast-paced startups. I have been a co-founder and CTO at a [renewable energy startup]({{links.Novele}}), at a web2.5 platform, and a frontend engineer for a social music app.

Say hi by emailing [{{author.email}}](mailto:{{author.email}}). You can also find me on [LinkedIn]({{author.x.social.linkedin}}) and [Instagram]({{author.x.social.instagram}}).

</section>
<!-- <section>

## Posts

<ul class="pt-4">
{% for post in search.pages("type=post", "date=desc") %}
  <li>
      <a href="{{post.data.url}}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>

</section> -->

<section>

## About

See my [CV](/profile/), and read more about this [this site](/about/) and my [tech uses](/uses/).

When I'm not at the computer, I am either [taking photos](/photography/), admiring automobiles, playing [guitar](/guitar/), traveling in search of amazing food, or drinking lots of espresso!

<!-- Some useful facts and [references](/references/). Hopefully they are also useful to you.  -->

</section>
