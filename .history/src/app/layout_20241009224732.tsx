import '~/styles/globals.css'; // Import your global styles
import type { Metadata } from 'next'; // Use 'import type' to satisfy the lint rule
import type { ReactNode } from 'react'; // Use 'import type' here as well

export const metadata: Metadata = {
  title: 'Evan Wayne | Portfolio',
  description: 'This is my personal portfolio website',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
        {/* Main content area, flex-grow ensures this stretches to fill the viewport */}
        <main className="flex-grow flex flex-col pb-8">
          {children}
        </main>
      </body>
    </html>
  );
}