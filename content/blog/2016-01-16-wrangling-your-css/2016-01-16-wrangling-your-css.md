---
title: Wrangling Your CSS Into Submission
date: "2016-01-16T21:52:45+04:00"
description: Wrangling Your CSS Into Submission
---

Do you work on an enterprise system? Do you have a single page web app? Did you just go through a major redesign? Does re-styling a seemingly harmless little element tend to break other elements? If you answered “yes” to any of these questions, then this post is probably for you.

Last summer at [GrubHub](http://about.grubhub.com/about-us/overview/default.aspx), we reached a major milestone in the company’s history: completing the consumer site’s first ever facelift. Because of business demands, this facelift was conceptualized and executed (design + research + build) in just _three months!_

![Seamless Homepage Post-Facelift](/images/SL_homepage.png){:class="img-responsive useBorder"}

After we celebrated our launch, we evaluated. We found that while the overall accomplishment was a huge success, the underlying code was a complete disaster. Because of the lack of any kind of process, most components were prototyped out in CodePen and then literally just dumped into the code base. Developers were given individual components and views to style, and they did so independently and in parallel. There was no thought given to scale or performance, only to meet the deadline.

As you can imagine, our CSS code ballooned. We went from ~180kb at start, to over 370kb by the finish. In just three months we doubled the size of our CSS! The worst part of this was that, being a single page app, we served the entire payload at once from the document head. That meant that critical downloads were blocked while CSS was being downloaded.

Now, even though our site looked nice and pretty, it performed poorly and was very brittle and susceptible to breakage. Writing new code was painful, and in the interest of time, devs just starting putting code anywhere to get the job done. It was quickly becoming a nightmare.

![GrubHub Homepage Post-Facelift](/images/GH_homepage.png){:class="img-responsive useBorder"}

Towards the end of the facelift, my manager looked at me for an answer. We needed someone to take control of this mess and I was interested. He named me the tech lead for CSS and set me to work. In a short turn around time of about two months, we went from a bloated code base, to a lean, organized, style-guide-driven development process. How did we do it? This series of posts is a collection of learnings from the process, so you can weed out the mess and not waste a lot of time figuring out what to do next.

Up First - [Make Some Rules](http://www.snailbites.com/blog/making-your-code-standard/) »

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](http://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

```js
function helloWorld() {
    console.log("Hello World!")
}
```
