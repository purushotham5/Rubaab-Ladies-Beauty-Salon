import { Scissors, Sparkles, Hand, Home, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Services',
      description: 'Professional coloring, keratin, cysteine treatments, and styling',
      treatments: ['Hair Coloring', 'Keratin Treatment', 'Cysteine', 'Styling & Cuts'],
      image: 'https://images.pexels.com/photos/3993332/pexels-photo-3993332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Skin Care',
      description: 'Luxury facials and advanced skin treatments for radiant glow',
      treatments: ['Luxury Facials', 'Anti-Aging', 'Hydration Therapy', 'Skin Brightening'],
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Hand,
      title: 'Nail Artistry',
      description: 'Exquisite manicures, pedicures, and custom nail designs',
      treatments: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Extensions'],
      image: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Home,
      title: 'Home Services',
      description: 'Luxury beauty treatments in the comfort of your home',
      treatments: ['Bridal Makeup', 'Home Facials', 'Hair Styling', 'Nail Services'],
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-400 tracking-widest text-sm font-light">
            OUR SERVICES
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Signature Treatments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of luxury beauty services, each
            designed to enhance your natural elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-rose-50/50 rounded-3xl overflow-hidden border border-rose-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="text-rose-400" size={28} />
                </div>
              </div>

              <div className="p-8">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{treatment}</span>
                    </div>
                  ))}
                </div>

                <button className="group/btn flex items-center space-x-2 text-rose-400 font-light hover:text-rose-500 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
