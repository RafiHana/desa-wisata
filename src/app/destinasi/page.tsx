import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Destinasi() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4 pt-20"> 
        <h1 className="text-4xl font-bold text-center my-8">Destinasi Wisata</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/destinasi1.jpg" alt="Destinasi 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Air Terjun Surodadi</h2>
              <p className="text-gray-600">Air terjun dengan pemandangan alam yang menakjubkan.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/destinasi2.jpg" alt="Destinasi 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Bukit Surodadi</h2>
              <p className="text-gray-600">Tempat terbaik untuk melihat matahari terbit.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/destinasi3.jpg" alt="Destinasi 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Kampung Adat Surodadi</h2>
              <p className="text-gray-600">Mengenal budaya dan tradisi masyarakat setempat.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}