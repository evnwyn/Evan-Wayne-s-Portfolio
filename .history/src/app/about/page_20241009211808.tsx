// app/about/page.tsx

import React from 'react';
import Link from 'next/link'; // Import the Link component

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 font-sans">
      {/* Scrollable content */}
      <div className="flex flex-row w-full h-full overflow-y-auto p-8">
        
        {/* Left Side: Images */}
        <div className="w-1/4 flex flex-col space-y-8 items-center justify-start">
          {/* Image of yourself */}
          <img src="/path-to-your-image.jpg" alt="Evan Wayne" className="w-40 h-40 rounded-full object-cover" />
          {/* UCF logo */}
          <img src="/path-to-ucf-logo.png" alt="UCF Logo" className="w-40 h-40 object-contain" />
          {/* Knight Hacks */}
          <img src="/path-to-knight-hacks-logo.png" alt="Knight Hacks Logo" className="w-40 h-40 object-contain" />
          {/* Creative work image */}
          <img src="/path-to-creative-work.jpg" alt="Creative Work" className="w-40 h-40 object-cover" />
        </div>

        {/* Center Section: About Me */}
        <div className="w-2/4 flex flex-col items-center space-y-8 text-center p-8">
          <h1 className="text-6xl font-bold text-white transition-all duration-500 hover:text-gray-300">
            About Me
          </h1>
          <div className="text-xl leading-relaxed text-white max-w-2xl space-y-6">
            <p>
              I'm <span className="font-semibold">Evan Wayne</span>, a passionate software engineer with expertise in <span className="font-semibold">coding, cybersecurity</span>, and <span className="font-semibold">creative production</span>.
            </p>
            <p>
              I specialize in <span className="font-semibold">data analysis</span> and <span className="font-semibold">software development</span>, particularly in the <span className="font-semibold">C programming language</span>. My recent work includes developing a <span className="font-semibold">sea-level prediction model</span> using NASA data.
            </p>
            <p>
              Currently, I'm pursuing a degree in <span className="font-semibold">Computer Science</span> at the <span className="font-semibold">University of Central Florida (UCF)</span>, where I'm expanding my knowledge in fields such as software engineering, machine learning, and data structures. My journey at UCF has challenged me to think critically, collaborate with peers, and apply my skills to real-world problems, preparing me for a career in tech.
            </p>
            <p>
              I thrive in environments that challenge me to <span className="font-semibold">solve complex problems</span> and apply <span className="font-semibold">critical thinking</span>. My mission is to leverage technology to create innovative solutions and make a meaningful impact.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500 ease-out hover:shadow-2xl">
              Return to Home
            </Link>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="w-1/4 flex flex-col space-y-8 items-center justify-start">
          {/* More images of yourself */}
          <img src="/path-to-another-image.jpg" alt="Evan Wayne" className="w-40 h-40 rounded-full object-cover" />
          {/* Another Knight Hacks or creative project logo */}
          <img src="/path-to-additional-work.jpg" alt="Creative Work" className="w-40 h-40 object-cover" />
        </div>
      </div>
    </div>
  );
}