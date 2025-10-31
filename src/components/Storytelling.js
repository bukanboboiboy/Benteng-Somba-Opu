// src/components/Storytelling.js

import React from 'react';

// Data untuk setiap video, membuatnya lebih mudah dikelola
const storyVideos = [
  {
    title: 'Kisah Rumah Adat Bugis Makassar',
    videoSrc: '/videos/WhatsApp Video 2025-10-28 at 3.46.12 PM.mp4',
    // Ganti dengan path thumbnail kamu nanti
    posterSrc: 'https://placehold.co/720x1280/5D4037/FFFFFF?text=Rumah+Bugis'
  },
  {
    title: 'Kisah Rumah Adat Toraja',
    videoSrc: '/videos/WhatsApp Video 2025-10-28 at 3.46.12 PM.mp4',
    // Ganti dengan path thumbnail kamu nanti
    posterSrc: 'https://placehold.co/720x1280/B71C1C/FFFFFF?text=Rumah+Toraja'
  },
  {
    title: 'Kisah Rumah Adat Mandar',
    videoSrc: '/videos/WhatsApp Video 2025-10-28 at 3.46.12 PM.mp4',
    // Ganti dengan path thumbnail kamu nanti
    posterSrc: 'https://placehold.co/720x1280/795548/FFFFFF?text=Rumah+Mandar'
  },
  {
    title: 'Kisah Rumah Adat Luwu', // Saya tambahkan contoh keempat
    videoSrc: '/videos/WhatsApp Video 2025-10-28 at 3.46.12 PM.mp4',
    // Ganti dengan path thumbnail kamu nanti
    posterSrc: 'https://placehold.co/720x1280/3E2723/FFFFFF?text=Rumah+Luwu'
  }
];

function Storytelling() {
  return (
    <div className="page-content">
      <h2>Kisah di Balik Rumah Adat</h2>
      <p>Saksikan video animasi yang menceritakan sejarah, filosofi, dan keunikan dari setiap rumah adat.</p>
      
      {/* Container baru untuk grid video */}
      <div className="storytelling-grid">
        {storyVideos.map((story, index) => (
          <div className="video-card" key={index}>
            <h3>{story.title}</h3>
            <div className="video-wrapper">
              <video controls poster={story.posterSrc}>
                <source src={story.videoSrc} type="video/mp4" />
                Browser kamu tidak mendukung tag video.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Storytelling;