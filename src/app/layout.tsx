import type { Metadata } from "next";
import { Archivo, Inter, Signika } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  display: 'swap',
  weight: 'variable',
  subsets: ['greek'],
  variable: '--font-inter'
})

const signika = Signika({
  display: 'swap',
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-signika'
})

export const metadata: Metadata = {
  title: "Jitter A fast and simple motion design tool on the web",
  description: "jitter.video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${signika.variable} antialiased bg-white text-black font-inter`}>{children}</body>
    </html>
  );
}

