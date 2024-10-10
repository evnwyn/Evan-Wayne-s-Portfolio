// app/resume/page.tsx

import React from 'react'; // Optional in newer versions, but can help avoid confusion

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">My Resume</h1>
      <a
        href="/Evan Wayne's Resume 09:10:2024.pdf" // Make sure this path matches your file in the 'public' folder
        download
        className="mt-4 text-blue-500"
      >
        Download Resume
      </a>
      <iframe
        src="/Evan Wayne's Resume 09:10:2024.pdf"
        className="mt-8 w-full h-96"
        title="Resume PDF"
      />
    </div>
  );
}