import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OxygenForLife Ghana | Affordable Medical Oxygen in Ghana | Oxygen For Life NGO Saving Lives",
  description: "Oxygen For Life Ghana is a non-profit providing affordable medical oxygen to hospitals and communities across Ghana. We improve health outcomes by ensuring reliable oxygen access, training healthcare workers, and advocating for better healthcare infrastructure. Support our mission to save lives today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-white text-black`}>{children}</body>
    </html>
  );
}

