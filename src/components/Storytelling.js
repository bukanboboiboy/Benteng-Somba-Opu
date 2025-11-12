// src/components/Storytelling.js

import React, { useState } from 'react';

// Data video dari YouTube (link embed)
const storyVideos = [
  {
    id: 'Axg9kLsgjeU', // Ganti dengan ID video YouTube Bugis Makassar
    title: 'Museum karaeng patingalloang',
    posterSrc: '/images/Museumkaraengpatingalloang.png' // Ganti dengan path thumbnail Anda
  },
  {
    id: 'uEKxb1UJCpQ', // Contoh video tambahan
    title: 'Benteng Somba Opu',
    posterSrc: '/images/sombaopu.png' // Ganti dengan path thumbnail Anda
  },
  {
    id: '9-9iUoSwsI4', // Ganti dengan ID video YouTube Bugis Makassar
    title: 'Kisah Rumah Adat Bugis Makassar',
    posterSrc: '/images/BallaLabbirinaUjungPandang.png' // Ganti dengan path thumbnail Anda
  },
  {
    id: 'LlmRPskCOoE', // Ganti dengan ID video YouTube Toraja
    title: 'Kisah Rumah Adat Toraja',
    posterSrc: '/images/poster-toraja.png' // Ganti dengan path thumbnail Anda
  },
  {
    id: 'jPMNNuP0NjM', // Ganti dengan ID video YouTube Mandar
    title: 'Kisah Rumah Adat Mandar',
    posterSrc: '/images/boyang.png' // Ganti dengan path thumbnail Anda
  }
];

function Storytelling() {
  // State untuk melacak video mana yang sedang diputar
  const [playingVideoId, setPlayingVideoId] = useState(null);

  return (
    <div className="page-content">
      <h2>Kisah di Balik Rumah Adat</h2>
      <p>Saksikan video animasi yang menceritakan sejarah, filosofi, dan keunikan dari setiap rumah adat.</p>
      
      <div className="storytelling-grid">
        {storyVideos.map((story) => (
          <div className="video-card" key={story.id}>
            <h3>{story.title}</h3>
            <div className="video-thumbnail-container">
              {playingVideoId === story.id ? (
                // Jika video sedang diputar, tampilkan iframe
                <iframe
                  src={`https://www.youtube.com/embed/${story.id}?autoplay=1`} // autoplay=1 agar langsung play
                  title={story.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // Jika belum diputar, tampilkan thumbnail dengan tombol play
                <div 
                  className="video-custom-thumbnail" 
                  style={{ backgroundImage: `url(${story.posterSrc})` }}
                  onClick={() => setPlayingVideoId(story.id)}
                >
                  <div className="play-button"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Storytelling;