"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function UrunlerLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const categories = [
        { name: "Paslanmaz Sac", href: "/urunler/sac" },
        { name: "Paslanmaz Profil", href: "/urunler/profil" },
        { name: "Paslanmaz Boru", href: "/urunler/boru" },
        { name: "Paslanmaz Köşebent", href: "/urunler/kosebent" },
        { name: "Paslanmaz Lama", href: "/urunler/lama" },
        { name: "Paslanmaz Fittings", href: "/urunler/fittings" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Product Navigation */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sticky top-24">
                        <h3 className="font-bold text-[#1F2937] text-lg mb-4 pb-4 border-b">Ürün Kategorileri</h3>
                        <ul className="space-y-1">
                            {categories.map((category) => {
                                const isActive = pathname === category.href || (pathname === "/urunler" && pathname.startsWith(category.href));
                                return (
                                    <li key={category.name}>
                                        <Link
                                            href={category.href}
                                            className={cn(
                                                "flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-[#1D4ED8] text-white shadow-sm"
                                                    : "text-gray-600 hover:bg-gray-100 hover:text-[#1F2937]"
                                            )}
                                        >
                                            {category.name}
                                            {isActive && <ChevronRight className="h-4 w-4" />}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-8 p-4 bg-[#1F2937] text-white rounded-md text-sm">
                            <h4 className="font-bold mb-2 text-red-300">Stok Sorun?</h4>
                            <p className="text-gray-300 mb-4 text-xs leading-relaxed">Aradığınız özel ölçü veya kaliteyi listede bulamadıysanız iletişime geçin.</p>
                            <Link href="/iletisim" className="block text-center bg-white text-[#1F2937] py-2 rounded-md font-bold hover:bg-gray-100 transition-colors">
                                Bize Ulaşın
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Main Product Content */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
