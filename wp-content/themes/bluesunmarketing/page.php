<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section style="background-color:#f1f1f2; margin-top:100px; text-align:center;">
	        <div class="container-fluid">
	            <div class="row">
	                <div class="col-lg-12"> 
	                    <div class="section-heading blue-text" >
	                        <h1 class="top-heading light-heading"><?php the_title(); ?></h1>
							<br />
	                        <!--<h1 class="bottom-heading bold-heading">Speaks for Itself.</h1>-->
	                    </div>                    
	                    <div class="section-content blue-text" style="font-size:.7rem">
	                        <div class="section-content blue-text"> 
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->	
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					
						<?php the_content(); ?>
		
						<br class="clear">
		
						<?php edit_post_link(); ?>
		
					</article>
			<!-- /article -->

		<?php endwhile; ?>

		<?php else: ?>

			<!-- article -->
			<article>

				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

			</article>
			<!-- /article -->

		<?php endif; ?>
							
	                        </div> 
	                    </div>  
	                </div>
	            </div>
	        </div>
	    </section>
	</main>

<?php //get_sidebar(); ?>

<?php get_footer(); ?>
