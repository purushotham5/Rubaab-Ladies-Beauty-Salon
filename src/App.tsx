import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#008080' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Reviews />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
