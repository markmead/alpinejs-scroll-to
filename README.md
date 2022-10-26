# Alpine JS Scroll To

Easily add scroll to functionality with options powered by Alpine JS 🐭

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-scroll-to@latest/dist/scroll-to.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-scroll-to

npm install -D alpinejs-scroll-to
```

```js
import Alpine from 'alpinejs'
import scrollto from 'alpinejs-scroll-to'

Alpine.plugin(scrollto)

Alpine.start()
```

## Example

```html
<!-- This will scroll to `#AboutContent` on Alpine init -->
<body x-data x-init="$scrollTo({ targetId: 'AboutContent' })">
  <header x-scroll-to-header class="fixed h-20 top-0 inset-x-0 z-50 ">
    ...
  </header>

  <div>
    <nav>
      <!--
        This will scroll to `#AboutContent` when clicked with smooth scrolling
        disabled and the header height will be offset meaning no overlap
      -->
      <a
        href="#AboutContent"
        x-on:click.prevent="$scrollTo({ offsetHeader: true, useSmooth: false })"
      >
        About
      </a>

      <!--
        This will scroll to `#TeamContent` when clicked with smooth scrolling
        enabled but the header height will not be offset meaning overlap
      -->
      <a href="#TeamContent" x-on:click.prevent="$scrollTo"> Team </a>
    </nav>

    <div class="my-[100vh]">
      <div id="AboutContent"> About </div>

      <div id="TeamContent"> Team </div>
    </div>
  </div>
</body>
```

### Options

**`targetId`**

This expects the `id` of an element to scroll to without the `#`.

Useful for when you aren't triggering the scroll to from an anchor tag.

**`offsetHeader`**

By default this is `false`.

Setting this to `true` will offset the height of the header element when you
scroll. No more overlap!

You target the header element by applying `x-scroll-to-header` to it.

```html
<header x-scroll-to-header class="fixed h-20 top-0 inset-x-0 z-50">
  ...
</header>
```

**`useSmooth`**

By default this is `true`.

Setting this to `false` will remove the smooth scroll, instead it will be
instant.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-scroll-to)
![](https://img.shields.io/npm/v/alpinejs-scroll-to)
![](https://img.shields.io/npm/dt/alpinejs-scroll-to)
![](https://img.shields.io/github/license/markmead/alpinejs-scroll-to)
