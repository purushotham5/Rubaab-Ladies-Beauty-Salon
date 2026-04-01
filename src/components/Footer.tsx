import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#d4d0c8] px-4 pb-2">
      <div className="max-w-5xl mx-auto">
        {/* Footer window */}
        <div className="win-window mb-2">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <span>Rubaab Ladies Beauty Salon — Site Map & Info</span>
            </div>
          </div>

          <div className="p-3 bg-[#d4d0c8]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1: About */}
              <div>
                <div className="win-groupbox relative mt-3 pt-2 px-2 pb-2" style={{ border: '1px solid #808080' }}>
                  <span className="win-groupbox-label" style={{ fontFamily: 'Tahoma, Arial, sans-serif', fontWeight: 'bold', fontSize: 11 }}>
                    About Rubaab
                  </span>
                  <div
                    style={{
                      fontFamily: '"Comic Sans MS", sans-serif',
                      fontSize: 16,
                      color: '#000080',
                      fontWeight: 'bold',
                      marginBottom: 2,
                    }}
                  >
                    Rubaab
                  </div>
                  <div style={{ fontSize: 9, color: '#aa0044', fontFamily: 'Tahoma, Arial, sans-serif', marginBottom: 6, fontWeight: 'bold', letterSpacing: 2 }}>
                    LADIES BEAUTY SALON
                  </div>
                  <p style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333', lineHeight: '1.5', marginBottom: 6 }}>
                    Dubai&apos;s premier luxury beauty destination. Where elegance meets expertise.
                  </p>
                  <div className="flex gap-1 mt-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win-btn"
                      style={{ height: 22, minWidth: 'auto', padding: '0 6px', fontSize: 10 }}
                    >
                      <Instagram size={12} /> <span>Instagram</span>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win-btn"
                      style={{ height: 22, minWidth: 'auto', padding: '0 6px', fontSize: 10 }}
                    >
                      <Facebook size={12} /> <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <div className="win-groupbox relative mt-3 pt-2 px-2 pb-2" style={{ border: '1px solid #808080' }}>
                  <span className="win-groupbox-label" style={{ fontFamily: 'Tahoma, Arial, sans-serif', fontWeight: 'bold', fontSize: 11 }}>
                    Quick Links
                  </span>
                  <table style={{ width: '100%' }}>
                    <tbody>
                      {[
                        { label: '🏠 Home', href: '#home' },
                        { label: 'ℹ About Us', href: '#about' },
                        { label: '✦ Services', href: '#services' },
                        { label: '🖼 Gallery', href: '#gallery' },
                        { label: '📅 Book Now', href: '#booking' },
                        { label: '📧 Contact', href: '#contact' },
                      ].map((link) => (
                        <tr key={link.href}>
                          <td style={{ padding: '2px 0' }}>
                            <a
                              href={link.href}
                              style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#000080', textDecoration: 'underline' }}
                            >
                              {link.label}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Column 3: Contact */}
              <div>
                <div className="win-groupbox relative mt-3 pt-2 px-2 pb-2" style={{ border: '1px solid #808080' }}>
                  <span className="win-groupbox-label" style={{ fontFamily: 'Tahoma, Arial, sans-serif', fontWeight: 'bold', fontSize: 11 }}>
                    Contact Info
                  </span>
                  <table style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <td style={{ width: 16, verticalAlign: 'top', paddingTop: 3 }}>
                          <MapPin size={10} className="text-[#000080]" />
                        </td>
                        <td style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333', paddingBottom: 4 }}>
                          Dubai Marina, UAE
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 16, verticalAlign: 'top', paddingTop: 3 }}>
                          <Phone size={10} className="text-[#000080]" />
                        </td>
                        <td style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333', paddingBottom: 4 }}>
                          +971 50 123 4567
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 16, verticalAlign: 'top', paddingTop: 3 }}>
                          <Mail size={10} className="text-[#000080]" />
                        </td>
                        <td style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#000080', paddingBottom: 4 }}>
                          <a href="mailto:info@rubaabsalon.ae" style={{ textDecoration: 'underline' }}>
                            info@rubaabsalon.ae
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* "Best viewed with IE" badge */}
                  <div
                    className="win-raised mt-3 p-1 text-center"
                    style={{ fontSize: 9, fontFamily: 'Tahoma, Arial, sans-serif', background: '#ffffff' }}
                  >
                    <div style={{ color: '#000080', fontWeight: 'bold', fontSize: 10 }}>Best viewed in</div>
                    <div style={{ color: '#cc0000', fontSize: 9 }}>Internet Explorer 6.0</div>
                    <div style={{ color: '#555', fontSize: 8 }}>800×600 resolution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Taskbar style bottom bar */}
        <div className="win-taskbar">
          <div
            className="win-btn win-btn-primary flex items-center gap-1"
            style={{ height: 22, fontSize: 11, padding: '0 8px', minWidth: 'auto', cursor: 'pointer' }}
          >
            <span style={{ fontSize: 12 }}>🪟</span>
            <span>Start</span>
          </div>

          <div
            className="win-separator"
            style={{ width: 1, height: 18, borderLeft: '1px solid #808080', borderRight: '1px solid #fff' }}
          />

          <div className="win-raised px-2 text-[10px] flex items-center gap-1" style={{ height: 22 }}>
            🌐 Rubaab Salon
          </div>

          <div className="ml-auto flex items-center gap-2 text-[10px]">
            <span className="win-statusbar-panel px-2" style={{ height: 22, display: 'flex', alignItems: 'center' }}>
              © {currentYear} Rubaab Ladies Beauty Salon. All rights reserved.
            </span>
            <span className="win-raised px-2 text-[10px] flex items-center" style={{ height: 22 }}>
              🕐 {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
