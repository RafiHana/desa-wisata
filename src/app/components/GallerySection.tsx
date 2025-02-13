import Image from 'next/image';

const GallerySection = () => {
  const images = [
    { src: '/gallery1.jpg', title: 'Pemandangan Alam' },
    { src: '/gallery2.jpg', title: 'Kegiatan Masyarakat' },
    { src: '/gallery3.jpg', title: 'Seni dan Budaya' },
    { src: '/gallery4.jpg', title: 'Wisata Kuliner' },
  ];

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.title}
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;