"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ana sistem linkleri
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Ürünlerimiz", href: "/urunler" },
    { name: "İletişim", href: "/iletisim" }
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2"
            : "bg-blue-950/80 backdrop-blur-md border-b border-slate-700/50 py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Dinamik Ölçekli Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Servis Paslanmaz Logo"
              width={400}
              height={150}
              priority
              className={cn(
                "w-auto object-contain transition-all duration-300 group-hover:scale-105",
                scrolled ? "h-14 md:h-16" : "h-16 md:h-24"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-red-500 relative py-2 group",
                  scrolled ? "text-slate-800" : "text-white"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+902623355878"
              className={cn(
                "hidden lg:flex items-center text-sm font-bold transition-colors hover:text-red-500",
                scrolled ? "text-slate-800" : "text-white"
              )}
            >
              <Phone className="w-4 h-4 mr-2" />
              0262 335 58 78
            </a>

            <Button
              className="hidden md:flex bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 border-0 rounded-full px-6 transition-all hover:scale-105 active:scale-95 font-bold"
            >
              <Link href="/iletisim" className="flex items-center">
                Teklif İste <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className={cn("md:hidden transition-colors border-0", scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:text-red-400 hover:bg-white/10")}
            >
              <Menu className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </header>

      {/* Ekran Boyutu Mobil Menü Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-blue-950 flex flex-col pt-6 px-4 md:hidden animate-in slide-in-from-top-2 duration-300 border-b-4 border-red-600">
          <div className="flex items-center justify-between mb-12">
            <Image src="/logo.png" alt="Servis Paslanmaz Logo" width={300} height={100} className="h-16 w-auto object-contain" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-white/10"
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-extrabold text-slate-200 hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-12 w-full pt-8">
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white h-14 rounded-2xl text-lg font-bold shadow-xl shadow-red-600/30 mb-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/iletisim" className="flex items-center justify-center w-full">
                Hemen Teklif İste <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <a href="tel:+902623355878" className="flex items-center justify-center text-slate-400 p-4 font-medium text-lg">
              <Phone className="w-5 h-5 mr-3" /> +90 262 335 58 78
            </a>
          </div>
        </div>
      )}
    </>
  );
}
