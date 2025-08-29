import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Vocabulary Filter Tool",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} antialiased`}
      >
        {children}
        {/* <SplashCursor /> */}
      </body>
    </html>
  );
}
