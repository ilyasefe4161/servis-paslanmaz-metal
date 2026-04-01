"use client";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function PaslanmazKosebentPage() {
    const tableData = [
        { ebat: "20 X 20 X 3", agirlik: "0,960" },
        { ebat: "25 X 25 X 3", agirlik: "1,200" },
        { ebat: "30 X 30 X 3", agirlik: "1,440" },
        { ebat: "30 X 30 X 4", agirlik: "1,920" },
        { ebat: "40 X 40 X 3", agirlik: "1,920" },
        { ebat: "40 X 40 X 4", agirlik: "2,560" },
        { ebat: "50 X 50 X 4", agirlik: "3,200" },
        { ebat: "50 X 50 X 5", agirlik: "4,000" },
        { ebat: "60 X 60 X 5", agirlik: "4,800" },
        { ebat: "60 X 60 X 6", agirlik: "5,760" },
        { ebat: "80 X 80 X 7", agirlik: "8,960" },
        { ebat: "80 X 80 X 8", agirlik: "10,240" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HERO BANNER */}
            <div className="relative bg-blue-950 py-24 md:py-32 overflow-hidden border-b border-blue-800">
                <div className="absolute inset-0">
                    <Image src="/products/paslanmaz-kosebent.jpg" alt="Paslanmaz Köşebent" fill priority className="object-cover opacity-20 mix-blend-luminosity scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-300 mb-6 tracking-wide">
                            B2B Endüstriyel Tedarik
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Çelik Köşebent</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Maksimum dayanıklılık sağlayan L formlu destek köşebentleri.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* PRODUCT TABLE SECTION */}
            <div id="tablo" className="container mx-auto px-4 -mt-10 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
                >
                    <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight uppercase">Ölçü ve Ağırlık Tablosu</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mb-6">
                        <div className="flex flex-col gap-3 flex-1 justify-center">
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">KALİTE</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">304 / 316</div>
                            </div>
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">EBATLAR</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">20X20 / 25X25 / 30X30 / 40X40 / 50X50 / 60X60 / 80X80 mm arası</div>
                            </div>
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">ET KALINLIĞI</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">3,00 - 8,00 mm</div>
                            </div>
                        </div>

                        {/* Image Box */}
                        <div className="lg:w-1/3 relative min-h-[160px] rounded-xl overflow-hidden shadow-md border border-slate-200 hidden sm:block group">
                            <Image
                                src="/products/paslanmaz-kosebent.jpg"
                                alt="Paslanmaz Çelik Köşebent"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-slate-500 italic mb-10 pl-2">
                        Diğer kalite, ebat ve et kalınlıkları için, <a href="tel:+902623355878" className="text-blue-600 font-semibold hover:underline transition-colors">+90 262 335 58 78</a> veya <Link href="/iletisim" className="text-blue-600 font-semibold hover:underline transition-colors">iletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
                    </p>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200 max-w-4xl mx-auto">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="bg-blue-950 text-white border-b border-blue-900 py-3 px-4 font-bold tracking-wide text-lg text-center">Köşebent (Kg/Mt)</th>
                                </tr>
                                <tr>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/2">Ebat (mm)</th>
                                    <th className="bg-blue-900 text-white border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/2">Ağırlık (Kg/Mt)</th>
                                </tr>
                            </thead>
                            <tbody className="text-base font-semibold text-slate-700">
                                {tableData.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"} >
                                        <td className="border-r border-b border-slate-200 py-3 px-4 bg-blue-50/30 text-blue-950 font-extrabold">{row.ebat}</td>
                                        <td className="border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.agirlik}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
