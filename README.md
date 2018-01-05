# AMP related issues encountered by AliExpress Team

	> Demo for debugging purpose

## amp-bind exceeds 2000 binding issues?

We do have 1 pending issue on github, please see [github issue #12517](https://github.com/ampproject/amphtml/issues/12517)
for more information

Please play around with **amp-binding-limit-exceeds-issue.html** in order to reproduce the error.

This demo contains 2 `<amp-list>`, the first `<amp-list>`fetches all albums; the second `<amp-list>` fetches all **photos** based on the **album selected** by user.

![ezgif com-video-to-gif 3](https://user-images.githubusercontent.com/4065175/34616043-e0556094-f271-11e7-9a4a-2002f190f436.gif)

## Page Navigation issue

Basically, we have tried 4 approaches to do the navigation, more information on [github # 12610](https://github.com/ampproject/amphtml/issues/12610)
, hope your guys can advise us the best way to achieve `<a>` navigation, what we want is to bind some `<amp-state>` into the url and passed as parameter to the following page.


### Example: List Page -> Detail Page.

Pass some product attributes selected by users from Product List page to Product Detail page as parameter.

If using the `<a [href]>` We notice `<a [href]>` will auto append `domain` as prefix if the element `<a>` is inside `<amp-list>`. Please play around with **dynamic-href-in-amp-list.html** to reproduce the error.

![ezgif com-video-to-gif 5](https://user-images.githubusercontent.com/4065175/34616046-e0cfa9c6-f271-11e7-9732-53e08dcf5ade.gif)

## amp-img is not showing on scrollable <amp-lightbox>

Basically we do have 1 `<amp-list>` within `<amp-lightbox>`, and by default `<amp-img>` is not on the screen viewport,  it is not showing even though we have scroll to bottom of the page. Is there any **actions or events** that we can trigger the`<amp-img>` to **display** by overwriting `<amp-img>` nature lazy behavior ? else , any suggestions on this ?

Please play around **amp-img-not-showing-on-lightbox.html** for more information.

![ezgif com-video-to-gif 4](https://user-images.githubusercontent.com/4065175/34616044-e091c39a-f271-11e7-98b2-70e76aa3a344.gif)

## auto carousel stop after user tap & scroll

The scene is that we have an `<amp-carousel>` in our home page, the normal interaction has no problem. But when a user is tapping down a banner and scroll it, after that, the carousel can not automatically scrolling anymore. You can see our demo and check the effect.

![ezgif com-video-to-gif 6](https://user-images.githubusercontent.com/4065175/34616047-e10d0df2-f271-11e7-8551-9b8f38cebb89.gif)
