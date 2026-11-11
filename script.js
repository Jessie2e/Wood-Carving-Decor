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
 const corbelScene=root.querySelector('.guide-composite'),corbelButtons=[...root.querySelectorAll('[data-corbel-height]')],corbelStatus=root.querySelector('.guide-current-size');
 if(corbelScene&&corbelButtons.length){
  const canvasHeight=Number(corbelScene.dataset.canvasHeight)||941;
  const leftReference=Number(corbelScene.dataset.leftReferenceHeight)||221;
  const rightReference=Number(corbelScene.dataset.rightReferenceHeight)||265;
  const showCorbelSize=size=>{
   corbelScene.style.setProperty('--left-height',`${leftReference*size/16/canvasHeight*100}%`);
   corbelScene.style.setProperty('--right-height',`${rightReference*size/16/canvasHeight*100}%`);
   corbelButtons.forEach(choice=>choice.setAttribute('aria-pressed',String(Number(choice.dataset.corbelHeight)===size)));
   corbelStatus.textContent=`Showing two ${size}-inch lion corbels`;
  };
  corbelButtons.forEach(button=>button.addEventListener('click',()=>showCorbelSize(Number(button.dataset.corbelHeight))));
  showCorbelSize(Number(corbelButtons.find(button=>button.getAttribute('aria-pressed')==='true')?.dataset.corbelHeight)||14);
 }
 const collection=root.querySelector('.collection-grid');if(collection){
  const controls=document.createElement('div');controls.className='collection-controls';controls.innerHTML='<button type="button" aria-label="Previous category">←</button><button type="button" aria-label="Next category">→</button>';
  collection.before(controls);controls.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>collection.scrollBy({left:(i?1:-1)*collection.clientWidth*.82,behavior:'smooth'})));
 }
})();
