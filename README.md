# Learnings
As I learn I often come across tips, tricks, snippets, resources, or just quick reminders for basic things, that I want to keep handy. This is where I'll keep those things.

- [JavaScript](learn.js)
- [Vue](vue)
- [Terminal Commands](#terminal-commands)
- [Custom Fonts](#custom-fonts)

## Terminal Commands

- List global packages: `npm list -g --depth 0`
- Simple server or [http-serve](https://www.npmjs.com/package/http-server): `http-server ./`

## Custom Fonts

### [Loading Custom Fonts](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)

Preload the preferred version and set the unicode range.

```html
<head>
  <!-- Other tags... -->
  <link rel="preload" href="/fonts/awesome-l.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>
```

```css
@font-face {
  font-family: 'Awesome Font';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/awesome-l.woff2') format('woff2'), /* will be preloaded */ 
       url('/fonts/awesome-l.woff') format('woff'),
       url('/fonts/awesome-l.ttf') format('truetype'),
       url('/fonts/awesome-l.eot') format('embedded-opentype');
  unicode-range: U+000-5FF; /* Latin glyphs */
}
```