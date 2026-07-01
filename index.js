import{a as P,S as M,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function f(o,s=1){const a="54685682-80977b0b5ca1319a1902ced87",t="https://pixabay.com/api/",e={key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return(await P.get(t,{params:e})).data}const y=document.querySelector(".gallery"),p=document.querySelector(".gallery-btn"),g=document.querySelector(".loader");let d=null;function v(o){const s=o.map(({webformatURL:a,largeImageURL:t,tags:e,likes:r,views:i,comments:q,downloads:B})=>`
            <li class="list-item shadow-drop-center">
                <a href="${t}"><img src="${a}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${r}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${i}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${q}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${B}</p>
                    </div>
                </div>
            </li>
        `).join("");y.insertAdjacentHTML("beforeend",s),d?d.refresh():d=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function $(){y.innerHTML=""}function L(){g.classList.remove("is-hidden")}function w(){g.classList.add("is-hidden")}function b(){p.classList.remove("is-hidden")}function l(){p.classList.add("is-hidden")}const h=document.querySelector(".form"),m=document.querySelector(".gallery-btn");let u="",c=1;const S=15;h&&h.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,a=s.elements["search-text"].value.trim();if(a===""){n.warning({title:"Warning",message:"Please enter a search query!"});return}u=a,c=1,$(),l(),L();try{const t=await f(u,c);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query."});return}v(t.hits),t.totalHits>S?b():(l(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error(t),n.error({message:"Something went wrong."})}finally{w(),s.reset()}});m&&m.addEventListener("click",async()=>{c+=1,l(),L();try{const o=await f(u,c);v(o.hits);const s=document.querySelector(".list-item");if(s){const{height:t}=s.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const a=Math.ceil(o.totalHits/S);c>=a?(l(),n.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch(o){console.error(o),n.error({message:"Failed to load more images."})}finally{w()}});
//# sourceMappingURL=index.js.map
