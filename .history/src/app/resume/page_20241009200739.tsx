// app/resume/page.tsx

import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>
      <a
        href="/Evan Wayne's Resume 09:10:2024.pdf" // Ensure your resume file is in the 'public' folder
        download
        className="mt-4 text-blue-500 underline"
      >
        Download Resume
      </a>
      <iframe
        src="/Evan Wayne's Resume 09:10:2024.pdf"
        className="w-full h-full mt-8"
        style={{ height: '80vh', width: '100%', border: 'none' }} // Full height and width adjustment
        title="Resume PDF"
      />
    </div>
  );
}