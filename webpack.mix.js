const mix = require('laravel-mix');

/*  |--------------------------------------------------------------------------
    | Mix Asset Management
    |--------------------------------------------------------------------------
    |
    | Mix provides a clean, fluent API for defining some Webpack build steps
    | for your Laravel application. By default, we are compiling the Sass
    | file for the application as well as bundling up all the JS files.
    |
*/

/*mix.js('modules/custom/carocim_simulateur/js/components/jqxGrid/main.js', 'themes/contrib/drupal8_zymphonies_theme/public/js')*/
mix.js('modules/custom/carocim_simulateur/js/carocim-simulateur.js', 'themes/contrib/drupal8_zymphonies_theme/public/js')
   .sass('modules/custom/carocim_simulateur/sass/app.scss', 'themes/contrib/drupal8_zymphonies_theme/public/css');