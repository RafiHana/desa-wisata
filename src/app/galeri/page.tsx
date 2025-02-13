import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  { src: '/gallery1.jpg', title: 'Pemandangan Alam' },
  { src: '/gallery2.jpg', title: 'Kegiatan Masyarakat' },
  { src: '/gallery3.jpg', title: 'Seni dan Budaya' },
  { src: '/gallery4.jpg', title: 'Wisata Kuliner' },
];

export default function Galeri() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Galeri</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image.src} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h2 className="text-xl font-bold">{image.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}