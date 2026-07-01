import{a as m,S as B,i}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="https://pixabay.com/api",M="54685682-80977b0b5ca1319a1902ced87",$=15;m.defaults.baseURL=f;async function p(s,t){return(await m({url:f,method:"get",params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:$}})).data}const g=document.querySelector(".gallery"),y=document.querySelector(".gallery-btn"),v=document.querySelector(".loader");let d=null;function L(s){const t=s.map(({webformatURL:n,largeImageURL:o,tags:e,likes:r,views:c,comments:q,downloads:P})=>`
            <li class="list-item shadow-drop-center">
                <a href="${o}"><img src="${n}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${r}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${c}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${q}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${P}</p>
                    </div>
                </div>
            </li>
        `).join("");g.insertAdjacentHTML("beforeend",t),d?d.refresh():d=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function O(){g.innerHTML=""}function w(){v.classList.remove("is-hidden")}function b(){v.classList.add("is-hidden")}function S(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const u=document.querySelector(".form"),h=document.querySelector(".gallery-btn"),a={searchQuery:"",page:1,perPage:15};u&&u.addEventListener("submit",async s=>{s.preventDefault();const t=s.currentTarget,n=t.elements["search-text"].value.trim();if(n===""){i.warning({title:"Warning",message:"Please enter a search query!"});return}a.searchQuery=n,a.page=1,O(),l(),w();try{const o=await p(a.searchQuery,a.page);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query."});return}L(o.hits),o.totalHits>a.perPage?S():(l(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch(o){console.error(o),i.error({message:"Something went wrong."})}finally{b(),t.reset()}});h&&h.addEventListener("click",async()=>{a.page+=1,l(),w();try{const s=await p(a.searchQuery,a.page);L(s.hits);const t=document.querySelector(".list-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}const n=Math.ceil(s.totalHits/a.perPage);a.page>=n?(l(),i.info({message:"We're sorry, but you've reached the end of search results."})):S()}catch(s){console.error(s),i.error({message:"Failed to load more images."})}finally{b()}});
//# sourceMappingURL=index.js.map
