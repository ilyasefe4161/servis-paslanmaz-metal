import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for premium look
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Load Inter font with multiple weights
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Servis Paslanmaz Metal | Güvenilir Tedarik",
  description: "Endüstriyel paslanmaz sac, profil, boru, köşebent, lama ve fittings tedarikçisi. Geniş stok ve aynı gün sevkiyat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
