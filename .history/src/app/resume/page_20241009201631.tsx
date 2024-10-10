// app/resume/page.tsx

import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-6xl font-bold text-white mb-6 transition-all duration-500 hover:text-gray-300">
        My Resume
      </h1>
      <a
        href="/Evan Wayne's Resume 09:10:2024.pdf" // Ensure this points to the correct resume file in the public folder
        download
        className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg transform hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-xl"
      >
        Download Resume
      </a>
      <iframe
        src="/Evan Wayne's Resume 09:10:2024.pdf" // Embedding the resume for inline viewing
        className="mt-8 w-full max-w-4xl h-full border-0 shadow-lg"
        style={{ height: 'calc(100vh - 200px)' }} // Adjust height to fit full viewport minus some space for header and download button
        title="Resume PDF"
      />
    </div>
  );
}