// app/portfolio/page.tsx

import React from 'react'; // Optional but useful in some cases

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">My Work Samples</h1>
      <ul className="mt-4">
        <li>
          <a href="https://github.com/your-github/project-1" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Project 1: Sea Level Prediction
          </a>
        </li>
        <li className="mt-2">
          <a href="https://github.com/your-github/project-2" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Project 2: Chess Engine in C
          </a>
        </li>
      </ul>
    </div>
  );
}