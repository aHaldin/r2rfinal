const t=document.querySelector('.menu-toggle'),n=document.getElementById('navigation');
if(t){t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t.setAttribute('aria-expanded',false)}))}
const P={GBP:{o:'£99',s:'£149',w:'£499',b:'£299'},USD:{o:'$129',s:'$249',w:'$599',b:'$349'},EUR:{o:'€119',s:'€179',w:'€549',b:'€349'},AUD:{o:'A$179',s:'A$279',w:'A$899',b:'A$549'},CAD:{o:'CA$169',s:'CA$269',w:'CA$799',b:'CA$449'},NZD:{o:'NZ$189',s:'NZ$299',w:'NZ$999',b:'NZ$599'}};
function setC(c){document.querySelectorAll('[data-price]').forEach(e=>e.textContent=P[c][e.dataset.price]);document.querySelectorAll('.currency button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.c===c));try{localStorage.setItem('r2r-cur',c)}catch(e){}}
document.querySelectorAll('.currency button').forEach(b=>b.addEventListener('click',()=>setC(b.dataset.c)));
let s;try{s=localStorage.getItem('r2r-cur')}catch(e){}if(s&&P[s])setC(s);
document.getElementById('y')&&(document.getElementById('y').textContent=new Date().getFullYear());
const ob=document.getElementById('offerbar');try{if(localStorage.getItem('r2r-offer-x'))ob.remove()}catch(e){}
document.getElementById('offerclose')?.addEventListener('click',()=>{ob.remove();try{localStorage.setItem('r2r-offer-x','1')}catch(e){}});
