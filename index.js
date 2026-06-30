import{a as u,S as g,i as a}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/api",y="54685682-80977b0b5ca1319a1902ced87",v=15;u.defaults.baseURL=d;async function L(o,r){return(await u({url:d,method:"get",params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:v}})).data}const p=document.querySelector(".gallery");document.querySelector(".gallery-btn");const m=document.querySelector(".loader");let c=null;function w(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:h,downloads:f})=>`
            <li class="list-item shadow-drop-center">
                <a href="${s}"><img src="${i}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${t}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${n}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${h}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${f}</p>
                    </div>
                </div>
            </li>
        `).join("");p.insertAdjacentHTML("beforeend",r),c?c.refresh():c=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function b(){p.innerHTML=""}function S(){m.classList.remove("is-hidden")}function P(){m.classList.add("is-hidden")}const l=document.querySelector(".form");l&&l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget,i=r.elements["search-text"].value.trim();if(i===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}b(),S(),L(i).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(s.hits)}).catch(s=>{console.error(s),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),r.reset()})});
//# sourceMappingURL=index.js.map
