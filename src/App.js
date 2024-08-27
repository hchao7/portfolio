// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation.js';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
// import products from './data/products.js;'
import HomePage from './pages/HomePage.js';
import TopicPage from './pages/TopicPage.js';
//import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
//import ContactPage from './pages/ContactPage.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddCafePageForm from './pages/AddCafePageForm';
import EditCafePageForm from './pages/EditCafePageForm';

// // If your schema requires SHORT data input, then use the TABLE design.
// import EditMoviePageTable from './pages/EditMoviePageTable';
// import AddMoviePageTable from './pages/AddMoviePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Helen <img src="/android-chrome-192x192.png" /> Chao</h1>
            <p>This is a portfolio of my interests, hobbies, coding projects, and cafe discoveries. Feel free to log your cafe visits too!</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    {/* <Route path="/" element={<MoviesPage setMovie={setMovieToEdit}/>} /> */}
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/pages/HomePage.js" element={<HomePage/>} />
                    <Route path="/pages/TopicPage.js" element={<TopicPage/>} />
                    <Route path="/pages/OrderPage.js" element={<OrderPage/>} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Helen Chao</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;