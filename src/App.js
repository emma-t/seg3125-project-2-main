import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import i18n from './i18n';
import LangContext from './LangContext';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Info from './pages/Info';
import Confirm from './pages/Confirm';
import Items from './pages/Items';
import About from './pages/About';
import FAQReviews from './pages/FAQReviews';
import Contact from './pages/Contact';
import Analytics from './pages/Analytics';
import PageNavbar from './components/PageNavbar';
import Footer from './components/Footer';

function App() {

  const [lang, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', () => setLocale(i18n.language));

  return (
    // <BrowserRouter basename={window.location.pathname || ''}>
    <BrowserRouter>
      <div>
      <LangContext.Provider value={{lang, setLocale}}>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/info" element={<Info />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/items" element={<Items />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq-reviews" element={<FAQReviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
        </LangContext.Provider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
