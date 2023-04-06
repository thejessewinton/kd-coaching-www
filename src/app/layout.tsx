import { Manrope, Nanum_Myeongjo } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "~/styles/globals.css";
import { Footer } from "~/components/footer/Footer";
import { Nav } from "~/components/nav/Nav";

const sans = Manrope({
  variable: "--font-sans",
  display: "optional",
  subsets: ["latin"],
});

const serif = Nanum_Myeongjo({
  variable: "--font-serif",
  display: "optional",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "KD Coaching",
    template: "%s — KD Coaching",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col items-center justify-center scroll-smooth bg-brand leading-loose text-neutral-900 antialiased">
        <Nav />
        <main className="container relative z-0 mx-auto flex w-full flex-grow flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
