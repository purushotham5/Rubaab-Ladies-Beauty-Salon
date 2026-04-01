import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Dubai Marina', 'United Arab Emirates'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+971 50 123 4567', '+971 4 567 8900'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@rubaabsalon.ae', 'booking@rubaabsalon.ae'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 10 AM - 8 PM', 'Sunday: 12 PM - 6 PM'],
    },
  ];

  return (
    <section id="contact" className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-600 border border-pink-900 text-[8px] flex items-center justify-center text-white">📧</div>
              <span>Contact Us - Get In Touch</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-3">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Left: contact info boxes */}
              <div className="flex-1 space-y-2">
                <div
                  style={{
                    background: 'linear-gradient(to right, #000080, #1084d0)',
                    color: '#ffff00',
                    fontSize: 11,
                    padding: '3px 8px',
                    fontWeight: 'bold',
                    fontFamily: '"Comic Sans MS", sans-serif',
                    marginBottom: 4,
                  }}
                >
                  📍 Salon Information
                </div>

                {contactInfo.map((info, i) => (
                  <div key={i} className="win-raised p-2 bg-[#d4d0c8]">
                    <div className="flex items-start gap-2">
                      <div
                        className="win-sunken flex items-center justify-center"
                        style={{ width: 32, height: 32, background: '#ffffff', flexShrink: 0 }}
                      >
                        <info.icon size={16} className="text-[#000080]" />
                      </div>
                      <div className="flex-1">
                        <div
                          style={{
                            fontSize: 11,
                            fontFamily: 'Tahoma, Arial, sans-serif',
                            fontWeight: 'bold',
                            color: '#000080',
                            marginBottom: 2,
                          }}
                        >
                          {info.title}
                        </div>
                        {info.details.map((d, idx) => (
                          <div
                            key={idx}
                            style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333' }}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* WhatsApp CTA */}
                <div className="win-window">
                  <div
                    className="win-titlebar"
                    style={{ background: 'linear-gradient(to right, #25D366, #128C7E)' }}
                  >
                    <span>💬 WhatsApp Quick Booking</span>
                  </div>
                  <div className="p-2 bg-[#d4d0c8]">
                    <p style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', marginBottom: 6, color: '#333' }}>
                      Get instant confirmation and personalized assistance via WhatsApp!
                    </p>
                    <a
                      href="https://wa.me/971501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win-btn win-btn-primary block text-center"
                      style={{ background: '#25D366', borderColor: '#128C7E', width: '100%' }}
                    >
                      💬 Chat with Us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: map */}
              <div className="flex-1">
                <div
                  style={{
                    background: 'linear-gradient(to right, #000080, #1084d0)',
                    color: '#ffff00',
                    fontSize: 11,
                    padding: '3px 8px',
                    fontWeight: 'bold',
                    fontFamily: '"Comic Sans MS", sans-serif',
                    marginBottom: 4,
                  }}
                >
                  🗺 Location Map
                </div>
                <div className="win-sunken p-1 bg-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0933456789!2d55.1234567!3d25.0765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzM1LjYiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="win-statusbar mt-1">
                  <div className="win-statusbar-panel text-[10px]">📍 Dubai Marina, UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
