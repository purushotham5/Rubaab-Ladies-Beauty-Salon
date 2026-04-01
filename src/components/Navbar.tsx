import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0">
      {/* Marquee ticker */}
      <div className="win-marquee">
        <span>
          &nbsp;&nbsp;&nbsp;★ Welcome to Rubaab Ladies Beauty Salon - Dubai&apos;s Premier Beauty Destination ★ Now Offering Home Services ★ Book Now: +971 50 123 4567 ★ Special Offers Available! ★ Bridal Packages ★ Luxury Facials ★ Nail Art ★ Keratin Treatment ★&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* Title bar style nav */}
      <div className="win-titlebar">
        <div className="flex items-center gap-2">
          {/* Window icon */}
          <div className="w-5 h-5 bg-yellow-400 border border-yellow-600 flex items-center justify-center text-[9px] font-bold text-yellow-900">
            R
          </div>
          <span className="text-white font-bold text-xs">Rubaab Ladies Beauty Salon - Microsoft Internet Explorer</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="win-titlebar-btn">_</span>
          <span className="win-titlebar-btn">□</span>
          <span className="win-titlebar-btn text-red-700 font-bold">✕</span>
        </div>
      </div>

      {/* Menu bar */}
      <div className="win-menubar flex items-center px-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="win-menuitem text-black no-underline"
          >
            {link.name}
          </a>
        ))}
        <div className="win-separator" style={{ width: 1, height: 16, margin: '0 4px', borderLeft: '1px solid #808080', borderRight: '1px solid #fff' }} />
        <a
          href="#booking"
          className="win-menuitem text-black no-underline font-bold"
        >
          Book Appointment
        </a>
        <div className="ml-auto flex items-center gap-1 px-2 text-[10px] text-gray-700">
          <Phone size={10} />
          <span>+971 50 123 4567</span>
        </div>
      </div>

      {/* Toolbar (address bar style) */}
      <div className="bg-[#d4d0c8] border-b border-[#808080] px-2 py-1 flex items-center gap-2 text-[10px]">
        <span className="text-gray-600">Address:</span>
        <div className="win-input flex-1 max-w-xs" style={{ height: 20, display: 'flex', alignItems: 'center', fontSize: 10 }}>
          https://www.rubaabsalon.ae/home
        </div>
        <button className="win-btn" style={{ height: 20, minWidth: 40, fontSize: 10, padding: '0 8px' }}>Go</button>
        <div className="ml-auto text-[10px] text-gray-500">
          ⓘ Internet zone
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex justify-end bg-[#d4d0c8] border-b border-[#808080] px-2 py-1">
        <button
          className="win-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={12} /> : <Menu size={12} />}
          <span>Menu</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="win-window md:hidden">
          <div className="win-titlebar text-xs">Navigation</div>
          <div className="p-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="win-menuitem block text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="win-btn win-btn-primary mt-2 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
