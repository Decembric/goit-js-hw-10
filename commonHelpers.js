import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";const o=document.querySelector("button[data-start]"),p=document.querySelector("span[data-hours]"),D=document.querySelector("span[data-days]"),S=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");let u;o.disabled=!0;const C=h("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<new Date().getTime()?(y.show({message:"Please choose a date in the future",messageColor:"#FFF",backgroundColor:"#EF4040",position:"topCenter"}),o.disabled=!0):o.disabled=!1}});function b(e){let t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:m,seconds:f}}function i(){const e=C.selectedDates[0].getTime(),d=new Date().getTime(),a=e-d,{days:r,hours:s,minutes:t,seconds:n}=b(a);if(D.textContent=r>0?c(r):"0",p.textContent=s>0?c(s):"0",S.textContent=t>0?c(t):"0",g.textContent=n>0?c(n):"0",a<=0){clearInterval(u);return}r==="00"&&s==="00"&&t==="00"&&n==="00"&&(l(),clearInterval(u))}function c(e){return e.toString().padStart(2,"0")}function l(){o.disabled=!0,i(),u=setInterval(()=>i(),1e3)}o.addEventListener("click",l);
//# sourceMappingURL=commonHelpers.js.map
