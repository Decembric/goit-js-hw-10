import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const formRef = document.querySelector('form');
const delayInputRef = document.querySelector('input[name="delay"]');


formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
  evt.preventDefault();
  const delay = Number(delayInputRef.value);
  const statement = formRef.state.value;
  createPromise({ delay, statement }).then((delay) => {
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

function createPromise({ delay, statement }) {
  
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      if (statement === "fulfilled") {
        // Fulfill
        resolve(delay);
      } else  {
        // Reject
        reject(delay);
      }
    }, delay);


  });
};