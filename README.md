# @anny.co/tailwindcss-gutters

This plugin polyfills the `gap` utility for flexboxes not being supported for Safari et al.

> NOTE: Support for IE11 is dropped intentionally! We perform active deprecation!

## Usage

Install the plugin using your package manager:

```shell
yarn add @anny.co/tailwindcss-gutters
```

Add the plugin to your tailwind.config.js

```JS
module.exports = {
  ...
  plugins: [
    require('@anny.co/tailwindcss-gutters'),
    ...
  ]
}
```

Apply the `gutters` (or `gutters-x, gutters-y`, respectively) utility class to
your flexbox container.

```html
<div class="flex items-center gutters-x-4">
  <div></div>
  <div></div>
  <div></div>
</div>
```