// app/about/page.tsx

import React from 'react'; // Import React (optional in newer versions, but useful for clarity)

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 max-w-2xl text-center">
        Hello, I'm Evan Wayne. I am passionate about software engineering, cybersecurity, and creative production. 
        My talents span from coding and data analysis to writing and music. My goal is to work as a Software Engineer or in Cybersecurity, where I can contribute to innovative projects.
      </p>
    </div>
  );
}