import { Scissors, Sparkles, Hand, Home } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Services',
      description: 'Professional coloring, keratin, cysteine treatments, and styling',
      treatments: ['Hair Coloring', 'Keratin Treatment', 'Cysteine', 'Styling & Cuts'],
      image: 'https://images.pexels.com/photos/3993332/pexels-photo-3993332.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From AED 150',
    },
    {
      icon: Sparkles,
      title: 'Skin Care',
      description: 'Luxury facials and advanced skin treatments for radiant glow',
      treatments: ['Luxury Facials', 'Anti-Aging', 'Hydration Therapy', 'Skin Brightening'],
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From AED 200',
    },
    {
      icon: Hand,
      title: 'Nail Artistry',
      description: 'Exquisite manicures, pedicures, and custom nail designs',
      treatments: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Extensions'],
      image: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From AED 80',
    },
    {
      icon: Home,
      title: 'Home Services',
      description: 'Luxury beauty treatments in the comfort of your home',
      treatments: ['Bridal Makeup', 'Home Facials', 'Hair Styling', 'Nail Services'],
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From AED 250',
    },
  ];

  return (
    <section id="services" className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-700 border border-purple-900 text-[8px] flex items-center justify-center text-white">✦</div>
              <span>Services - Rubaab Beauty Salon</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-3">
            <div className="mb-3 flex items-center gap-2">
              <div
                style={{
                  background: 'linear-gradient(to right, #000080, #1084d0)',
                  color: '#ffff00',
                  fontSize: 12,
                  padding: '3px 10px',
                  fontWeight: 'bold',
                  fontFamily: '"Comic Sans MS", sans-serif',
                }}
              >
                ★ Our Signature Treatments ★
              </div>
              <div className="win-badge text-[10px]">4 Categories</div>
            </div>

            {/* Services as table cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="win-window">
                  <div
                    className="win-titlebar"
                    style={{
                      background: 'linear-gradient(to right, #000080, #1084d0)',
                      fontSize: 11,
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <service.icon size={12} className="text-yellow-300" />
                      <span>{service.title}</span>
                    </div>
                    <span className="text-yellow-300 text-[10px] font-bold">{service.price}</span>
                  </div>

                  <div className="flex">
                    {/* Thumbnail */}
                    <div className="win-sunken m-2 flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: 80, height: 80, objectFit: 'cover', display: 'block' }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-2 bg-white">
                      <p style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', marginBottom: 6, color: '#333' }}>
                        {service.description}
                      </p>
                      <div style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif' }}>
                        {service.treatments.map((t, i) => (
                          <div key={i} style={{ marginBottom: 2 }}>
                            <span style={{ color: '#000080', fontWeight: 'bold' }}>▶</span> {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="win-statusbar">
                    <div className="win-statusbar-panel text-[10px]">Click to view details</div>
                    <button className="win-btn ml-1" style={{ height: 18, fontSize: 10, padding: '0 8px', minWidth: 'auto' }}>
                      Book →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 win-sunken p-2 bg-white text-[10px] text-center" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
              💡 <strong>Tip:</strong> Call us at <strong>+971 50 123 4567</strong> for custom packages and group bookings. <span className="text-[#000080] underline cursor-pointer">Learn more »</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
