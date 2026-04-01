import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Hair',
    },
    {
      url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Facial',
    },
    {
      url: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Nails',
    },
    {
      url: 'https://images.pexels.com/photos/3993332/pexels-photo-3993332.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Styling',
    },
    {
      url: 'https://images.pexels.com/photos/3764537/pexels-photo-3764537.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Interior',
    },
    {
      url: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Makeup',
    },
    {
      url: 'https://imgs.search.brave.com/LLCpktPo_TWP2iS9K7l0YK68EWyoz6droww4DOROOzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/Nzg5ODgzL3Bob3Rv/L3dvbWFuLXRyb3Bp/Y2FsLW1hc3NhZ2Ut/ZmFjaWFsLWJlYXV0/eS10cmVhdG1lbnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVpuc3RCMENUbjBB/SThpc2dPUVZ4NlhX/VGFXTWQxM01NUGEt/WFJJR2xIRXc9',
      category: 'Treatment',
    },
    {
      url: 'https://imgs.search.brave.com/5Mrf4gJWD8BuIdVEb0nXBpWzQ-DI5Gxjh3RVUlKldJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ob2NoemVpdC5j/bGljay9pbWFnZS91/cGxvYWQvd184ODAs/Y19maWxsLGRwcl9h/dXRvLGZfYXV0by92/MTU4ODA1ODYxOC9o/b2NoemVpdGNsaWNr/MDEvV2ludGVyLVdl/ZGRpbmdfQmlhbmNh/LU1hcmllLUZvdG9n/cmFmaWUtMTgwX2xk/MnR5bi5qcGc',
      category: 'Bridal',
    },
    {
      url: 'https://imgs.search.brave.com/dVkb-tYXsu7bGoJ-ftPFnXExzR5OCc7tmoOAW6y6Xdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXR0/aW5nZWRnZWxhZGll/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDUvSGFp/ci1Db2xvci1TYWxv/bi1EdWJhaS0wMy53/ZWJw',
      category: 'Color',
    },
  ];

  return (
    <section id="gallery" className="bg-[#d4d0c8] px-4 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-teal-600 border border-teal-900 text-[8px] flex items-center justify-center text-white">🖼</div>
              <span>Photo Gallery - Our Transformations (9 items)</span>
            </div>
            <div className="flex gap-1">
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn text-red-700">✕</span>
            </div>
          </div>

          {/* Toolbar */}
          <div className="win-menubar flex items-center gap-1 px-2 py-1 border-b border-[#808080]">
            <span className="text-[10px] text-gray-700 mr-1">View:</span>
            <button className="win-btn" style={{ height: 18, fontSize: 9, padding: '0 6px', minWidth: 'auto' }}>
              Thumbnails
            </button>
            <button className="win-btn" style={{ height: 18, fontSize: 9, padding: '0 6px', minWidth: 'auto' }}>
              Details
            </button>
            <div
              className="win-separator"
              style={{ width: 1, height: 14, borderLeft: '1px solid #808080', borderRight: '1px solid #fff', margin: '0 4px' }}
            />
            <span className="text-[10px] text-gray-700">Filter:</span>
            {['All', 'Hair', 'Facial', 'Nails', 'Bridal', 'Makeup'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === 'All' ? null : cat)}
                className="win-btn"
                style={{
                  height: 18,
                  fontSize: 9,
                  padding: '0 6px',
                  minWidth: 'auto',
                  background: (selectedCategory === cat || (cat === 'All' && !selectedCategory)) ? '#000080' : undefined,
                  color: (selectedCategory === cat || (cat === 'All' && !selectedCategory)) ? '#fff' : undefined,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="p-2">
            {/* Gallery grid */}
            <div
              className="bg-white p-2 win-sunken"
              style={{ minHeight: 200 }}
            >
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {galleryImages
                  .filter((img) => !selectedCategory || img.category === selectedCategory)
                  .map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 cursor-pointer group"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <div className="win-gallery-img p-0.5">
                      <img
                        src={image.url}
                        alt={image.category}
                        style={{ width: 80, height: 70, objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                    <div
                      className="text-center group-hover:win-highlight px-1"
                      style={{ fontSize: 9, fontFamily: 'Tahoma, Arial, sans-serif', maxWidth: 84, overflow: 'hidden', whiteSpace: 'nowrap' }}
                    >
                      {image.category}_{String(index + 1).padStart(3, '0')}.jpg
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="mt-2 win-raised p-2 bg-[#d4d0c8] flex items-center gap-2 justify-between">
              <div style={{ fontSize: 10, fontFamily: 'Tahoma, Arial, sans-serif' }}>
                📷 View more photos on our <strong>Instagram</strong> page: <span className="text-[#000080] underline cursor-pointer">@rubaabsalon</span>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="win-btn win-btn-primary"
                style={{ fontSize: 10, height: 20, padding: '0 10px', minWidth: 'auto' }}
              >
                📷 Instagram
              </a>
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-panel text-[10px]">
              {galleryImages.filter(img => !selectedCategory || img.category === selectedCategory).length} object(s)
            </div>
            <div className="win-statusbar-panel text-[10px]">Click image to preview</div>
          </div>
        </div>
      </div>

      {/* Lightbox as Win2000 dialog */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="win-window"
            style={{ maxWidth: 640, width: '90vw' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="win-titlebar">
              <div className="flex items-center gap-2">
                <span>Photo Preview - Windows Picture Viewer</span>
              </div>
              <div className="flex gap-1">
                <span className="win-titlebar-btn">_</span>
                <span className="win-titlebar-btn">□</span>
                <span
                  className="win-titlebar-btn text-red-700 cursor-pointer"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </span>
              </div>
            </div>
            <div className="p-2 bg-[#d4d0c8]">
              <div className="win-sunken mb-2">
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{ maxWidth: '100%', maxHeight: '60vh', display: 'block', objectFit: 'contain' }}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button className="win-btn">⬅ Previous</button>
                <button className="win-btn">Next ➜</button>
                <button className="win-btn">🖨 Print</button>
                <button
                  className="win-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="win-statusbar">
              <div className="win-statusbar-panel text-[10px]">Ready</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
