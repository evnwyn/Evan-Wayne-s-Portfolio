// src/app/layout.tsx

import '~/styles/globals.css'; // Keep your global styles import
import { type Metadata } from 'next';
import { ReactNode } from 'react';

// Make sure this line is removed
// import NavBar from './NavBar';

export const metadata: Metadata = {
  title: 'Evan Wayne | Portfolio',
  description: 'This is my personal portfolio website',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Remove any reference to NavBar here */}
        <main className="flex-grow">{children}</main>
        <footer className="p-4 text-center">
          © {new Date().getFullYear()} Evan Wayne
        </footer>
      </body>
    </html>
  );
}