// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      
      {/* Glowing Image Container */}
      <div className="relative w-full max-w-4xl"> {/* Increased width */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-lg blur-2xl opacity-75 animate-pulse"></div> {/* Glow Effect */}
        
        <Image
          src="/IMG_2968.jpg" // Ensure this image is in the 'public' folder
          alt="Evan Wayne"
          width={1000}  // Increased width
          height={600}  // Increased height for more rectangular shape
          className="relative rounded-lg object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      <h1 className="text-6xl font-bold mt-8 text-center text-white whitespace-nowrap transition-all duration-500 hover:text-gray-300">
        Welcome to Evan Wayne's Portfolio
      </h1>
      
      <p className="mt-4 text-2xl text-center text-white max-w-2xl transition-all duration-500 hover:text-gray-400">
        Explore my projects and learn more about me. I'm a passionate developer and creative problem-solver.
      </p>
      
      <nav className="mt-8 flex space-x-4">
        <Link href="/about">
          <button className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg transform hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-xl">
            About Me
          </button>
        </Link>
        <Link href="/resume">
          <button className="bg-teal-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg transform hover:bg-teal-700 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-xl">
            Resume
          </button>
        </Link>
        <Link href="/portfolio">
          <button className="bg-green-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg transform hover:bg-green-700 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-xl">
            Portfolio
          </button>
        </Link>
      </nav>
    </div>
  );
}