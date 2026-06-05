const quoteForm = document.querySelector('[data-quote-form]');
const formNotice = document.querySelector('[data-form-notice]');

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formNotice) {
    formNotice.textContent = 'Request captured for demo purposes. Connect this form to VITE_CONTACT_ENDPOINT or your chosen secure backend before production use.';
  }
});

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear().toString();
}
