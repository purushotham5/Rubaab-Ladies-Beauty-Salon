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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-rose-400 tracking-widest text-sm font-light">
                OUR STORY
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A Legacy of
                <br />
                Beauty & Excellence
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Rubaab Ladies Beauty Salon, Dubai's premier destination
              for luxury beauty experiences. Founded by passionate women
              entrepreneurs, we've been transforming beauty standards for over a
              decade.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our salon combines traditional elegance with modern innovation,
              offering personalized treatments that celebrate your unique beauty.
              Every service is crafted with precision, care, and an unwavering
              commitment to excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-rose-100 hover:shadow-lg hover:scale-105 transition-all group"
                >
                  <feature.icon className="text-rose-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3764537/pexels-photo-3764537.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury salon interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Award Winning
                  </div>
                  <div className="text-sm text-gray-600">Excellence in Beauty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
