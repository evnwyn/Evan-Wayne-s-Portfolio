// app/portfolio/page.tsx

import React from 'react';
import Link from 'next/link'; // Import the Link component

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 font-sans"> {/* Apply the modern font */}
      <h1 className="text-6xl font-bold text-white transition-all duration-500 hover:text-gray-300 mb-4">
        My Work Samples
      </h1>
      <ul className="mt-4">
        <li className="mb-4">
          <a href="https://github.com/your-github/project-1" className="text-blue-500 underline text-2xl" target="_blank" rel="noopener noreferrer">
            Project 1: Sea Level Prediction
          </a>
        </li>
        <li>
          <a href="https://github.com/your-github/project-2" className="text-blue-500 underline text-2xl" target="_blank" rel="noopener noreferrer">
            Project 2: Chess Engine in C
          </a>
        </li>
      </ul>

      <div className="mt-8">
        <Link href="/" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500 ease-out hover:shadow-2xl">
          Return to Home
        </Link>
      </div>
    </div>
  );
}