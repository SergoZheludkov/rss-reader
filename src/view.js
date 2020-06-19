import onChange from 'on-change';
import updateValidationState from './validator';

const state = {
  form: {
    url: '',
    validate: true,
    errors: {},
  },
};

const form = document.querySelector('form');
const formInput = form.querySelector('input');
const formMessage = document.getElementById('message');

const watchedForm = onChange(state.form, (path) => {
  if (path === 'url') {
    console.log(watchedForm.validate);
    watchedForm.validate = updateValidationState(state.form);
  }
  if (path === 'validate' && !watchedForm.validate) {
    formInput.classList.add('is-invalid');
    formMessage.innerHTML = watchedForm.errors.url.message;
  }
  if (path === 'validate' && watchedForm.validate) {
    formInput.classList.remove('is-invalid');
    formMessage.innerHTML = 'Enter URL';
  }
});

export default watchedForm;
