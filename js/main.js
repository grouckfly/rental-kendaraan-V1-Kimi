import { armada } from './data-armada.js';
import { initDarkMode } from './dark-mode.js';
import { initModal } from './modal-pesan.js';
import { loadComponent } from './header.js';

// load header, modal, footer
['komponen/header.html', 'komponen/modal-pesan.html', 'komponen/footer.html'].forEach(url => loadComponent(url));

function renderCard(list) {
  const grid = document.getElementById('card-grid-home');
  if (!grid) return;
  grid.innerHTML = list.slice(0, 4).map(item => `
    <div class="card">
      <img src="${item.gambar}" alt="${item.nama}" loading="lazy">
      <div class="card-body">
        <h3>${item.nama}</h3>
        <p>Rp ${item.harga.toLocaleString()}/hari</p>
        <button onclick="location.href='spesifikasi.html?id=${item.id}'">Detail</button>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCard(armada);
  initDarkMode();
  initModal();
});