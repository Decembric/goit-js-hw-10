import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const n=document.querySelector('input[value="fulfilled"]'),c=document.querySelector('input[value="rejected"]'),s=document.querySelector("form"),i=document.querySelector('input[name="delay"]');s.addEventListener("submit",u);function u(e){e.preventDefault();const o=Number(i.value);m(o).then(t=>{r.success({title:"OK",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{r.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})}function m(e){return new Promise((o,t)=>{setTimeout(()=>{n.checked?o(e):c.checked&&t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
