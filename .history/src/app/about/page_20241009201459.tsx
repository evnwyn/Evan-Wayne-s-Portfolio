// app/about/page.tsx

import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-6xl font-bold text-white mb-4 transition-all duration-500 hover:text-gray-300">
        About Me
      </h1>
      <p className="text-2xl text-center text-white max-w-2xl transition-all duration-500 hover:text-gray-400">
        I'm Evan Wayne, passionate about software engineering, cybersecurity, and creative production. My talents span from coding and data analysis to writing and music.
      </p>
    </div>
  );
}