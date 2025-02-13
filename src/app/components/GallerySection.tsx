const GallerySection = () => {
    const images = [
      '/gallery1.jpg',
      '/gallery2.jpg',
      '/gallery3.jpg',
      '/gallery4.jpg',
    ];
  
    return (
      <section className="h-screen flex items-center justify-center bg-white">
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </section>
    );
  };
  
  export default GallerySection;