# DEWMIX Digital WordPress Theme

This folder is a WordPress theme converted from the static DEWMIX Digital site. It does not require Elementor or any plugin dependency.

## Install notes

1. Zip the `dewmix-digital` folder so the zip contains `style.css`, `functions.php`, `header.php`, `footer.php`, `front-page.php`, `index.php`, and the `assets/css` and `assets/js` files at the top level.
2. In WordPress, go to **Appearance → Themes → Add New → Upload Theme**.
3. Upload the zip file and click **Install Now**.
4. Activate **DEWMIX Digital**.
5. Set your homepage display to use the front page if needed: **Settings → Reading → Your homepage displays → A static page**.

## Image path configuration

This PR intentionally does not include PNG/SVG/JPG/image binaries. The theme points to existing images on the server through one configurable base path in `functions.php`:

```php
define( 'DEWMIX_DIGITAL_IMAGE_BASE_URI', '/assets/' );
```

If your server images live elsewhere, change that single value, for example to `/assets/images/` or `/wp-content/uploads/dewmix/`.

## Included files

- `style.css` contains the required WordPress theme header.
- `functions.php` enables theme support, enqueues CSS and JavaScript, preloads key images, defines the image base path helper, and keeps the language-switcher script running as a module.
- `header.php`, `front-page.php`, `footer.php`, and `index.php` contain the converted WordPress templates.
- `assets/css` and `assets/js` contain the moved static site code files. Image binaries are expected to already exist at the configured server image base path.
