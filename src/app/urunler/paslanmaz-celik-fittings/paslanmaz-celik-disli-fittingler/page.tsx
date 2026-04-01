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
        { name: "Paslanmaz Manşon DIN2986", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-manson-din2986", desc: "", image: "/products/disli1.png" },
        { name: "Paslanmaz Yarım Manşon", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-yarim-manson", desc: "", image: "/products/disli2.png" },
        { name: "Paslanmaz Hortum Ucu 150Lbs", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-hortum-ucu-150lbs", desc: "", image: "/products/disli3.png" },
        { name: "Paslanmaz Dişli Dirsek 150Lbs", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-disli-dirsek-150lbs", desc: "", image: "/products/disli4.png" },
        { name: "Paslanmaz Kuyruklu Dirsek 150Lbs", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-kuyruklu-dirsek-150lbs", desc: "", image: "/products/disli5.png" },
        { name: "Paslanmaz Dişli Kruva 150Lbs", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-disli-kruva-150lbs", desc: "", image: "/products/disli6.png" },
        { name: "Paslanmaz Dişli Tee 150Lbs", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-disli-tee-150lbs", desc: "", image: "/products/disli7.png" },
        { name: "Paslanmaz Çift Taraflı Nipel DIN2982", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-cift-tarafli-nipel-din2982", desc: "", image: "/products/disli8.png" },
        { name: "Paslanmaz Tek Taraflı Nipel", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-tek-tarafli-nipel", desc: "", image: "/products/disli9.png" },
        { name: "Anahtar Ağızlı Hex Nipel", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/anahtar-agizli-hex-nipel", desc: "", image: "/products/disli10.png" },
        { name: "Anahtar Ağızlı İç Dişli Körtapa", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/anahtar-agizli-ic-disli-kortapa", desc: "", image: "/products/disli11.png" },
        { name: "Anahtar Ağızlı Dış Dişli Körtapa", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/anahtar-agizli-dis-disli-kortapa", desc: "", image: "/products/disli12.png" },
        { name: "Dişli Konik Rekor 150Lbs", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/disli-konik-rekor-150lbs", desc: "", image: "/products/disli13.png" },
        { name: "Anahtar Ağızlı Redüksiyon Nipel", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/anahtar-agizli-reduksiyon-nipel", desc: "", image: "/products/disli14.png" },
        { name: "Anahtar Ağızlı Bushing Redüksiyon", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/anahtar-agizli-bushing-reduksiyon", desc: "", image: "/products/disli15.png" },
        { name: "Paslanmaz Dişli Çalpara Çekvalf", href: "/urunler/paslanmaz-celik-fittings/paslanmaz-celik-disli-fittingler/paslanmaz-disli-calpara-cekvalf", desc: "", image: "/products/disli16.png" },
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
