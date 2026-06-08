<?php
/**
 * Fallback template for the DEWMIX Digital theme.
 *
 * @package DEWMIX_Digital
 */

get_header();
?>

<main id="main">
	<section class="section">
		<div class="container">
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) :
					the_post();
					?>
					<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
						<h1><?php the_title(); ?></h1>
						<?php the_content(); ?>
					</article>
					<?php
				endwhile;
			else :
				?>
				<h1><?php esc_html_e( 'DEWMIX Digital', 'dewmix-digital' ); ?></h1>
				<p><?php esc_html_e( 'Set this theme as active and use the front page template for the full DEWMIX homepage.', 'dewmix-digital' ); ?></p>
				<?php
			endif;
			?>
		</div>
	</section>
</main>

<?php
get_footer();
