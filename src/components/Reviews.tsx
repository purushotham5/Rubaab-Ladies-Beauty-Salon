import { useState } from 'react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Sarah Al-Mansoori',
      location: 'Dubai Marina',
      rating: 5,
      text: "Absolutely stunning experience! The attention to detail and luxury ambiance made me feel like royalty. My keratin treatment was flawless.",
      service: 'Keratin Treatment',
      date: '03/15/2024',
    },
    {
      name: 'Noor Abdullah',
      location: 'Downtown Dubai',
      rating: 5,
      text: "Best facial I've ever had! The staff is incredibly professional and the results were immediate. My skin has never looked better.",
      service: 'Luxury Facial',
      date: '03/10/2024',
    },
    {
      name: 'Hala Khalifa',
      location: 'Jumeirah',
      rating: 5,
      text: "The nail art is absolutely exquisite! They truly understand luxury service and attention to detail. I wouldn't go anywhere else.",
      service: 'Nail Art',
      date: '02/28/2024',
    },
    {
      name: 'Amira Hassan',
      location: 'Palm Jumeirah',
      rating: 5,
      text: "My bridal makeup was perfection! They made me feel so special and beautiful on my big day. Highly recommend for special occasions.",
      service: 'Bridal Makeup',
      date: '02/14/2024',
    },
  ];

  return (
    <section className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 border border-yellow-700 text-[8px] flex items-center justify-center">★</div>
              <span>Client Testimonials - Guestbook</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-3">
            {/* Rating display */}
            <div className="win-raised p-2 mb-3 bg-[#d4d0c8] flex flex-wrap items-center gap-4">
              <div>
                <div
                  style={{
                    fontFamily: '"Comic Sans MS", sans-serif',
                    fontSize: 32,
                    color: '#000080',
                    fontWeight: 'bold',
                    lineHeight: 1,
                  }}
                >
                  4.8
                </div>
                <div style={{ fontSize: 9, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333' }}>
                  out of 5.0
                </div>
              </div>
              <div>
                <div style={{ fontSize: 18, letterSpacing: 2, color: '#FFD700', textShadow: '1px 1px #808080' }}>
                  ★★★★★
                </div>
                <div style={{ fontSize: 9, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333' }}>
                  Based on 1,500+ reviews
                </div>
              </div>
              <div
                className="win-badge"
                style={{ fontSize: 11, padding: '4px 10px' }}
              >
                GOOGLE REVIEWS
              </div>
            </div>

            {/* Reviews as guestbook entries */}
            <table className="win-table mb-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Guest Name</th>
                  <th>Location</th>
                  <th>Service</th>
                  <th>Rating</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((r, i) => (
                  <tr
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{ cursor: 'pointer', background: i === activeIndex ? '#000080' : undefined }}
                  >
                    <td style={{ color: i === activeIndex ? '#fff' : undefined, fontFamily: 'Courier New', fontSize: 10 }}>{i + 1}</td>
                    <td style={{ color: i === activeIndex ? '#fff' : '#000080', fontWeight: 'bold', fontSize: 10 }}>{r.name}</td>
                    <td style={{ color: i === activeIndex ? '#ffff00' : '#333', fontSize: 10 }}>{r.location}</td>
                    <td style={{ fontSize: 10 }}>
                      <span className={i === activeIndex ? 'text-yellow-300' : ''} style={{ color: i === activeIndex ? '#ffff00' : undefined }}>
                        {r.service}
                      </span>
                    </td>
                    <td style={{ fontSize: 12, letterSpacing: 1, color: '#FFD700' }}>
                      {'★'.repeat(r.rating)}
                    </td>
                    <td style={{ color: i === activeIndex ? '#ccc' : '#666', fontSize: 9, fontFamily: 'Courier New' }}>{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Selected review detail */}
            <div className="win-sunken bg-white p-3">
              <div className="mb-1 text-[10px] text-gray-500" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                Review Detail — {reviews[activeIndex].name} ({reviews[activeIndex].date})
              </div>
              <div
                style={{
                  fontFamily: '"Comic Sans MS", Tahoma, sans-serif',
                  fontSize: 12,
                  color: '#000080',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                }}
              >
                &ldquo;{reviews[activeIndex].text}&rdquo;
              </div>
              <div className="mt-2 text-[10px] text-right text-gray-500">
                — {reviews[activeIndex].name}, {reviews[activeIndex].location}
              </div>
            </div>

            <div className="win-statusbar mt-2">
              <div className="win-statusbar-panel text-[10px]">
                Showing review {activeIndex + 1} of {reviews.length}
              </div>
              <div className="win-statusbar-panel text-[10px]">
                <span className="text-green-700 font-bold">● Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
