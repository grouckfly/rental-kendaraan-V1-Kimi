export function initModal() {
  const modal = document.getElementById('modal-overlay');
  const btn = document.querySelector('[data-modal="pesan"]');
  const close = document.getElementById('close-modal');

  if (!modal || !btn || !close) return;

  btn.addEventListener('click', () => (modal.style.display = 'flex'));
  close.addEventListener('click', () => (modal.style.display = 'none'));
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
}