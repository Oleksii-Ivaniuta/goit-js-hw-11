import{a as p,S as f,i as l}from"./assets/vendor-Db2TdIkw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function y(t){const s={key:"49512194-f753c2f34a7e7dbbd609db53f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,url:"https://pixabay.com/api/"};return p.get(s.url,{params:s})}function g(t,s){const n=s.map(o=>`<li class="gallery-item">
    <a class="image-link" href="${o.largeImageURL}"><img class="image" src="${o.webformatURL}" alt="${o.tags}" title=""/></a>
    <ul class="image-descr-list">
<li class="descr-item">Likes<span class="descr-span">${o.likes}</span></li>
<li class="descr-item">Views<span class="descr-span">${o.views}</span></li>
<li class="descr-item">Comments<span class="descr-span">${o.comments}</span></li>
<li class="descr-item">Downloads<span class="descr-span">${o.downloads}</span></li>
    </ul>
    </li>`).join("");t.insertAdjacentHTML("beforeend",n)}const h=new f(".gallery-item a",{captionsData:"alt",captionDelay:250});function L(){h.refresh()}function b(t){t.innerHTML=""}function w(){const t=document.querySelector(".loader");t.style.display="flex"}function c(){const t=document.querySelector(".loader");t.style.display="none"}const u=document.querySelector(".gallery"),d=document.querySelector(".form"),a=d.elements[0];a.classList.add("input");const m=d.elements[1];m.classList.add("button");m.addEventListener("click",S);function S(t){if(t.preventDefault(),b(u),w(),a.value===""){c(),l.error({message:"Write your something you want to see",position:"topRight"});return}y(a.value).then(s=>{if(s.data.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(u,s.data.hits),L()}).catch(()=>{l.error({message:"Bad request",position:"topRight"})}).finally(()=>{c(),a.value=""})}
//# sourceMappingURL=index.js.map
