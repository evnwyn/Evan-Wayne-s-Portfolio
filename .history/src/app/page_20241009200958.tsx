// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <Image
        src="/IMG_4102.jpg" // Ensure this image is in the 'public' folder
        alt="Evan Wayne"
        width={300}  // Increase the width
        height={300} // Increase the height
        className="rounded-full"
      />
      <h1 className="text-5xl font-bold mt-8">Welcome to Evan Wayne's Portfolio</h1>
      <p className="mt-4 text-2xl text-center max-w-2xl">
        Explore my projects and learn more about me. I'm a passionate developer and creative problem-solver.
      </p>
      <nav className="mt-8 text-xl">
        <Link href="/about" className="text-blue-500 hover:underline mx-4">About Me</Link>
        <Link href="/resume" className="text-blue-500 hover:underline mx-4">Resume</Link>
        <Link href="/portfolio" className="text-blue-500 hover:underline mx-4">Portfolio</Link>
      </nav>
    </div>
  );
}