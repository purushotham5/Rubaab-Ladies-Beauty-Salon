import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6 animate-fade-in">
              <Sparkles className="text-rose-300" size={24} />
              <span className="text-rose-200 tracking-widest text-sm font-light">
                LUXURY BEAUTY EXPERIENCE IN DUBAI
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
              style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.2s' }}
            >
              Where Beauty
              <br />
              Meets Perfection
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 font-light max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Experience world-class beauty treatments in Dubai's most elegant
              salon. Personalized care, expert artistry, and luxury redefined.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="#booking"
                className="group bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full text-center font-light tracking-wider hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-center font-light tracking-wider hover:bg-white/20 transition-all border border-white/30"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-white">
                <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  10+
                </div>
                <div className="text-sm text-gray-300 font-light">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-white">
                <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  15K+
                </div>
                <div className="text-sm text-gray-300 font-light">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-white">
                <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  4.8★
                </div>
                <div className="text-sm text-gray-300 font-light">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
