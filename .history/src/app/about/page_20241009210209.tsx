// app/about/page.tsx

import React from 'react';
import Link from 'next/link'; // Import the Link component

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-6xl font-bold text-white transition-all duration-500 hover:text-gray-300 mb-4">
        About Me
      </h1>
      <p className="text-2xl text-center text-white max-w-2xl">
        I'm Evan Wayne, passionate about software engineering, cybersecurity, and creative production. My talents span from coding and data analysis to writing and music.
      </p>

      {/* Stand-out Home button in blue gradient */}
      <div className="mt-8">
        <Link href="/" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500 ease-out hover:shadow-2xl">
          Return to Home
        </Link>
      </div>
    </div>
  );
}