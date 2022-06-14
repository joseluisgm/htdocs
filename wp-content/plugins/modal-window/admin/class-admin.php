<?php

/**
 * Admin Class
 *
 * @package     Wow_Plugin
 * @subpackage  Admin
 * @author      Dmytro Lobov <i@wpbiker.com>
 * @copyright   2019 Wow-Company
 * @license     GNU Public License
 * @version     1.0
 */

namespace modal_window;


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Wow_Plugin_Admin
 *
 * @package wow_plugin
 *
 * @property array plugin - base information about the plugin
 * @property array url    - home, pro and other URL for plugin
 * @property array rating - website and link for rating
 *
 */
class Wow_Plugin_Admin {

	/**
	 * Setup to admin panel of the plugin
	 *
	 * @param array $info general information about the plugin
	 *
	 * @since 1.0
	 */
	public function __construct( $info ) {
		$this->plugin = $info['plugin'];
		$this->url    = $info['url'];
		$this->rating = $info['rating'];

		add_filter( 'plugin_action_links', array( $this, 'settings_link' ), 10, 2 );
		add_filter( 'admin_footer_text', array( $this, 'footer_text' ) );
		add_action( 'admin_menu', array( $this, 'add_admin_page' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		add_action( 'wp_ajax_' . $this->plugin['prefix'] . '_message', array( $this, 'ad_message_deactivate' ) );
		add_action( 'wp_ajax_' . $this->plugin['prefix'] . '_item_save', array( $this, 'item_save' ) );
		add_action( 'media_buttons', array( $this, 'shortcode_button' ) ); // add media button to Editor
		add_action( 'admin_init', [ $this, 'export_data' ] );
		add_action( 'admin_init', [ $this, 'import_data' ] );
	}


	/**
	 * Add the link to the plugin page on Plugins page
	 *
	 * @param $actions
	 * @param $plugin_file - the plugin main file
	 *
	 * @return mixed
	 */
	public function settings_link( $actions, $plugin_file ) {
		if ( false === strpos( $plugin_file, plugin_basename( $this->plugin['file'] ) ) ) {
			return $actions;
		}
		$link          = admin_url( 'admin.php?page=' . $this->plugin['slug'] );
		$text          = esc_attr__( 'Settings', 'modal-window' );
		$settings_link = '<a href="' . esc_url( $link ) . '">' . esc_attr( $text ) . '</a>';
		array_unshift( $actions, $settings_link );

		return $actions;
	}

	/**
	 * Add custom text in the footer on the wow plugin page
	 *
	 * @param $footer_text - text in the footer
	 *
	 * @return string - end text in the footer
	 * @since 1.0
	 */
	public function footer_text( $footer_text ) {
		global $wow_plugin_page;
		if ( $wow_plugin_page == $this->plugin['slug'] ) {
			$text = sprintf(
				__( 'Thank you for using <a href="%1$s" target="_blank">%2$s</a>! Please <a href="%3$s" target="_blank">rate us on %4$s</a>', 'modal-window' ),
				esc_url( $this->url['home'] ),
				esc_attr( $this->plugin['name'] ),
				esc_url( $this->rating['url'] ),
				esc_attr( $this->rating['website'] )
			);

			return str_replace( '</span>', '', $footer_text ) . ' | ' . $text . '</span>';
		} else {
			return $footer_text;
		}
	}

	/**
	 * Add the plugin page in admin menu
	 *
	 * @since 1.0
	 */
	public function add_admin_page() {
		$parent     = 'wow-company';
		$title      = $this->plugin['name'] . ' version ' . $this->plugin['version'];
		$menu_title = $this->plugin['menu'];
		$capability = 'manage_options';
		$slug       = $this->plugin['slug'];
		add_submenu_page( $parent, $title, $menu_title, $capability, $slug, array( $this, 'plugin_page' ) );
	}

	/**
	 * Include main plugin page
	 *
	 * @since 1.0
	 */
	public function plugin_page() {
		global $wow_plugin_page;
		$wow_plugin_page = $this->plugin['slug'];
		require_once 'page-main.php';
	}

	/**
	 * Include admin style and scripts on the plugin page
	 *
	 * @since 1.0
	 */
	public function admin_scripts( $hook ) {
		$page = 'wow-plugins_page_' . $this->plugin['slug'];

		if ( $page != $hook ) {
			return;
		}

		$slug       = $this->plugin['slug'];
		$version    = $this->plugin['version'];
		$url_assets = plugin_dir_url( __FILE__ ) . 'assets/';
		$pre_suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_enqueue_style( $slug . '-admin', $url_assets . 'css/main' . $pre_suffix . '.css', false, $version );
		wp_enqueue_style( $slug . '-custom', $url_assets . 'css/custom' . $pre_suffix . '.css', false, $version );
		wp_enqueue_style( $slug . '-preview', $url_assets . 'css/preview' . $pre_suffix . '.css', false, $version );

		// include the color picker
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'wp-color-picker' );

		// include an alpha rgba color picker
		$url_alpha = $url_assets . 'js/wp-color-picker-alpha' . $pre_suffix . '.js';
		wp_enqueue_script( 'wp-color-picker-alpha', $url_alpha, array( 'wp-color-picker' ) );

		$url_vendors = $this->plugin['url'] . 'vendors/';
		// include fontAwesome icon
		$url_fontawesome = $url_vendors . 'fontawesome/css/fontawesome-all' . $pre_suffix . '.css';
		wp_enqueue_style( $slug . '-fontawesome', $url_fontawesome, null, '5.12' );

		// include fonticonpicker styles & scripts
		$fonticonpicker_js = $url_assets . 'fonticonpicker/fonticonpicker.min.js';
		wp_enqueue_script( $slug . '-fonticonpicker', $fonticonpicker_js, array( 'jquery' ) );

		$fonticonpicker_css = $url_assets . 'fonticonpicker/css/fonticonpicker.min.css';
		wp_enqueue_style( $slug . '-fonticonpicker', $fonticonpicker_css );

		$fonticonpicker_dark_css = $url_assets . 'fonticonpicker/fonticonpicker.darkgrey.min.css';
		wp_enqueue_style( $slug . '-fonticonpicker-darkgrey', $fonticonpicker_dark_css );

		// include the plugin admin script
		$url_script = plugin_dir_url( __FILE__ ) . 'assets/js/admin-script' . $pre_suffix . '.js';
		wp_enqueue_script( $slug . '-admin', $url_script, array( 'jquery' ), $version, true );

		$url_shortcodes = plugin_dir_url( __FILE__ ) . 'assets/js/shortcodes.js';
		wp_enqueue_script( $slug . '-shortcodes', $url_shortcodes, array( 'jquery' ), $version, true );

		$url_preview = plugin_dir_url( __FILE__ ) . 'assets/js/preview.js';
		wp_enqueue_script( $slug . '-preview', $url_preview, array( 'jquery' ), $version, true );



		add_thickbox();

	}

	/**
	 * Deactivate the Ad message on plugin page
	 *
	 * @since 1.0
	 */
	public function ad_message_deactivate() {
		update_option( 'wow_' . $this->plugin['prefix'] . '_message', 'read' );
		wp_die();
	}

	static function input( $arg ) {
		include( 'fields/input.php' );
	}

	static function number( $arg ) {
		include( 'fields/number.php' );
	}

	static function select( $arg ) {
		include( 'fields/select.php' );
	}

	static function editor( $arg ) {
		include( 'fields/editor.php' );
	}

	static function textarea( $arg ) {
		include( 'fields/textarea.php' );
	}

	static function color( $arg ) {
		include( 'fields/color.php' );
	}

	static function checkbox( $arg ) {
		include( 'fields/checkbox.php' );
	}

	static function time( $arg ) {
		include( 'fields/time.php' );
	}

	static function date( $arg ) {
		include( 'fields/date.php' );
	}

	/**
	 * Save and Update the Item into the plugin Database
	 *
	 * @return array response from DB
	 *
	 * @since 1.0
	 */
	public function save_data() {
		global $wpdb;

		$add   = ( isset( $_REQUEST['add'] ) ) ? absint( $_REQUEST['add'] ) : '';
		$table = ( isset( $_REQUEST['data'] ) ) ? sanitize_text_field( $_REQUEST['data'] ) : '';
		$param            = map_deep( $_POST['param'], array( $this, 'sanitize_param' ) );
		$param['content'] = wp_kses_post(wp_unslash( wp_encode_emoji( $_POST['param']['content'] ) ));
		$id    = absint( $_POST['tool_id'] );

		$data = array(
			'id'     => $id,
			'title'  => wp_unslash( sanitize_text_field( $_POST['title'] ) ),
			'param'  => serialize( $param ),
			'script' => $this->get_script( $id, $param ),
			'style'  => $this->get_style( $id, $param ),
			'status' => absint( $_POST['status'] ),
		);

		if ( $add === 1 ) {
			$wpdb->insert( $table, $data );
		} elseif ( $add === 2 ) {
			$wpdb->update( $table, $data, array( 'id' => $id ), $format = null, $where_format = null );
		}

		$response = array(
			'status'  => 'OK',
			'message' => esc_attr__( 'Item Updated', 'modal-window' ),
		);

		return $response;
	}

	public function sanitize_param( $value ) {
		return wp_unslash( sanitize_text_field( $value ) );
	}

	public function item_save() {
		$response = 'No';
		if ( isset( $_POST[ $this->plugin['slug'] . '_nonce' ] ) ) {
			if ( ! empty( $_POST )
			     && wp_verify_nonce( $_POST[ $this->plugin['slug'] . '_nonce' ], $this->plugin['slug'] . '_action' )
			     && current_user_can( 'manage_options' )
			) {
				$response = $this->save_data();
			}
		}
		wp_send_json( $response );
		wp_die();
	}

	private function get_script( $id, $param ) {
		$script = array();
		include( 'generate/script.php' );

		return wp_json_encode( $script );
	}

	private function get_style( $id, $param ) {
		$css = '';
		include( 'generate/style.php' );

		return $css;
	}

	public function shortcode_button() {

		global $current_screen;

		if ( $current_screen->base != 'wow-plugins_page_' . $this->plugin['slug'] ) {
			return false;
		}

		$title   = 'Popup Shortcodes';
		$context = '<a href="/?TB_inline&inlineId=popupShortcode&width=600&height=550" class="thickbox button popup-shortcode" title="' . $title . '" >Shortcodes</a>';
		echo $context;
	}

	public function import_data() {

		if ( empty( $_POST[ $this->plugin['slug'] . '_import_nonce' ] ) ) {
			return;
		}


		if ( ! wp_verify_nonce( $_POST[ $this->plugin['slug'] . '_import_nonce' ], $this->plugin['slug'] . '_import_nonce' ) ) {
			return;
		}


		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( $this->get_file_extension( $_FILES['import_file']['name'] ) != 'json' ) {
			wp_die( esc_attr__( 'Please upload a valid .json file', 'modal-window' ), __( 'Error', 'modal-window' ), array( 'response' => 400 ) );
		}

		$import_file = $_FILES['import_file']['tmp_name'];

		if ( empty( $import_file ) ) {
			wp_die( esc_attr__( 'Please upload a file to import', 'modal-window' ), __( 'Error', 'modal-window' ), array( 'response' => 400 ) );
		}

		// Retrieve the settings from the file and convert the json object to an array
		$settings = json_decode( file_get_contents( $import_file ) );

		$update = ! empty( $_POST['wow_import_update'] ) ? '1' : '';

		global $wpdb;
		$table = $wpdb->prefix . "wow_" . $this->plugin['prefix'];

		foreach ( $settings as $key => $val ) {
			$id    = $val->id;
			$title = $val->title;
			$param = $val->param;

			$check_row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$table} WHERE id = %d", $id ) );

			if ( ! empty( $update ) && ! empty( $check_row ) ) {
				$wpdb->query(
					$wpdb->prepare( " UPDATE  {$table} SET title = %s, param = %s  WHERE id= %d;",
						$title,
						$param,
						$id
					) );

			} elseif ( ! empty( $check_row ) ) {
				$wpdb->query(
					$wpdb->prepare( " INSERT INTO {$table} ( title, param ) VALUES (  %s, %s )",
						$title,
						$param
					) );
			} else {
				$wpdb->query(
					$wpdb->prepare( " INSERT INTO {$table} ( id, title, param ) VALUES ( %d, %s, %s )",
						$id,
						$title,
						$param
					) );
			}

		}

		wp_safe_redirect( admin_url( 'admin.php?page=' . esc_attr( $this->plugin['slug'] ) ) );
		exit;


	}

