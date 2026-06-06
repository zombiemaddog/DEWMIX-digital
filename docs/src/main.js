const consultationForm = document.querySelector('[data-quote-form]');
const formNotice = document.querySelector('[data-form-notice]');

consultationForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formNotice) {
    formNotice.textContent = 'Thank you. Connect this form to your secure contact endpoint to receive consultation requests.';
  }
});

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear().toString();
}
