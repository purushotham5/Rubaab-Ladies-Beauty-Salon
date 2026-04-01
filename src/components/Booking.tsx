import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Hair Coloring',
    'Keratin Treatment',
    'Luxury Facial',
    'Manicure & Pedicure',
    'Nail Art',
    'Bridal Makeup',
    'Home Service',
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-600 border border-orange-900 text-[8px] flex items-center justify-center text-white">📅</div>
              <span>Book Appointment - Rubaab Salon Booking System</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          <div className="p-3">
            {submitted ? (
              // Confirmation dialog
              <div className="win-window max-w-sm mx-auto">
                <div className="win-titlebar">
                  <div className="flex items-center gap-2">
                    <span>✅ Booking Confirmation</span>
                  </div>
                  <span className="win-titlebar-btn text-red-700" onClick={() => setSubmitted(false)}>✕</span>
                </div>
                <div className="p-4 bg-[#d4d0c8]">
                  <div className="flex gap-3 items-start mb-4">
                    <div className="text-4xl">ℹ️</div>
                    <div>
                      <p style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', fontWeight: 'bold', marginBottom: 4 }}>
                        Booking Request Received!
                      </p>
                      <p style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', color: '#333' }}>
                        Thank you, <strong>{formData.name}</strong>!<br />
                        We will confirm your appointment within 24 hours.<br />
                        A confirmation will be sent to <strong>{formData.email}</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button className="win-btn win-btn-primary" onClick={() => setSubmitted(false)}>
                      OK
                    </button>
                    <button className="win-btn" onClick={() => setSubmitted(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    background: 'linear-gradient(to right, #000080, #1084d0)',
                    color: '#ffff00',
                    fontSize: 12,
                    padding: '4px 10px',
                    fontWeight: 'bold',
                    fontFamily: '"Comic Sans MS", sans-serif',
                    marginBottom: 12,
                  }}
                >
                  📅 Reserve Your Beauty Experience
                </div>

                {/* Form in Win2000 style */}
                <div className="bg-[#d4d0c8] p-3 win-raised">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', display: 'block', marginBottom: 2 }}>
                        Full Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="win-input"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', display: 'block', marginBottom: 2 }}>
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="win-input"
                        placeholder="+971 xx xxx xxxx"
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-2">
                      <label style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', display: 'block', marginBottom: 2 }}>
                        E-mail Address:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="win-input"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Service */}
                    <div className="md:col-span-2">
                      <label style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', display: 'block', marginBottom: 2 }}>
                        Select Service:
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="win-input"
                        style={{ height: 22 }}
                      >
                        <option value="">-- Please select a service --</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', display: 'block', marginBottom: 2 }}>
                        Preferred Date:
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="win-input"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label style={{ fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif', display: 'block', marginBottom: 2 }}>
                        Preferred Time:
                      </label>
                      <select
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="win-input"
                        style={{ height: 22 }}
                      >
                        <option value="">-- Select a time slot --</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="win-separator mt-4" />

                  <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                    <div style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif', color: '#555' }}>
                      ⚠ We will confirm your appointment within 24 hours.
                    </div>
                    <div className="flex gap-2">
                      <button type="submit" className="win-btn win-btn-primary">
                        ✔ Submit Booking
                      </button>
                      <button
                        type="button"
                        className="win-btn"
                        onClick={() => setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '' })}
                      >
                        ✕ Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
