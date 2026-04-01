import { Award, Heart, Sparkles, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Artistry',
      description: 'Certified professionals with international training',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored treatments for your unique beauty needs',
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'Luxury brands and high-quality materials',
    },
    {
      icon: Users,
      title: 'Women-Owned',
      description: 'Empowering beauty and confidence since 2014',
    },
  ];

  return (
    <section id="about" className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 border border-blue-900 text-[8px] flex items-center justify-center text-white font-bold">i</div>
              <span>About Us - Rubaab Ladies Beauty Salon</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-3">
            {/* Tab strip */}
            <div className="flex gap-0 mb-0">
              <div className="win-tab active text-[11px]">Our Story</div>
              <div className="win-tab text-[11px] text-gray-500">Awards</div>
              <div className="win-tab text-[11px] text-gray-500">Location</div>
            </div>

            <div
              className="bg-white p-4"
              style={{
                borderTop: '1px solid #808080',
                borderLeft: '2px solid #ffffff',
                borderRight: '2px solid #808080',
                borderBottom: '2px solid #808080',
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image */}
                <div className="md:w-[240px] flex-shrink-0">
                  <div className="win-sunken p-1">
                    <img
                      src="https://images.pexels.com/photos/3764537/pexels-photo-3764537.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Luxury salon interior"
                      style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="win-statusbar mt-1 text-[10px]">
                    <div className="win-statusbar-panel">🏆 Award Winning Salon</div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h2
                    style={{
                      fontFamily: '"Comic Sans MS", "Trebuchet MS", sans-serif',
                      fontSize: 20,
                      color: '#000080',
                      fontWeight: 'bold',
                      marginBottom: 4,
                    }}
                  >
                    A Legacy of Beauty &amp; Excellence
                  </h2>
                  <div
                    style={{
                      background: 'linear-gradient(to right, #000080, #1084d0)',
                      color: '#ffff00',
                      fontSize: 10,
                      padding: '2px 6px',
                      marginBottom: 8,
                      fontFamily: 'Tahoma, Arial, sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    OUR STORY — FOUNDED 2014
                  </div>

                  <p style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', marginBottom: 8, lineHeight: '1.6' }}>
                    Welcome to <strong>Rubaab Ladies Beauty Salon</strong>, Dubai&apos;s premier destination for luxury beauty experiences.
                    Founded by passionate women entrepreneurs, we&apos;ve been transforming beauty standards for over a decade.
                  </p>
                  <p style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', marginBottom: 12, lineHeight: '1.6' }}>
                    Our salon combines traditional elegance with modern innovation, offering personalized treatments that celebrate your unique beauty.
                    Every service is crafted with precision, care, and an unwavering commitment to excellence.
                  </p>

                  {/* Feature table */}
                  <table className="win-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature, i) => (
                        <tr key={i}>
                          <td>
                            <div className="flex items-center gap-2">
                              <feature.icon size={12} className="text-[#000080]" />
                              <strong>{feature.title}</strong>
                            </div>
                          </td>
                          <td style={{ color: '#333' }}>{feature.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
