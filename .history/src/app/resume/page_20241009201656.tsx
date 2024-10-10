// app/resume/page.tsx

import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-6xl font-bold text-white mt-6 transition-all duration-500 hover:text-gray-300">
        My Resume
      </h1>
      <a
        href="/Evan Wayne's Resume 09:10:2024.pdf" // Ensure this points to the correct resume file in the public folder
        download
        className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg transform hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-xl mt-4"
      >
        Download Resume
      </a>
      <iframe
        src="/Evan Wayne's Resume 09:10:2024.pdf" // Embedding the resume for inline viewing
        className="w-full max-w-4xl border-0 shadow-lg flex-grow"
        style={{ height: 'calc(100vh - 200px)' }} // Adjust height for full viewport minus header and button
        title="Resume PDF"
      />
    </div>
  );
}