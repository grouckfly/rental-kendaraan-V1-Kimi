// hanya contoh validasi simple
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Terima kasih! Data Anda telah terkirim.');
      form.reset();
    });
  });
});