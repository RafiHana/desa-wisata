'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image src="/Surodadi.png" alt="Logo Desa" width={50} height={50}/>
          <span className="ml-2 text-xl font-bold mt-4">Desa Surodadi</span>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4 absolute md:static top-16 left-0 right-0 bg-white shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link href="/" className="block hover:text-gray-600 py-2 md:py-0 ml-2 text-xl font-bold">Home</Link>
          <Link href="/sejarah" className="block hover:text-gray-600 py-2 md:py-0 ml-2 text-xl font-bold">Sejarah Desa</Link>
          <Link href="/destinasi" className="block hover:text-gray-600 py-2 md:py-0 ml-2 text-xl font-bold">Destinasi Wisata</Link>
          <Link href="/galeri" className="block hover:text-gray-600 py-2 md:py-0 ml-2 text-xl font-bold">Galeri</Link>
          <Link href="/contact" className="block hover:text-gray-600 py-2 md:py-0 ml-2 text-xl font-bold">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;