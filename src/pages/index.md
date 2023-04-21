---
layout: layouts/homepage.njk
url: /
title: Lorenzo Zemella
subtitle: tech - code - entrepreneur - cars - batteries - guitar
description: Lorenzo Zemella's personal website.
tags: index
---

<header>

<h1><a href="/" class="text-inherit no-underline">{{ title }}</a></h1>

<p class="text-stone-500">{{subtitle}}</p>

</header>

<section>

Coming soon... 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Urna molestie at elementum eu facilisis sed odio morbi quis. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Interdum velit laoreet id donec ultrices tincidunt. 

</section><section>

## My Posts

<ul class="pt-4">
{% for post in search.pages("type=post") %}
  <li>
      <a href="{{post.data.url}}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>

</section><section>

## Writing

Coming soon... 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</section><section>

## Connect

Connect on [LinkedIn]({{author.x.social.linkedin}}). 

</section>