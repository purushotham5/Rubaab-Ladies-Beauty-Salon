import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Rubaab
            </h3>
            <p className="text-xs tracking-widest text-rose-300 mb-4">
              LADIES BEAUTY SALON
            </p>
            <p className="text-gray-400 font-light mb-6 max-w-md">
              Dubai's premier luxury beauty destination. Where elegance meets
              expertise, and every visit is a celebration of your unique beauty.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-rose-400 transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-rose-400 transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-rose-400 transition-colors font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-rose-400 transition-colors font-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-rose-400 transition-colors font-light">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-rose-400 transition-colors font-light">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-rose-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 font-light text-sm">
                  Dubai Marina, UAE
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-rose-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 font-light text-sm">
                  +971 50 123 4567
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-rose-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 font-light text-sm">
                  info@rubaabsalon.ae
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-light mb-4 md:mb-0">
            © {currentYear} Rubaab Ladies Beauty Salon. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-light flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="text-rose-400 fill-rose-400" size={14} />
            <span>in Dubai</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
