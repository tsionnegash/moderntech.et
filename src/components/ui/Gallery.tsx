import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/gallery/gallery1.jpg", title: "Achievement Award" },
  { src: "/gallery/gallery2.jpg", title: "Certificate of Excellence" },
  { src: "/gallery/gallery3.jpg", title: "Team at Office" },
  { src: "/gallery/gallery4.jpg", title: "Group Photo" },
  { src: "/gallery/gallery5.jpg", title: "Event Moment" },
  { src: "/gallery/gallery6.jpg", title: "Event Moment" },
  { src: "/gallery/gallery7.jpg", title: "Green Team" },
  { src: "/gallery/gallery8.jpg", title: "Outdoor Activity" },
  { src: "/gallery/gallery9.jpg", title: "Stronger Together" },
  { src: "/gallery/gallery10.jpg", title: "Stronger Together" },
  { src: "/gallery/gallery11.jpg", title: "Cultural" },
  { src: "/gallery/gallery12.jpg", title: "openings" },
  { src: "/gallery/gallery13.jpg", title: "openings" },
  { src: "/gallery/gallery14.jpg", title: "Green Team" },
  { src: "/gallery/gallery15.jpg", title: "events" },
  { src: "/gallery/gallery16.jpg", title: "Field Work" },
  { src: "/gallery/gallery17.jpg", title: "Full Team Energy" },
  { src: "/gallery/gallery18.png", title: "Modern Infrastructure" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey in Pictures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moments of teamwork, celebration, innovation, and impact
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-14 h-14 text-white drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-bold text-lg drop-shadow-md">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-10"
            >
              <X />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 md:left-12 text-white text-5xl hover:text-gray-300 z-10"
            >
              <ChevronLeft />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 md:right-12 text-white text-5xl hover:text-gray-300 z-10"
            >
              <ChevronRight />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-5 py-2 rounded-full text-sm md:text-base">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
