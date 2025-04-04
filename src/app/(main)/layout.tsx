import GoBackUp from "@/components/util/go-back-up";
import { ThemeProvider } from "@/providers/theme-context";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { ScrollToHash } from "@/components/scroll-to-hash";

import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/navbar/navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"

import { config } from "@/config";
const exo = localFont({
  src: "../fonts/Exo.woff2",
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: `${config.name} | ${config.hero.subtitle}`,
  description:
    "Automating the future of luxury furniture manufauturing with robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <html lang="en" className={`w-screen light ${exo.variable}`} suppressHydrationWarning>
      <ReactLenis root options={lenisOptions}>
        <ThemeProvider>
          <body
            className={`antialiased relative w-full h-fit font-[Exo]`}
          >
            <Navbar />
            <MobileNavbar />
            <ScrollToHash />
            {children}
            <GoBackUp />
            <Footer />
            <Analytics />
          </body>
        </ThemeProvider>
      </ReactLenis>

    </html>
  );
}
