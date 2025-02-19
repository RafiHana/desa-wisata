import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sejarah() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold text-center my-8 bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent animate-gradient">
          Sejarah Desa
        </h1>
        <p className="text-lg text-gray-700">
          Desa Wisata memiliki sejarah yang panjang dan kaya akan budaya. Berawal dari sekelompok masyarakat yang tinggal di daerah ini sejak ratusan tahun yang lalu, desa ini berkembang menjadi destinasi wisata yang menarik. Keindahan alam dan keramahan penduduknya membuat desa ini semakin terkenal.
        </p>
      </section>
      <Footer />
    </div>
  );
}