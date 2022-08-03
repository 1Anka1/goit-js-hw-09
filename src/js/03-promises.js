import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    onTimeOutProm(i, delay);
    delay += step;
  }
}
function onTimeOutProm(position, delay) {
  setTimeout(() => {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }, delay);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}