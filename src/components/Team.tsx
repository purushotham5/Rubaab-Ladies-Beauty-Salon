import { Award } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Aisha Rahman',
      role: 'Master Hair Stylist',
      specialty: 'Coloring & Keratin Expert',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwc0leWLUwP6n_LFQkTAxyKbdr7GDKEGzTQ&s',
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Lead Esthetician',
      specialty: 'Facial & Skin Care Specialist',
      image: 'https://uaenep.ae/storage/post/CgVUK8QAuJCICEx7Ana56kZRBFcsTxLZ1ca9iXKV.jpg',
    },
    {
      name: 'Layla Hassan',
      role: 'Nail Artist',
      specialty: 'Nail Art & Design Expert',
      image: 'https://pbs.twimg.com/profile_images/1309119833615855617/dXUrHElJ.jpg',
    },
    {
      name: 'Mariam Khalid',
      role: 'Bridal Makeup Artist',
      specialty: 'Special Occasion Makeup',
      image: 'https://cdn.prod.website-files.com/6479a8915f603149795e7fd1/665ae87c0abe6dfac4f51e59_Leila_Hassan_PP3.jpg'
      
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-400 tracking-widest text-sm font-light">
            MEET OUR EXPERTS
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Master Artisans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of internationally trained specialists brings years of
            expertise and passion to every treatment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-4 py-1 rounded-full text-xs font-light shadow-lg flex items-center space-x-1 group-hover:scale-110 transition-transform">
                  <Award size={14} />
                  <span>Expert</span>
                </div>
              </div>

              <h3
                className="text-xl font-bold text-gray-900 mb-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {member.name}
              </h3>
              <p className="text-rose-400 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm font-light">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
