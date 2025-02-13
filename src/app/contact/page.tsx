import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4 pt-20"> 
        <h1 className="text-4xl font-bold text-center my-8">Hubungi Kami</h1>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang Desa Wisata, silakan hubungi kami melalui informasi di bawah ini:
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> info@desawisata.com
            </p>
            <p className="text-lg text-gray-700">
              <strong>Telepon:</strong> +62 123 4567 890
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}