	public function export_data() {

		if ( empty( $_POST[ $this->plugin['slug'] . '_export_nonce' ] ) ) {
			return;
		}


		if ( ! wp_verify_nonce( $_POST[ $this->plugin['slug'] . '_export_nonce' ], $this->plugin['slug'] . '_export_nonce' ) ) {
			return;
		}


		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$file_name = $this->plugin['shortcode'] . '-database-' . date( 'm-d-Y' ) . '.json';

		global $wpdb;
		$table  = $wpdb->prefix . "wow_" . $this->plugin['prefix'];
		$result = $wpdb->get_results( "SELECT * FROM " . $table . " order by id asc" );

		$settings = array();
		if ( count( $result ) > 0 ) {
			foreach ( $result as $key => $val ) {
				$settings[] = array(
					'id'     => $val->id,
					'title'  => $val->title,
					'param'  => $val->param,
					'script' => $val->script,
					'style'  => $val->style,
					'status' => $val->status,
				);
			}
		}
		ignore_user_abort( true );
		nocache_headers();
		header( 'Content-Type: application/json; charset=utf-8' );
		header( 'Content-Disposition: attachment; filename=' . $file_name );
		header( "Expires: 0" );

		echo json_encode( $settings );
		exit;


	}


	function get_file_extension( $str ) {
		$parts = explode( '.', $str );

		return end( $parts );
	}

}
