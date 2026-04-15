import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

// Service Pages
import Education from './pages/services/Education';
import Sante from './pages/services/Sante';
import Agriculture from './pages/services/Agriculture';
import Femmes from './pages/services/Femmes';
import Logement from './pages/services/Logement';
import Emploi from './pages/services/Emploi';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/education" element={<Education />} />
          <Route path="/services/sante" element={<Sante />} />
          <Route path="/services/agriculture" element={<Agriculture />} />
          <Route path="/services/femmes" element={<Femmes />} />
          <Route path="/services/logement" element={<Logement />} />
          <Route path="/services/emploi" element={<Emploi />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
