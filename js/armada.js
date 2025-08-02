import { armada } from './data-armada.js';
import { loadComponent } from './header.js';

['komponen/header.html', 'komponen/footer.html'].forEach(url => loadComponent(url));

function renderAll(list) {
  const grid = document.getElementById('card-grid-armada');
  grid.innerHTML = list.map(item => `
    <div class="card">
      <img src="${item.gambar}" alt="${item.nama}" loading="lazy">
      <div class="card-body">
        <h3>${item.nama}</h3>
        <p>${item.transmisi} • ${item.bbm}</p>
        <p><strong>Rp ${item.harga.toLocaleString()}/hari</strong></p>
        <button onclick="location.href='spesifikasi.html?id=${item.id}'">Detail</button>
      </div>
    </div>
  `).join('');
}

function filterArmada(q) {
  return armada.filter(x =>
    x.nama.toLowerCase().includes(q.toLowerCase())
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll(armada);

  const search = document.getElementById('searchArmada');
  search.addEventListener('input', e => {
    const filtered = filterArmada(e.target.value);
    renderAll(filtered);
  });
});