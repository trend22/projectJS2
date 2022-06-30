(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function a(l){let c=(l-r)/o;c>1&&(c=1);let n=e(c);t(n),c<1&&requestAnimationFrame(a)}))};(e=>{document.getElementById("timer-days");const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let a;a=setInterval((()=>{let e=(()=>{let e=(new Date("3 july 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),o=Math.floor(e/60%60),r=Math.floor(e%60);return 1===t.toString().length&&(t="0"+t),1===o.toString().length&&(o="0"+o),1===r.toString().length&&(r="0"+r),{timeRemaining:e,hours:t,minutes:o,seconds:r}})();e.timeRemaining>=0?(t.textContent=e.hours,o.textContent=e.minutes,r.textContent=e.seconds):clearInterval(a)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),o=document.querySelector("#service-block"),r=document.querySelector("#portfolio"),a=document.querySelector("#calc"),l=document.querySelector("#command"),c=document.querySelector("#connect");let n=!1;const s=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(e=>{if(e.target.closest(".menu"))return s(),void(n=!0);e.target.matches("li a, .close-btn")?(e.target.matches("li a")&&(e=>{switch(e.preventDefault(),!0){case"#service-block"===e.target.hash:window.scrollTo({top:o.offsetTop,behavior:"smooth"});break;case"#portfolio"===e.target.hash:window.scrollTo({top:r.offsetTop,behavior:"smooth"});break;case"#calc"===e.target.hash:window.scrollTo({top:a.offsetTop,behavior:"smooth"});break;case"#connect"===e.target.hash:window.scrollTo({top:c.offsetTop,behavior:"smooth"});break;case"#command"===e.target.hash:window.scrollTo({top:l.offsetTop,behavior:"smooth"})}})(e),s(),n=!1):!e.target.matches(".active-menu, li")&&n&&(s(),n=!1)}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),r=t.querySelector(".popup-content");o.forEach((o=>{o.addEventListener("click",(()=>{r.style.left=0,t.style.display="block",e({duration:250,timing:e=>e,draw(e){r.style.left=window.screen.availWidth/2.6*e+"px"}})}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-block input"),t=document.querySelectorAll("form [type=text]"),o=document.querySelector('form [placeholder="Ваше сообщение"]'),r=document.querySelectorAll("form [type=email]"),a=document.querySelectorAll("form [type=tel]"),l=e=>{if(/\s\s/gi.test(e)){do{e=e.replace(/(\s\s)/gi,(e=>" "))}while(/\s\s/gi.test(e));e=(e=e.replace(/^\s/i,"")).replace(/\s$/gi,"")}return e},c=e=>{if(/\-\-/gi.test(e)){do{e=e.replace(/\-\-/gi,(e=>"-"))}while(/\-\-/gi.test(e));e=(e=e.replace(/^\-/i,"")).replace(/\-$/gi,"")}return e};e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\-\ ]/,"")}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=l(e.target.value),e.target.value=c(e.target.value),e.target.value=e.target.value.replace(/\S+/gi,(e=>{e=e.split(""),console.log(e.length);for(let t=0;t<e.length;t++)0===t?(e[t].toUpperCase(),e[t]=e[t].toUpperCase()):e[t]=e[t].toLowerCase();return e.join("")}))}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\-\ ]/,"")})),o.addEventListener("blur",(e=>{e.target.value=l(e.target.value),e.target.value=c(e.target.value)})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/,"")}))})),a.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=l(e.target.value),e.target.value=c(e.target.value)}))}))})(),(()=>{const e=document.querySelector("body>main>a"),t=document.querySelector("#service-block");e.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,r)=>{t===e.target.closest(".service-header-tab")?(t.classList.add("active"),o[r].classList.remove("d-none")):(t.classList.remove("active"),o[r].classList.add("d-none"))}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const r=document.querySelector(".portfolio-dots");let a,l=0;const c=(e,t,o)=>{e[t].classList.remove(o)},n=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(t,l,"portfolio-item-active"),c(o,l,"dot-active"),l++,l>=t.length&&(l=0),n(t,l,"portfolio-item-active"),n(o,l,"dot-active")},i=(e=1500)=>{a=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,l,"portfolio-item-active"),c(o,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.matches(".dot")&&o.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),n(t,l,"portfolio-item-active"),n(o,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),r.append(t)}o=document.querySelectorAll(".dot")})(),i(2e3)})(),((t=100)=>{const o=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),n=document.querySelector("#total");let s=0;o.addEventListener("input",(o=>{o.target!==r&&o.target!==a&&o.target!==l&&o.target!==c||(()=>{const o=+r.options[r.selectedIndex].value,i=+a.value;let u=1,d=1;l.value>1&&(u+=+l.value/10),c.value&&c.value<5?d=2:c.value&&c.value<10&&(d=1.5),s=r.value&&a.value?t*o*i*u*d:0,0!==s&&e({duration:100,timing:e=>e,draw(e){n.textContent=Math.round(s*e)}})})()}))})(100)})();