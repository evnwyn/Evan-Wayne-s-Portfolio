// app/layout.tsx

import '~/styles/globals.css';

import { type Metadata } from 'next';
import { ReactNode } from 'react';
import NavBar from './NavBar';

export const metadata: Metadata = {
  title: 'Evan Wayne | Portfolio',
  description: 'This is my personal portfolio website',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <footer className="p-4 text-center">
          © {new Date().getFullYear()} Your Name
        </footer>
      </body>
    </html>
  );
}