// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-800 via-teal-700 to-green-700">
      <Image
        src="/IMG_4102.jpg" // Ensure this image is in the 'public' folder
        alt="Evan Wayne"
        width={300}  // Increased width
        height={300} // Increased height
        className="rounded-full transform hover:scale-110 transition-transform duration-500 ease-out"
      />
      <h1 className="text-6xl font-bold mt-8 text-center text-white whitespace-nowrap transition-all duration-500 hover:text-teal-300">
        Welcome to Evan Wayne's Portfolio
      </h1>
      <p className="mt-4 text-2xl text-center text-white max-w-2xl transition-all duration-500 hover:text-teal-400">
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