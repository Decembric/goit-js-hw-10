import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const s=document.querySelector("button[data-start]"),y=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-days]"),D=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]"),g=f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<new Date().getTime()?(h.show({message:"Please choose a date in the future"}),s.disabled=!0):s.disabled=!1}});let i;function T(e){let n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:l,seconds:m}}function u(){const e=g.selectedDates[0].getTime(),r=new Date().getTime(),t=e-r,{days:c,hours:d,minutes:n,seconds:o}=T(t);if(p.textContent=c>0?a(c):"0",y.textContent=d>0?a(d):"0",D.textContent=n>0?a(n):"0",S.textContent=o>0?a(o):"0",t<=0){clearInterval(i);return}}function a(e){return e.toString().padStart(2,"0")}function b(){s.disabled=!0,u(),i=setInterval(()=>u(),1e3)}s.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
