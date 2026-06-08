# DEWMIX Digital WordPress Theme

This folder is a WordPress theme converted from the static DEWMIX Digital site. It does not require Elementor or any plugin dependency.

## Install notes

1. Use the `dewmix-digital` folder as the theme folder.
2. The theme folder contains `style.css`, `functions.php`, `header.php`, `footer.php`, `front-page.php`, `index.php`, and the theme `assets/css` and `assets/js` files.
3. To keep the GitHub PR text-only, this theme does not duplicate PNG/image binaries. It references the existing shared repository `assets/` folder for images.
4. When packaging outside this repository, include or deploy the shared `assets/` folder in the expected sibling location so the referenced images are available.
5. In WordPress, go to **Appearance → Themes → Add New → Upload Theme**, upload your package, and activate **DEWMIX Digital**.
6. Set your homepage display to use the front page if needed: **Settings → Reading → Your homepage displays → A static page**.

## Included files

- `style.css` contains the required WordPress theme header.
- `functions.php` enables theme support, enqueues CSS and JavaScript, preloads key images, and keeps the language-switcher script running as a module.
- `header.php`, `front-page.php`, `footer.php`, and `index.php` contain the converted WordPress templates.
- `assets/css` and `assets/js` contain the moved static site code files. Image URLs point at the existing shared repository `assets/` directory instead of duplicated theme image binaries.
