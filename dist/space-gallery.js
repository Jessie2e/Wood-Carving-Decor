(() => {
  const root = document.querySelector('#wcd .space-gallery');
  if (!root) return;

  // Each entry pairs an existing catalog product with supplied images of that carving in context.
  const categories = [
    {id:'finials', label:'Finials', products:[
      {id:'pineapple-finial', name:'Pineapple Finial', product:'island-post-cap-wood-carved-pineapple-finial-03.webp', description:'A sculptural finishing detail for a staircase post.', scenes:[
        {image:'Pineapple Finial in a Sunlit Foyer.png', alt:'Pineapple finial installed on a staircase post in a sunlit foyer', label:'Sunlit foyer'}
      ]}
    ]},
    {id:'corbels', label:'Corbels', products:[
      {id:'caryatid-corbel', name:'Caryatid Corbel', product:'island-post-cap-wood-carved-caryatid-corbel-01.webp', description:'A figure carved into the corbel adds classical character beside the mantel.', scenes:[
        {image:'mermaid corbel interior.png', alt:'Two caryatid figure corbels flanking a stone fireplace', label:'Stone fireplace'}
      ]}
    ]},
    {id:'capitals', label:'Capitals', products:[
      {id:'flowing-leaves-capital', name:'Flowing Leaves Capital', product:'island-post-cap-capital-flowingleaves-front01.webp', description:'Leaf carving gives this column a richly detailed crown.', scenes:[
        {image:'Ornate Acanthus Capital in a Sunlit Interior.png', alt:'Leaf carved capital at the top of a column in a sunlit interior', label:'Sunlit column'}
      ]}
    ]},
    {id:'appliques', label:'Appliqués', products:[
      {id:'baroque-applique', name:'Baroque Appliqué', product:'island-post-cap-appliques-baroque-front01.webp', description:'A scrolling carved detail brings ornament to the fireplace surround.', scenes:[
        {image:'applique-design1-interior.webp', alt:'Baroque appliqué installed on a white fireplace mantel', label:'White mantel'},
        {image:'installed-1200.jpg', alt:'Baroque appliqué above a lit cream fireplace', label:'Cream fireplace'}
      ]},
    ]},
    {id:'decor', label:'Decor', products:[
      {id:'carved-wood-crucifix', name:'Carved Wood Crucifix', product:'decorproduct1.webp', description:'A carved crucifix becomes a quiet focal point on an interior wall.', scenes:[
        {image:'decor-interior1.webp', alt:'Carved wood crucifix displayed on a wall above a styled table', label:'Styled wall'}
      ]}
    ]}
  ];

  const tabs = [...root.querySelectorAll('[data-gallery-category]')];
  const interior = root.querySelector('#gallery-interior-image');
  const productImage = root.querySelector('#gallery-product-image');
  const productName = root.querySelector('#gallery-product-name');
  const productDescription = root.querySelector('#gallery-product-description');
  const productLink = root.querySelector('#gallery-product-link');
  const productIndex = root.querySelector('#gallery-product-index');
  const sceneControls = root.querySelector('.gallery-scenes');
  const status = root.querySelector('.gallery-status');
  let categoryIndex = 0, sceneIndex = 0;

  function render() {
    const category = categories[categoryIndex];
    const product = category.products[0];
    const scene = product.scenes[sceneIndex];
    tabs.forEach((tab, index) => {
      const active = index === categoryIndex;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    root.querySelector('#gallery-panel').setAttribute('aria-labelledby', tabs[categoryIndex].id);
    interior.classList.add('is-changing');
    productImage.classList.add('is-changing');
    interior.src = `assets/${scene.image}`;
    interior.alt = scene.alt;
    productImage.src = `assets/${product.product}`;
    productImage.alt = `${product.name} product photograph`;
    requestAnimationFrame(() => {
      interior.classList.remove('is-changing');
      productImage.classList.remove('is-changing');
    });
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productLink.href = `catalog.html?product=${product.id}`;
    productIndex.textContent = category.label;
    sceneControls.replaceChildren();
    if (product.scenes.length > 1) {
      product.scenes.forEach((item, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = item.label;
        button.setAttribute('aria-label', `Show ${product.name} in ${item.label.toLowerCase()}`);
        button.setAttribute('aria-pressed', String(index === sceneIndex));
        button.addEventListener('click', () => { sceneIndex = index; render(); });
        sceneControls.append(button);
      });
    }
    status.textContent = `${product.name} · ${scene.label}`;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { categoryIndex = index; sceneIndex = 0; render(); });
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[target].focus(); tabs[target].click();
    });
  });
  render();
})();
