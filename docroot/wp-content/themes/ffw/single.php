<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$protected = post_password_required($post->ID);
$context['protected_label'] = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
$context['post'] = $post;

$post_categories = get_the_category($post->ID);
$context['post_term'] = $post_categories;
$context['parent_cat_name'] = $post_categories[0]->name;
$context['parent_cat_id'] = $post_categories[0]->term_id;
$context['parent_cat_link'] = get_category_link($post_categories[0]->term_id);
foreach ($post_categories as $cat) {
  if ($cat->parent == 0) {
    $context['parent_cat_name'] = $cat->name;
    $context['parent_cat_id'] = $cat->term_id;
    $context['parent_cat_link'] = get_category_link($cat->term_id);
  }
}

if ($protected) {
  Timber::render( 'single-protected.twig', $context );
} else {
  Timber::render( 'single.twig', $context );
}
