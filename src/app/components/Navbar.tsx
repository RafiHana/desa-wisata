import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image src="/Surodadi.png" alt="Logo Desa" width={50} height={50} />
          <span className="ml-2 text-xl font-bold">Desa Wisata</span>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/sejarah" className="hover:text-gray-600">Sejarah Desa</Link>
          <Link href="/destinasi" className="hover:text-gray-600">Destinasi Wisata</Link>
          <Link href="/galeri" className="hover:text-gray-600">Galeri</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;