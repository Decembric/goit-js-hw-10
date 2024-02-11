import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css"

const statementResolveRef = document.querySelector('input[data-fulfilled]')
const submitButtonRef = document.querySelector('form')
const delayInputRef = document.querySelector('input[data-delay')


submitButtonRef.addEventListener('submit', onFormSubmit)


function onFormSubmit(evt) {
  evt.preventDefault()
  let delay = Number(delayInputRef.value)
  createPromise(delay).then((delay) => {
        iziToast.show({
    message: `✅ Fulfilled promise in ${delay}ms`
});
      })
      .catch((delay) => {
        iziToast.show({
    message: `❌ Rejected promise in ${delay}ms`
});
      });
}

function createPromise(delay) {
  
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      if (statementResolveRef.checked) {
        // Fulfill
        resolve(delay);
      } else  {
        // Reject
        reject(delay);
      }
    }, delay)


  })
}