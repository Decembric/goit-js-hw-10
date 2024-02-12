import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const statementResolveRef = document.querySelector('input[value="fulfilled"]');
const statementRejectRef = document.querySelector('input[value="rejected"]');
const formRef = document.querySelector('form');
const delayInputRef = document.querySelector('input[name="delay"]');


formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
  evt.preventDefault();
  const delay = Number(delayInputRef.value);
  createPromise(delay).then((delay) => {
        iziToast.success({
    title: 'OK',
    message: `✅ Fulfilled promise in ${delay}ms`,
});
      })
      .catch((delay) => {
        iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${delay}ms`,
});
      });
}

function createPromise(delay) {
  
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      if (statementResolveRef.checked) {
        // Fulfill
        resolve(delay);
      } else if (statementRejectRef.checked) {
        // Reject
        reject(delay);
      }
    }, delay);


  });
};