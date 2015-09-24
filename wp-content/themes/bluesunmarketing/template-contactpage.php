<?php /* Template Name: Contact Page Template */ get_header(); ?>

 <?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section style="background-color:#025585; margin-top:100px; text-align:center;">
	        <div class="container-fluid">
	            <div class="row">
	                <div class="col-lg-12"> 
	                    <div class="section-heading white-text" >
	                        <h2 class="top-heading light-heading"><?php the_title(); ?></h2>
							<br />
	                        <!--<h1 class="bottom-heading bold-heading">Speaks for Itself.</h1>-->
	                    </div>
	                </div> <!--Col-->
	            </div> <!--Row-->
                <div class="row">
                    
                            <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                    
                                        
                                            <?php the_content(); ?>
                           
                            
                    
                            <?php endwhile; ?>
                    
                            <?php else: ?>
                    
                                <!-- article -->
                                <article>
                    
                                    <h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
                    
                                </article>
                                <!-- /article -->
                    
                            <?php endif; ?>
							
                    <div class="col-md-4">
                        <?PHP the_field('contact_field'); ?>
                    </div><!--col-md-5-->
                </div><!--row-->
	        </div>
	    </section>
	</main>

<?php //get_sidebar(); ?>

<?php get_footer(); ?>
