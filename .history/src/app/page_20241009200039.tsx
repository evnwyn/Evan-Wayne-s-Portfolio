// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/IMG_4102.jpg" // Ensure this image is in the 'public' folder
        alt="Evan Wayne"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold mt-4">Welcome to Evan Wayne's Portfolio</h1>
      <p className="mt-2">Explore my projects and learn more about me.</p>
      <nav className="mt-4">
        <Link href="/about" className="text-blue-500">About Me</Link>
        <br />
        <Link href="/resume" className="text-blue-500">Resume</Link>
        <br />
        <Link href="/portfolio" className="text-blue-500">Portfolio</Link>
      </nav>
    </div>
  );
}