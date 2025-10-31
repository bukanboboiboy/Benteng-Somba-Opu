import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import Galeri from './components/Galeri';
import Storytelling from './components/Storytelling';
import Event from './components/Event';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/storytelling" element={<Storytelling />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;