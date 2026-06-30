import{a as f,S as M,i}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api",O="54685682-80977b0b5ca1319a1902ced87",x=15;f.defaults.baseURL=p;async function y(o,t){return(await f({url:p,method:"get",params:{key:O,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:x}})).data}const g=document.querySelector(".gallery"),v=document.querySelector(".gallery-btn"),L=document.querySelector(".loader");let d=null;function w(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:P,downloads:$})=>`
            <li class="list-item shadow-drop-center">
                <a href="${a}"><img src="${s}" alt="${e}" /></a>
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
                        <p class="count-comments">${P}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${$}</p>
                    </div>
                </div>
            </li>
        `).join("");g.insertAdjacentHTML("beforeend",t),d?d.refresh():d=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function E(){g.innerHTML=""}function b(){L.classList.remove("is-hidden")}function S(){L.classList.add("is-hidden")}function q(){v.classList.remove("is-hidden")}function u(){v.classList.add("is-hidden")}const m=document.querySelector(".form"),h=document.querySelector(".load-more-btn");let l="",c=1;const B=15;m&&m.addEventListener("submit",async o=>{o.preventDefault();const t=o.currentTarget;if(l=t.elements["search-text"].value.trim(),l===""){i.warning({title:"Warning",message:"Please enter a search query!"});return}c=1,E(),u(),b();try{const s=await y(l,c);if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query."});return}w(s.hits),s.totalHits>B&&q()}catch(s){console.error(s),i.error({message:"Something went wrong."})}finally{S(),t.reset()}});h&&h.addEventListener("click",async()=>{c+=1,u(),b();try{const o=await y(l,c);w(o.hits);const t=document.querySelector(".gallery-item");if(t){const{height:a}=t.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}const s=Math.ceil(o.totalHits/B);c>=s?(u(),i.info({message:"We're sorry, but you've reached the end of search results."})):q()}catch(o){console.error(o),i.error({message:"Failed to load more images."})}finally{S()}});
//# sourceMappingURL=index.js.map
