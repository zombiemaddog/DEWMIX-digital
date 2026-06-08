<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="<?php echo esc_attr__( 'DEWMIX Digital is a Germany-backed full IT solutions company for websites, IT systems, automation, media, AI, support, and secure digital operations.', 'dewmix-digital' ); ?>"
  />
  <meta name="theme-color" content="#06101d" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#main" data-i18n="Skip to content">Skip to content</a>

<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="#top" aria-label="DEWMIX Digital home">
      <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( 'dewmix-logo.png' ) ); ?>" width="1100" height="228" alt="DEWMIX Digital" />
    </a>
    <nav class="primary-nav" aria-label="Primary navigation">
      <a href="#problems" data-i18n="Problems">Problems</a>
      <a href="#services" data-i18n="Services">Services</a>
      <a href="#stack" data-i18n="Stack">Stack</a>
      <a href="#work" data-i18n="Work">Work</a>
      <a href="#contact" data-i18n="Contact">Contact</a>
    </nav>
    <div class="language-switcher" role="group" aria-label="Language selector" data-language-switcher data-no-translate>
      <button class="language-option" type="button" data-lang="en" aria-label="Switch language to English" aria-pressed="true">
        <span class="language-flag flag-uk" aria-hidden="true"></span>
      </button>
      <button class="language-option" type="button" data-lang="th" aria-label="Switch language to Thai" aria-pressed="false">
        <span class="language-flag flag-th" aria-hidden="true"></span>
      </button>
      <button class="language-option" type="button" data-lang="de" aria-label="Switch language to German" aria-pressed="false">
        <span class="language-flag flag-de" aria-hidden="true"></span>
      </button>
    </div>
    <a class="header-cta" href="#contact" data-i18n="Start a project">Start a project</a>
  </div>
</header>
