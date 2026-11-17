(()=>{
  'use strict';
  const button=document.getElementById('website-guide-trigger');
  const panel=document.getElementById('website-guide-panel');
  const close=document.getElementById('website-guide-close');
  if(!button||!panel||!close)return;
  const hide=(focus=false)=>{panel.hidden=true;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open website journey guide');if(focus)button.focus();window.TURBINE_Telemetry?.emit('website_guide_close')};
  const show=()=>{panel.hidden=false;button.setAttribute('aria-expanded','true');button.setAttribute('aria-label','Close website journey guide');close.focus();window.TURBINE_Telemetry?.emit('website_guide_open')};
  button.addEventListener('click',()=>panel.hidden?show():hide(true));
  close.addEventListener('click',()=>hide(true));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)hide(true)});
  document.addEventListener('pointerdown',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!button.contains(e.target))hide()});
})();
