(()=>{
 const root=document.querySelector('#wcd');if(!root)return;
 const header=root.querySelector('header'),menu=root.querySelector('.menu'),nav=root.querySelector('#navigation'),shop=root.querySelector('.nav-shop'),shopToggle=root.querySelector('.shop-toggle');
 const updateHeader=()=>header.classList.toggle('is-scrolled',scrollY>24);updateHeader();addEventListener('scroll',updateHeader,{passive:true});
 const closeShop=()=>{shop.classList.remove('open');shopToggle.setAttribute('aria-expanded','false')};
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);if(!open)closeShop()});
 shopToggle.addEventListener('click',()=>{const open=shopToggle.getAttribute('aria-expanded')!=='true';shopToggle.setAttribute('aria-expanded',String(open));shop.classList.toggle('open',open)});
 nav.addEventListener('click',event=>{if(event.target.closest('a')){closeShop();menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
 document.addEventListener('click',event=>{if(!shop.contains(event.target))closeShop()});
 root.addEventListener('keydown',event=>{if(event.key!=='Escape')return;if(shop.classList.contains('open')){closeShop();shopToggle.focus()}else if(nav.classList.contains('open')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus()}});
 const slides=[...root.querySelectorAll('.hero-slide')],slideButtons=[...root.querySelectorAll('[data-slide]')];
 function showSlide(index){slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===index);slide.setAttribute('aria-hidden',String(i!==index));if(slide.matches('a'))slide.tabIndex=i===index?0:-1});slideButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)))}
 slideButtons.forEach((button,i)=>button.addEventListener('click',()=>showSlide(i)));
 const collection=root.querySelector('.collection-grid');if(collection){
  const controls=document.createElement('div');controls.className='collection-controls';controls.innerHTML='<button type="button" aria-label="Previous category">←</button><button type="button" aria-label="Next category">→</button>';
  collection.before(controls);controls.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>collection.scrollBy({left:(i?1:-1)*collection.clientWidth*.82,behavior:'smooth'})));
 }
 const benefits=root.querySelector('.benefits');if(benefits){
  const controls=document.createElement('div');controls.className='benefits-controls';controls.innerHTML='<button type="button" aria-label="Previous benefit">←</button><button type="button" aria-label="Next benefit">→</button>';
  benefits.before(controls);
  controls.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>benefits.scrollBy({left:(i?1:-1)*(benefits.querySelector('article').getBoundingClientRect().width+16),behavior:'smooth'})));
 }
})();
