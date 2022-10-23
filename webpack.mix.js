const mix = require('laravel-mix');

mix
  .options({ manifest: false })
  .copy('node_modules/@abenevaut/gamepro/dist/js/theme.min.js', 'dist/assets/theme.min.js')
  .copy('node_modules/@abenevaut/gamepro/dist/css/theme.min.css', 'dist/assets/theme.min.css')
  .copyDirectory('node_modules/@abenevaut/resources/dist/maskot-2013-favicon', 'dist/favicon')
  .copyDirectory('images', 'dist/images')
;
