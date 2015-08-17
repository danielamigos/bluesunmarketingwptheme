<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

	</head>
	<body <?php body_class(); ?>  id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

		<!-- Navigation -->
	<?PHP if (basename( get_page_template()) == 'template-scrollingpage.php'): ?>
		<div class="logo">							
		<?php if ( get_theme_mod( 'bluesun_logo' )): ?>
			<a class="page-scroll" href='#scrolling-section-0' title='<?php echo esc_attr(get_bloginfo( 'name','display')); ?>' rel='home'>
				<img class="logo-img" src='<?php echo esc_url( get_theme_mod( 'bluesun_logo' ) ); ?>' alt='<?php echo esc_attr(get_bloginfo('name','display')); ?>'>
			</a>
		<?php else: ?>	
			<a class="page-scroll" href='#scrolling-section-0' title='<?php echo esc_attr(get_bloginfo( 'name','display')); ?>' rel='home'>
				<img class="logo-img" src='<?php echo get_template_directory_uri(); ?>/img/bsm-logo.png' alt='<?php echo esc_attr(get_bloginfo('name','display')); ?>'>
			</a>
		<?php endif; ?>	
			<div class="p4 logo-phone-email">925-743-1933<br/>info@bluesuncorp.com</div>
		</div>
	    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	        <div class="container-fluid">
	            <div class="navbar-header page-scroll">
	                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	                    <span class="sr-only">Toggle navigation</span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                </button>
	            </div>
	
	            <!-- Collect the nav links, forms, and other content for toggling -->
	            <div class="collapse navbar-collapse navbar-ex1-collapse">
	                <ul class="nav navbar-nav scrolling-page-menu">
	                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-1">Your<br />Brand</a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-2">Grow Your<br />Company</a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-3">Our<br />Expertise</a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-4">Client<br />Success</a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-8">International<br/>Markets</a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-5">Our Team<br />& Locations</a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#scrolling-section-7">Contact<br />Bluesun</a>
	                    </li>
	                </ul>
	            </div>
	            <!-- /.navbar-collapse -->
	        </div>
	        <!-- /.container -->
			<div class="progress">
			  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
				    <span class="sr-only">&nbsp;</span>
			  </div>
			</div>
	    </nav>
	<?PHP else: ?>
		<div class="logo">							
		<?php if ( get_theme_mod( 'bluesun_logo' )): ?>
			<a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr(get_bloginfo( 'name','display')); ?>' rel='home'>
				<img class="logo-img" src='<?php echo esc_url( get_theme_mod( 'bluesun_logo' ) ); ?>' alt='<?php echo esc_attr(get_bloginfo('name','display')); ?>'>
			</a>
		<?php else: ?>	
			<a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr(get_bloginfo( 'name','display')); ?>' rel='home'>
				<img class="logo-img" src='<?php echo get_template_directory_uri(); ?>/img/bsm-logo.png' alt='<?php echo esc_attr(get_bloginfo('name','display')); ?>'>
			</a>
		<?php endif; ?>	
		</div>
	<?PHP endif; ?>

