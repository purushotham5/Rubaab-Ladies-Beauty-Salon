export default function Hero() {
  return (
    <section id="home" className="pt-[104px] md:pt-[96px] bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">

        {/* Main hero window */}
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 border border-yellow-700 text-[8px] flex items-center justify-center font-bold text-yellow-900">✦</div>
              <span>Rubaab Ladies Beauty Salon - Welcome</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-0">
            {/* Hero content */}
            <div className="flex flex-col md:flex-row">
              {/* Left: image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Rubaab Beauty Salon"
                  className="w-full md:w-[380px] h-[220px] object-cover"
                  style={{
                    borderRight: '2px solid #808080',
                    borderBottom: '2px solid #808080',
                  }}
                />
                {/* GIF-style badge */}
                <div
                  className="absolute bottom-2 left-2 win-badge text-[10px] font-bold"
                  style={{ animation: 'none' }}
                >
                  ★ NEW! Home Services Available ★
                </div>
              </div>

              {/* Right: text */}
              <div className="flex-1 p-4 bg-white">
                {/* Animated blink title */}
                <div className="text-[10px] text-[#ff0000] font-bold mb-1 win-blink">
                  *** SPECIAL OFFER - 20% OFF ALL TREATMENTS THIS WEEK! ***
                </div>

                <h1
                  style={{
                    fontFamily: '"Comic Sans MS", "Trebuchet MS", sans-serif',
                    fontSize: 28,
                    color: '#000080',
                    marginBottom: 8,
                    textShadow: '2px 2px #d4d0c8',
                    fontWeight: 'bold',
                  }}
                >
                  Where Beauty
                  <br />
                  Meets Perfection!
                </h1>

                <div
                  style={{
                    background: 'linear-gradient(to right, #000080, #1084d0)',
                    color: 'white',
                    padding: '4px 8px',
                    fontSize: 11,
                    marginBottom: 8,
                    fontFamily: 'Tahoma, Arial, sans-serif',
                  }}
                >
                  LUXURY BEAUTY EXPERIENCE IN DUBAI, UAE
                </div>

                <p style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', marginBottom: 12, color: '#000000', lineHeight: '1.5' }}>
                  Experience world-class beauty treatments in Dubai&apos;s most elegant salon.
                  Personalized care, expert artistry, and luxury redefined.
                  <br /><br />
                  &nbsp;&nbsp;✔ Hair Coloring &amp; Keratin<br />
                  &nbsp;&nbsp;✔ Luxury Facials<br />
                  &nbsp;&nbsp;✔ Nail Art &amp; Manicure<br />
                  &nbsp;&nbsp;✔ Bridal Makeup<br />
                </p>

                <div className="flex flex-wrap gap-2">
                  <a href="#booking" className="win-btn win-btn-primary">
                    📅 Book Appointment
                  </a>
                  <a href="#services" className="win-btn">
                    ➜ View Services
                  </a>
                  <a href="https://wa.me/971501234567" className="win-btn" style={{ color: '#006400', fontWeight: 'bold' }}>
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Stats footer bar */}
            <div className="win-statusbar">
              <div className="win-statusbar-panel">
                ⏱ 10+ Years Experience
              </div>
              <div className="win-statusbar-panel">
                👥 15,000+ Happy Clients
              </div>
              <div className="win-statusbar-panel">
                ⭐ Rating: 4.8 / 5.0
              </div>
              <div className="win-statusbar-panel" style={{ flex: 'none', minWidth: 120 }}>
                📍 Dubai Marina, UAE
              </div>
            </div>
          </div>
        </div>

        {/* IE-style loading bar */}
        <div className="mt-2">
          <div className="win-progress-track">
            <div className="win-progress-fill"></div>
          </div>
          <div className="text-[10px] text-[#000080] mt-1 font-bold">
            Opening page Rubaab Ladies Beauty Salon... Done
          </div>
        </div>
      </div>
    </section>
  );
}
