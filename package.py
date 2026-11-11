from pathlib import Path
import shutil,re,zipfile
root=Path.cwd(); dest=root/'wordpress/wood-carving-decor-home'; dest.mkdir(parents=True,exist_ok=True)
css=Path('style.css').read_text().replace('body{margin:0}','')
html=Path('homepage.html').read_text().replace('<dialog id="design-preview">','<dialog id="design-preview" aria-label="Carving design preview">')
Path('homepage.html').write_text(html); index=Path('index.html')
if not index.exists(): raise FileNotFoundError('index.html is a source file and must be present')
(dest/'homepage.html').write_text(html);(dest/'style.css').write_text(css);shutil.copy2('script.js',dest/'script.js');(dest/'assets').mkdir(exist_ok=True)
for p in Path('assets').glob('*-[0-9]*.jpg'):
 if re.match(r'^(hero|lion|capital|corbel|installed|swan|logo)-\d+\.jpg$',p.name):shutil.copy2(p,dest/'assets'/p.name)
for name in ('Blank Fireplace for Corbel Overlay.png', 'Ornate Carved Lion Corbel Bracket Overlay.png', 'island-post-cap-wooden-lion-corbel-dimensions-front-1600-1200.jpg'):
 shutil.copy2(Path('assets')/name,dest/'assets'/name)
(dest/'wood-carving-decor-home.php').write_text('''<?php
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
''')
Path('wordpress/divi-code-module.html').write_text('<!-- Upload assets to WordPress, then replace every assets/ prefix below with their absolute media folder URL. Paste into ONE Divi Code Module. -->\n<style>\n'+css+'\n</style>\n'+html+'\n<script>\n'+Path('script.js').read_text()+'\n</script>')
with zipfile.ZipFile('wordpress/wood-carving-decor-home.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in dest.rglob('*'):
  if p.is_file():z.write(p,p.relative_to(dest.parent))
dist=Path('dist');dist.mkdir(exist_ok=True)
for name in ['index.html','style.css','script.js']:shutil.copy2(name,dist/name)
(dist/'assets').mkdir(exist_ok=True)
for p in (dest/'assets').iterdir():shutil.copy2(p,dist/'assets'/p.name)
