import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { Main } from "@/app/_components/main";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Galleria",
  description: "A modern gallery application",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en" className={`${geist.variable} antialiased`}>
        <body className="bg-radial-gradient flex min-h-screen flex-col">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
