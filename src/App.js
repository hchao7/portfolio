// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation.js';
import './App.css';

// Import completed pages
import HomePage from './pages/HomePage.js';
import FrontEndProjectsPage from './pages/FrontEndProjectsPage.js';
import OtherProjectsPage from './pages/OtherProjectsPage.js';
import LeadershipPage from './pages/LeadershipPage.js';

// Function that renders the content in Routes, using State.
function App() {

  return (
      <BrowserRouter>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/pages/HomePage.js" element={<HomePage/>} />
                    <Route path="/pages/FrontEndProjectsPage.js" element={<FrontEndProjectsPage/>} />
                    <Route path="/pages/OtherProjectsPage.js" element={<OtherProjectsPage/>} />
                    <Route path="/pages/LeadershipPage.js" element={<LeadershipPage/>} />
                </Routes>
              </section>
          </main>

      </BrowserRouter>
  );
}

export default App;