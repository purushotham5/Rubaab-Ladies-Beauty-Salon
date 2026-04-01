export default function Team() {
  const team = [
    {
      name: 'Aisha Rahman',
      role: 'Master Hair Stylist',
      specialty: 'Coloring & Keratin Expert',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwc0leWLUwP6n_LFQkTAxyKbdr7GDKEGzTQ&s',
      ext: '101',
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Lead Esthetician',
      specialty: 'Facial & Skin Care Specialist',
      image: 'https://uaenep.ae/storage/post/CgVUK8QAuJCICEx7Ana56kZRBFcsTxLZ1ca9iXKV.jpg',
      ext: '102',
    },
    {
      name: 'Layla Hassan',
      role: 'Nail Artist',
      specialty: 'Nail Art & Design Expert',
      image: 'https://pbs.twimg.com/profile_images/1309119833615855617/dXUrHElJ.jpg',
      ext: '103',
    },
    {
      name: 'Mariam Khalid',
      role: 'Bridal Makeup Artist',
      specialty: 'Special Occasion Makeup',
      image: 'https://cdn.prod.website-files.com/6479a8915f603149795e7fd1/665ae87c0abe6dfac4f51e59_Leila_Hassan_PP3.jpg',
      ext: '104',
    },
  ];

  return (
    <section className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-700 border border-green-900 text-[8px] flex items-center justify-center text-white">👤</div>
              <span>Our Team - Staff Directory</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-3">
            <div className="mb-3">
              <div
                style={{
                  background: 'linear-gradient(to right, #000080, #1084d0)',
                  color: '#ffff00',
                  fontSize: 12,
                  padding: '3px 10px',
                  fontWeight: 'bold',
                  fontFamily: '"Comic Sans MS", sans-serif',
                  display: 'inline-block',
                }}
              >
                👩‍💼 Meet Our Master Artisans
              </div>
            </div>

            {/* Staff table view */}
            <table className="win-table">
              <thead>
                <tr>
                  <th style={{ width: 60 }}>Photo</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Specialty</th>
                  <th>Ext.</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {team.map((member, i) => (
                  <tr key={i}>
                    <td>
                      <div className="win-sunken inline-block p-0.5">
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{ width: 44, height: 44, objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    </td>
                    <td>
                      <strong style={{ color: '#000080', fontFamily: '"Comic Sans MS", sans-serif' }}>
                        {member.name}
                      </strong>
                      <div style={{ fontSize: 9, color: '#666' }}>Rubaab Salon</div>
                    </td>
                    <td>
                      <span
                        className="win-badge"
                        style={{ fontSize: 9 }}
                      >
                        {member.role}
                      </span>
                    </td>
                    <td style={{ fontSize: 10, color: '#333' }}>
                      {member.specialty}
                    </td>
                    <td style={{ fontFamily: 'Courier New, monospace', fontSize: 10 }}>
                      #{member.ext}
                    </td>
                    <td>
                      <button className="win-btn" style={{ height: 18, fontSize: 9, minWidth: 'auto', padding: '0 6px' }}>
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="win-statusbar mt-2">
              <div className="win-statusbar-panel text-[10px]">4 staff members found</div>
              <div className="win-statusbar-panel text-[10px]">All positions: Available</div>
              <div className="win-statusbar-panel text-[10px]">
                <span className="win-blink text-[#ff0000] font-bold">● HIRING NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
