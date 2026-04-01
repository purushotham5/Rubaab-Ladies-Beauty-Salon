import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Sarah Al-Mansoori',
      location: 'Dubai Marina',
      rating: 5,
      text: 'Absolutely stunning experience! The attention to detail and luxury ambiance made me feel like royalty. My keratin treatment was flawless.',
      service: 'Keratin Treatment',
    },
    {
      name: 'Noor Abdullah',
      location: 'Downtown Dubai',
      rating: 5,
      text: 'Best facial I\'ve ever had! The staff is incredibly professional and the results were immediate. My skin has never looked better.',
      service: 'Luxury Facial',
    },
    {
      name: 'Hala Khalifa',
      location: 'Jumeirah',
      rating: 5,
      text: 'The nail art is absolutely exquisite! They truly understand luxury service and attention to detail. I wouldn\'t go anywhere else.',
      service: 'Nail Art',
    },
    {
      name: 'Amira Hassan',
      location: 'Palm Jumeirah',
      rating: 5,
      text: 'My bridal makeup was perfection! They made me feel so special and beautiful on my big day. Highly recommend for special occasions.',
      service: 'Bridal Makeup',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMThjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-rose-400 tracking-widest text-sm font-light">
            CLIENT TESTIMONIALS
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Clients Say
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              4.8
            </span>
          </div>
          <p className="text-gray-600">Based on 1,500+ reviews</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white shadow-xl relative">
                    <Quote className="absolute top-8 right-8 text-rose-200" size={64} />

                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative z-10 italic">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-600">{review.location}</p>
                      </div>
                      <div className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm">
                        {review.service}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-rose-400 w-8'
                    : 'bg-rose-200 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
