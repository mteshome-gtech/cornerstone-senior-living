import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Corner Stone Senior Living | Allen, Texas",
    template: "%s | Corner Stone Senior Living",
  },
  description:
    "Corner Stone Senior Living is a family-owned residential senior living home in Allen, Texas, designed around comfort, connection, dignity, and exceptional care.",
  keywords: [
    "Corner Stone Senior Living",
    "senior living",
    "senior living Allen Texas",
    "residential senior living",
    "assisted living Allen Texas",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-shell">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}