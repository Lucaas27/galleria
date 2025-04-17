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
  <nav className="flex items-center justify-between border-b p-4 text-white shadow-md">
    <div className="text-xl font-bold">Galleria</div>
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-gray-700">
        Home
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-700">
        About
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-700">
        Sign In
      </a>
    </div>
  </nav>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-radial-gradient">
        <TopNav />
        <main className="container mx-auto h-screen px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
