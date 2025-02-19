import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Destinasi() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4 pt-20"> 
      <h1 className="text-4xl font-bold text-center my-8 bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent animate-gradient">
          Destinasi Wisata
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/image1.jpg" alt="Destinasi 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Lorem Ipsun Dolor</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/image2.jpg" alt="Destinasi 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Lorem Ipsun Dolor</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/image3.jpg" alt="Destinasi 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Lorem Ipsun Dolor</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}