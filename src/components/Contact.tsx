import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-400 tracking-widest text-sm font-light">
            GET IN TOUCH
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Visit Our Salon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Dubai, we're ready to welcome you to a world
            of luxury and beauty
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0933456789!2d55.1234567!3d25.0765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzM1LjYiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-100 hover:shadow-lg hover:scale-105 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm font-light">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Quick Booking via WhatsApp
          </h3>
          <p className="text-rose-50 mb-6 font-light">
            Get instant confirmation and personalized assistance
          </p>
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-rose-500 px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium"
          >
            <MessageCircle size={20} />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
