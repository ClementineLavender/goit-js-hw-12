import{a as u,S as f,i as a}from"./assets/vendor-CucEYOFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="https://pixabay.com/api",g="54685682-80977b0b5ca1319a1902ced87",y=15;u.defaults.baseURL=d;async function v(t,s){return(await u({url:d,method:"get",params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:y}})).data}const m=document.querySelector(".gallery");document.querySelector(".loader");let c=null;function L(t){const s=t.map(({webformatURL:i,largeImageURL:o,tags:e,likes:r,views:n,comments:p,downloads:h})=>`
            <li class="list-item">
                <a href="${o}"><img src="${i}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${r}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${n}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${p}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${h}</p>
                    </div>
                </div>
            </li>
        `).join("");m.innerHTML=s,c?c.refresh():c=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function w(){m.innerHTML=""}function S(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("is-hidden")}function b(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("is-hidden")}const l=document.querySelector(".form");l&&l.addEventListener("submit",t=>{t.preventDefault();const s=t.currentTarget,i=s.elements["search-text"].value.trim();if(i===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(),S(),v(i).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),s.reset()})});
//# sourceMappingURL=index.js.map
