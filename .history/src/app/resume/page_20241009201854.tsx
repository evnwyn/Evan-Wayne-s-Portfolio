// app/resume/page.tsx

import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-6xl font-bold text-white transition-all duration-500 hover:text-gray-300">
          My Resume
        </h1>
        <a
          href="/Evan Wayne's Resume 09:10:2024.pdf" // Ensure this points to the correct resume file
          download
          className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg transform hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-xl mt-6"
        >
          Download Resume
        </a>
      </div>
      
      <div className="flex-grow flex justify-center items-center">
        <iframe
          src="/Evan Wayne's Resume 09:10:2024.pdf"
          className="w-full h-full max-w-4xl border-0 shadow-lg"
          style={{ minHeight: 'calc(100vh - 200px)' }} // Fill the remaining viewport height
          title="Resume PDF"
        />
      </div>

      <footer className="text-center text-white py-4">
        © {new Date().getFullYear()} Evan Wayne
      </footer>
    </div>
  );
}