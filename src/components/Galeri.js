import React from 'react';

// Data rumah adat, bisa juga dipindah ke file JSON terpisah nanti
const rumahAdatList = [
  {
    nama: 'Rumah Adat Bugis Makassar',
    deskripsi: 'Rumah panggung tradisional dengan arsitektur khas yang melambangkan status sosial.',
    imgUrl: 'https://via.placeholder.com/300x200?text=Rumah+Bugis+Makassar'
  },
  {
    nama: 'Rumah Adat Toraja (Tongkonan)',
    deskripsi: 'Dikenal dengan atapnya yang menjulang seperti perahu, menjadi pusat kehidupan sosial dan ritual adat.',
    imgUrl: 'https://via.placeholder.com/300x200?text=Rumah+Toraja'
  },
  {
    nama: 'Rumah Adat Mandar',
    deskripsi: 'Memiliki ciri khas tiang-tiang tinggi dan ukiran yang sarat akan makna filosofis bahari.',
    imgUrl: 'https://via.placeholder.com/300x200?text=Rumah+Mandar'
  },
  {
    nama: 'Rumah Adat Isra',
    deskripsi: 'Memiliki ciri khas tiang-tiang tinggi dan ukiran yang sarat akan makna filosofis bahari.',
    imgUrl: 'https://via.placeholder.com/300x200?text=Rumah+Mandar'
  }
];

function Galeri() {
  return (
    <div className="page-content">
      <h2>Galeri Rumah Adat Somba Opu</h2>
      <div className="gallery-grid">
        {rumahAdatList.map((rumah, index) => (
          <div className="gallery-card" key={index}>
            <img src={rumah.imgUrl} alt={rumah.nama} />
            <h3>{rumah.nama}</h3>
            <p>{rumah.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeri;