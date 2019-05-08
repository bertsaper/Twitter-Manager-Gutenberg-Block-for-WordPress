<?php
/**
 * Plugin Name: Twitter-Manager
 * Description: Used to create twitter feeds
 * Version: 1.0
 * Text Domain: twitter-manager
 * Domain Path: /languages
 *
 * @package twitter-manager
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
/**
 * Enqueue block JavaScript and CSS for the editor
 */
function twitter_manager_plugin_editor_scripts() {
 
    // Enqueue block editor JS
    wp_register_script(
        'twitter-manager/editor-scripts',
        plugins_url( '/assets/dist/build.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . '/assets/dist/build.js' ) 
    );
 
    // Enqueue block editor styles
    wp_register_style(
        'twitter-manager/stylesheets',
        plugins_url( 'assets/dist/style.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/dist/style.css' ) 
    );

    register_block_type('twitter-manager/block-library', array(
        'editor_script' => 'twitter-manager/editor-scripts',
        'style' => 'twitter-manager/stylesheets'   
    ));
 
}

// Hook the enqueue functions into the editor
add_action( 'init', 'twitter_manager_plugin_editor_scripts' );

/**
 * Enqueue view scripts
 */
function twitter_manager_plugin_view_scripts() {
    if ( is_admin() ) {
        return;
    }

    wp_enqueue_script(
		'twitter-manager/view-scripts',
		plugins_url( '/assets/dist/build.view.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'react', 'react-dom' )
    );
}

add_action( 'enqueue_block_assets', 'twitter_manager_plugin_view_scripts' );