<?php
/**
 * Plugin Name: Wood Carving Decor — Homepage Concept
 * Description: Scoped homepage for Divi with future WooCommerce collection integration. Use [wood_carving_decor_home] in a Divi Text module.
 * Version: 0.1.4
 */
if (!defined('ABSPATH')) { exit; }
add_action('wp_enqueue_scripts', function () {
    if (is_singular() && has_shortcode(get_post_field('post_content', get_queried_object_id()), 'wood_carving_decor_home')) {
        wp_enqueue_style('wcd-home', plugins_url('style.css', __FILE__), array(), '0.1.4');
        wp_enqueue_script('wcd-home', plugins_url('script.js', __FILE__), array(), '0.1.4', true);
    }
});
add_shortcode('wood_carving_decor_home', function () {
    $html = file_get_contents(__DIR__ . '/homepage.html');
    return str_replace('assets/', esc_url(plugins_url('assets/', __FILE__)), $html);
});
