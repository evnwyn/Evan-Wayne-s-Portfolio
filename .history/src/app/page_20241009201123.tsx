// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <Image
        src="/IMG_4102.jpg" // Ensure this image is in the 'public' folder
        alt="Evan Wayne"
        width={300}  // Increased width
        height={300} // Increased height
        className="rounded-full"
      />
      <h1 className="text-5xl font-bold mt-8 text-center whitespace-nowrap">
        Welcome to Evan Wayne's Portfolio
      </h1>
      <p className="mt-4 text-2xl text-center max-w-2xl">
        Explore my projects and learn more about me. I'm a passionate developer and creative problem-solver.
      </p>
      <nav className="mt-8 flex space-x-4">
        <Link href="/about">
          <button className="bg-blue-500 text-white text-xl px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition transform duration-300">
            About Me
          </button>
        </Link>
        <Link href="/resume">
          <button className="bg-green-500 text-white text-xl px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition transform duration-300">
            Resume
          </button>
        </Link>
        <Link href="/portfolio">
          <button className="bg-purple-500 text-white text-xl px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 hover:scale-105 transition transform duration-300">
            Portfolio
          </button>
        </Link>
      </nav>
    </div>
  );
}