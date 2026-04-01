import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight, Box } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ürünlerimiz | Servis Paslanmaz Metal',
    description: 'Paslanmaz çelik sac, profil, boru, köşebent, lama ve fittings ürünlerimizin tüm kataloğu.',
};

export default function UrunlerHubPage() {
    const categories = [
        { name: "ISO Normu Paslanmaz Dikişli ve Dikişsiz Dirsek", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/iso-normu-paslanmaz-dikisli-ve-dikissiz-dirsek", desc: "", image: "/products/kaynakli1.png" },
        { name: "ANSI Normunda Paslanmaz Eşit Tee", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/ansi-normunda-paslanmaz-esit-tee", desc: "", image: "/products/kaynakli2.png" },
        { name: "ANSI Normunda Konsantrik ve Eksantrik Redüksiyon", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/ansi-normunda-konsantrik-ve-eksantrik-reduksiyon", desc: "", image: "/products/kaynakli3.png" },
        { name: "DIN 2642 Paslanmaz Yaka", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/din-2642-paslanmaz-yaka", desc: "", image: "/products/kaynakli4.png" },
        { name: "Paslanmaz Kep", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/paslanmaz-kep", desc: "", image: "/products/kaynakli5.png" },
        { name: "Paslanmaz Kaynaklı Konik Rekor", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/paslanmaz-kaynakli-konik-rekor", desc: "", image: "/products/kaynakli6.png" },
        { name: "Paslanmaz Ay Anahtarlı Rekor- Contalı", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-kaynakli-fittingler/paslanmaz-ay-anahtarli-rekor-contali", desc: "", image: "/products/kaynakli7.png" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24 font-sans relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, i) => (
                    <Link key={i} href={cat.href} className="group flex flex-col h-full">
                        <Card className="flex-1 bg-white border-0 shadow-lg shadow-blue-900/5 transition-all duration-500 overflow-hidden relative min-h-[380px] flex items-end rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                priority={i < 3}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-red-950 group-hover:via-red-900/40"></div>
                            <div className="p-10 relative z-10 w-full text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h2 className="text-3xl font-extrabold text-white mb-3">{cat.name}</h2>
                                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mb-6">
                                    <p className="text-slate-200 text-base leading-relaxed">{cat.desc}</p>
                                </div>

                                <div className="mt-2 flex items-center text-sm font-bold text-red-400 group-hover:text-red-300 transition-colors uppercase tracking-wider">
                                    Ürünleri İncele <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
