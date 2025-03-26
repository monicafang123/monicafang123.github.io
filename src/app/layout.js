import { Newsreader } from "next/font/google";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "./components/Navbar";
import { AudioProvider } from "./components/AudioContext";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const elza = localFont({
  src: "./elza-light.woff2",
  variable: "--font-elza",
});

const dmMono = DM_Mono({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-dmMono",
});

export const metadata = {
  title: "mmf",
  description: "Monica Fang's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <AudioProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="./Logo-Monica.ico" />
        </head>

        <body className={`${elza.variable} ${newsreader.variable} ${dmMono.variable} antialiased`}>
          <div className="relative overflow-hidden w-full h-screen">

            {/* Background with blur + blend + hover zoom */}
            <div
              className="absolute inset-0 bg-center bg-cover blur-xs transition-transform duration-1000 ease-in-out hover:scale-125"
              style={{
                backgroundImage: "url('/images/folder/8P1A4274.webp')",
                backgroundBlendMode: 'multiply',
              }}
            ></div>

            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

            {/* Foreground content */}
            <div className="relative z-10">
              <Navbar />
              {children}
              <Analytics />
              <SpeedInsights />
            </div>

          </div>
        </body>
      </html>
    </AudioProvider>
  );
}

