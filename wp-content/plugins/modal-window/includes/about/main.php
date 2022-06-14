<?php
/**
 * Main Page
 *
 * @package     Wow_Plugin
 * @subpackage  Wow-Company/Main
 * @author      Wow-Company <givememony1982@gmail.com>
 * @copyright   2019 Wow-Company (Wow-Company)
 * @license     GNU Public License
 * @version     0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$logo = plugin_dir_url( __FILE__ ) . 'image/icon.png';
?>
<style>
	.about-wrap .wow-badge {
		position: absolute;
		top: 0;
		right: 0;
	}

	.wow-badge {
		background: url(<?php echo esc_url( $logo );?>) center 15px no-repeat #1f9ef8;
		background-size: 100px 100px;
		color: #ffffff;
		font-size: 14px;
		text-align: center;
		font-weight: 600;
		margin: 5px 0 0;
		padding-top: 120px;
		height: 40px;
		display: inline-block;
		width: 140px;
		text-rendering: optimizeLegibility;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
	}

	.wow-subscribe {
		padding: 5px 7px;
		border-radius: 5px;
		border: 1px solid #ccc;
		text-decoration: none;
		font-size: 14px;
		line-height: 14px;
		color: #999;
	}

	.wow-subscribe::before {
		font-family: dashicons;
		font-size: 12px;
		line-height: 14px;
	}

	.button-pro {
		vertical-align: top;
		display: inline-block;
		text-decoration: none;
		font-size: 13px;
		line-height: 26px;
		height: 28px;
		margin: 0;
		padding: 0 10px 1px;
		cursor: pointer;
		border-width: 0;
		border-style: solid;
		-webkit-appearance: none;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		white-space: nowrap;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		color: #fff !important;
		background: #37c781;
	}

	.button-pro:hover {
		background: #303030;
	}

	.button-pro:active {
		background: #303030;
	}

	.wow-thank-you {
		color: #777777;
		font-style: italic;
	}

	.about-wrap {
		margin: 0 auto 3rem;
	}
</style>


<div class="wrap full-width-layout">
    <div class="about-wrap">


        <h1><?php esc_attr_e( 'Welcome' ); ?> </h1>

        <p class="about-text">
			<?php esc_attr_e( 'Congratulations! You are about to use one of the plugins from Wow-Company.' ); ?>
        </p>
        <p>Several plugins below has free and pro versions you can install it and hopefully useful. Enjoy it.</p>
        <span class="wow-badge">Wow-Company</span>
    </div>
    <div class="stem-content">
		<?php include( 'wow-plugins.php' ); ?>
    </div>

</div>


