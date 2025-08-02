import { armada } from './data-armada.js';
import { loadComponent } from './header.js';

['komponen/header.html', 'komponen/footer.html'].forEach(url => loadComponent(url));

const params = new URLSearchParams(location.search);
const id = Number(params.get('id'));
const item = armada.find(x => x.id === id);

const detail = document.getElementById('detail-kendaraan');
if (item) {
  detail.innerHTML = `
    <div class="card" style="max-width:600px;margin:auto">
      <img src="${item.gambar}" alt="${item.nama}" loading="lazy">
      <div class="card-body">
        <h2>${item.nama}</h2>
        <p>${item.deskripsi}</p>
        <p><strong>Transmisi:</strong> ${item.transmisi}</p>
        <p><strong>BBM:</strong> ${item.bbm}</p>
        <p><strong>Jumlah Tersedia:</strong> ${item.jumlah} unit</p>
        <h3>Harga: Rp ${item.harga.toLocaleString()}/hari</h3>
        <button class="cta" onclick="history.back()">Kembali</button>
      </div>
    </div>
  `;
} else {
  detail.innerHTML = `<h2>Kendaraan tidak ditemukan</h2>`;
}