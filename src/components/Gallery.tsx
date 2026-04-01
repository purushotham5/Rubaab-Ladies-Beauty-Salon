import { Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-400 tracking-widest text-sm font-light">
            PORTFOLIO
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Transformations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Witness the artistry and precision that goes into every treatment
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-rose-400 hover:text-rose-500 transition-colors"
          >
            <Instagram size={20} />
            <span>Follow @rubaabsalon</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            <Instagram size={20} />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-auto rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
