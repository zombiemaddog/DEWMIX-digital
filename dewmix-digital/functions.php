<?php
/**
 * Theme functions for DEWMIX Digital.
 *
 * @package DEWMIX_Digital
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Set up theme defaults and WordPress feature support.
 */
function dewmix_digital_setup() {
	load_theme_textdomain( 'dewmix-digital', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'dewmix_digital_setup' );


/**
 * Base URL/path for existing DEWMIX image assets on the server.
 *
 * Change this value if your uploaded images live somewhere else, for example
 * '/wp-content/uploads/dewmix/' or 'https://example.com/assets/images/'.
 */
define( 'DEWMIX_DIGITAL_IMAGE_BASE_URI', '/assets/' );

/**
 * Build an image URL from the configurable server image base path.
 *
 * @param string $filename Image filename relative to the configured base path.
 * @return string
 */
function dewmix_digital_image_uri( $filename ) {
	$base_uri = apply_filters( 'dewmix_digital_image_base_uri', DEWMIX_DIGITAL_IMAGE_BASE_URI );

	return trailingslashit( $base_uri ) . ltrim( $filename, '/' );
}

/**
 * Enqueue the converted static site assets.
 */
function dewmix_digital_enqueue_assets() {
	$theme_version = wp_get_theme()->get( 'Version' );
	$theme_uri     = get_template_directory_uri();

	wp_enqueue_style(
		'dewmix-digital-theme',
		get_stylesheet_uri(),
		array(),
		$theme_version
	);

	wp_enqueue_style(
		'dewmix-digital-main',
		$theme_uri . '/assets/css/styles.css',
		array( 'dewmix-digital-theme' ),
		$theme_version
	);

	wp_enqueue_script(
		'dewmix-digital-main',
		$theme_uri . '/assets/js/main.js',
		array(),
		$theme_version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'dewmix_digital_enqueue_assets' );

/**
 * Add stylesheet image URLs using WordPress theme directory helpers.
 */
function dewmix_digital_inline_asset_urls() {
	$images    = array(
		'server0-internal'           => 'server0-internal.png',
		'office-bg'                  => 'office-bg.png',
		'tan-bg'                     => 'tan-bg.png',
		'dewmix2'                    => 'dewmix2.png',
		'dewmix3'                    => 'dewmix3.png',
		'dewmix-1-transparent'       => 'dewmix-1-transparent.png',
	);
	$custom_properties = array();

	foreach ( $images as $property => $image ) {
		$custom_properties[] = sprintf(
			'--dewmix-image-%1$s: url("%2$s");',
			esc_attr( $property ),
			esc_url( dewmix_digital_image_uri( $image ) )
		);
	}

	wp_add_inline_style(
		'dewmix-digital-main',
		':root { ' . implode( ' ', $custom_properties ) . ' }'
	);
}
add_action( 'wp_enqueue_scripts', 'dewmix_digital_inline_asset_urls', 20 );

/**
 * Mark the language switcher script as an ES module, matching the original site.
 *
 * @param string $tag    Script tag.
 * @param string $handle Script handle.
 * @param string $src    Script source.
 * @return string
 */
function dewmix_digital_module_script_tag( $tag, $handle, $src ) {
	if ( 'dewmix-digital-main' !== $handle ) {
		return $tag;
	}

	return sprintf( '<script type="module" src="%s" id="%s-js"></script>' . "\n", esc_url( $src ), esc_attr( $handle ) );
}
add_filter( 'script_loader_tag', 'dewmix_digital_module_script_tag', 10, 3 );

/**
 * Output favicon and image preloads used above the fold by the homepage.
 */
function dewmix_digital_head_assets() {
	$images    = array(
		'dewmix-logo.png',
		'dewmix2.png',
		'dewmix3.png',
		'office-bg.png',
		'3d-server-room.png',
	);
	?>
	<link rel="icon" href="<?php echo esc_url( dewmix_digital_image_uri( 'favicon.svg' ) ); ?>" type="image/svg+xml" />
	<?php foreach ( $images as $image ) : ?>
		<link rel="preload" href="<?php echo esc_url( dewmix_digital_image_uri( $image ) ); ?>" as="image" type="image/png" />
	<?php endforeach; ?>
	<?php
}
add_action( 'wp_head', 'dewmix_digital_head_assets', 5 );
