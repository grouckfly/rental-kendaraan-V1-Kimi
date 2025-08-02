export function loadComponent(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const id = url.split('/')[1].split('.')[0] + '-placeholder';
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .then(() => {
      // setelah header dimuat, pasang hamburger
      const hamburger = document.getElementById('hamburger');
      const nav = document.getElementById('nav-links');
      hamburger?.addEventListener('click', () => nav.classList.toggle('open'));
    });
}