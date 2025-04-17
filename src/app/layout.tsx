import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Galleria",
  description: "A modern gallery application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const TopNav = () => (
  <nav className="border-b border-white/10 p-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between text-white">
      <div className="text-xl font-bold">Galleria</div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-gray-300/50">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-300/50">
          About
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-300/50">
          Sign In
        </a>
      </div>
    </div>
  </nav>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-radial-gradient flex h-screen flex-col">
        <header>
          <TopNav />
        </header>
        <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
        <footer className="border-t border-white/10 p-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Galleria. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
