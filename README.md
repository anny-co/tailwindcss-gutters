# @anny.co/tailwindcss-gutters

> _NOTE_: with the mainstream adoption of "gap" for flex (even in Safari!), this package has become obsolete.
> It remains available, but should be phased out gradually, due to _flex-gap handling line breaks better than
> the negative-margin solution that this plugin implements (breaking indentation on the second line at line break)_

This plugin polyfills the `gap` utility for flexboxes not being supported for Safari et al.

> NOTE: Support for IE11 is dropped intentionally! We perform active deprecation!

## Usage

Install the plugin using your nodejs package manager:

```sh
yarn add @anny.co/tailwindcss-gutters
```

Add the plugin to your tailwind.config.js

```js
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
