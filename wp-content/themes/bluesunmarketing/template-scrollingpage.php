<?php /* Template Name: Scrolling Page Template */ get_header(); ?>

 <!-- Intro Section -->
    <div class="next-section-button">
        <a href="#" > 
            <img style="width:32px;" src="<?php echo get_template_directory_uri(); ?>/img/arrow-forced-scroll.png" alt="" />                       
        </a>
    </div>
    <section id="scrolling-section-1" class="scrolling-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12" style="background-color:#005484;">
                    <div class="full-width-image">
                        <div class="full-width-image-text">
                            <h2>Retail Product Marketing <br/>at its best.</h2>
                        </div>
                        <img src="<?php echo get_template_directory_uri(); ?>/img/Front-Page-Image-1.png" alt="" />                        
                    </div>
                    <div class="section-heading">
                        <h1 class="heading-1">A Better Broker For</h1>
                        <h1 class="heading-2">Your Brand.</h1>
                    </div>
                    <div class="section-content">
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="scrolling-section-2" class="scrolling-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1>About Section</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="scrolling-section-3" class="scrolling-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Services Section</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="scrolling-section-4" class="scrolling-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Contact Section</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section -->
    <section id="scrolling-section-5" class="scrolling-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Contact Section</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section -->
    <section id="scrolling-section-6" class="scrolling-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Scrolling Nav</h1>
                    <p><strong>Usage Instructions:</strong> Make sure to include the <code>scrolling-nav.js</code>, <code>jquery.easing.min.js</code>, and <code>scrolling-nav.css</code> files. To make a link smooth scroll to another section on the page, give the link the <code>.page-scroll</code> class and set the link target to a corresponding ID on the page.</p>
                    <a class="btn btn-default page-scroll" href="#about">Click Me to Scroll Down!</a>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
