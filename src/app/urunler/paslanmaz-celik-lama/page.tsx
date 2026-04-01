"use client";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function PaslanmazLamaPage() {
    const tableData = [
        { en: "10", c3: "0,240", c5: "0,400", c6: "0,480", c8: "0,640", c10: "0,800", c12: "0,960", c14: "1,120", c15: "1,200", c16: "1,280", c20: "1,600" },
        { en: "15", c3: "0,360", c5: "0,600", c6: "0,720", c8: "0,960", c10: "1,200", c12: "1,440", c14: "1,680", c15: "1,800", c16: "1,920", c20: "2,400" },
        { en: "20", c3: "0,480", c5: "0,800", c6: "0,960", c8: "1,280", c10: "1,600", c12: "1,920", c14: "2,240", c15: "2,400", c16: "2,560", c20: "3,200" },
        { en: "25", c3: "0,600", c5: "1,000", c6: "1,200", c8: "1,600", c10: "2,000", c12: "2,400", c14: "2,800", c15: "3,000", c16: "3,200", c20: "4,000" },
        { en: "30", c3: "0,720", c5: "1,200", c6: "1,440", c8: "1,920", c10: "2,400", c12: "2,880", c14: "3,360", c15: "3,600", c16: "3,840", c20: "4,800" },
        { en: "35", c3: "0,840", c5: "1,400", c6: "1,680", c8: "2,240", c10: "2,800", c12: "3,360", c14: "3,920", c15: "4,200", c16: "4,480", c20: "5,600" },
        { en: "40", c3: "0,960", c5: "1,600", c6: "1,920", c8: "2,560", c10: "3,200", c12: "3,840", c14: "4,480", c15: "4,800", c16: "5,120", c20: "6,400" },
        { en: "45", c3: "1,080", c5: "1,800", c6: "2,160", c8: "2,880", c10: "3,600", c12: "4,320", c14: "5,040", c15: "5,400", c16: "5,760", c20: "7,200" },
        { en: "50", c3: "1,200", c5: "2,000", c6: "2,400", c8: "3,200", c10: "4,000", c12: "4,800", c14: "5,600", c15: "6,000", c16: "6,400", c20: "8,000" },
        { en: "60", c3: "1,440", c5: "2,400", c6: "2,880", c8: "3,840", c10: "4,800", c12: "5,760", c14: "6,720", c15: "7,200", c16: "7,680", c20: "9,600" },
        { en: "65", c3: "1,560", c5: "2,600", c6: "3,120", c8: "4,160", c10: "5,200", c12: "6,240", c14: "7,280", c15: "7,800", c16: "8,320", c20: "10,400" },
        { en: "70", c3: "1,680", c5: "2,800", c6: "3,360", c8: "4,480", c10: "5,600", c12: "6,720", c14: "7,840", c15: "8,400", c16: "8,960", c20: "11,200" },
        { en: "75", c3: "1,800", c5: "3,000", c6: "3,600", c8: "4,800", c10: "6,000", c12: "7,200", c14: "8,400", c15: "9,000", c16: "9,600", c20: "12,000" },
        { en: "80", c3: "1,920", c5: "3,200", c6: "3,840", c8: "5,120", c10: "6,400", c12: "7,680", c14: "8,960", c15: "9,600", c16: "10,240", c20: "12,800" },
        { en: "90", c3: "2,160", c5: "3,600", c6: "4,320", c8: "5,760", c10: "7,200", c12: "8,640", c14: "10,080", c15: "10,800", c16: "11,520", c20: "14,400" },
        { en: "100", c3: "2,400", c5: "4,000", c6: "4,800", c8: "6,400", c10: "8,000", c12: "9,600", c14: "11,200", c15: "12,000", c16: "12,800", c20: "16,000" },
        { en: "110", c3: "2,640", c5: "4,400", c6: "5,280", c8: "7,040", c10: "8,800", c12: "10,560", c14: "12,320", c15: "13,200", c16: "14,080", c20: "17,600" },
        { en: "120", c3: "2,880", c5: "4,800", c6: "5,760", c8: "7,680", c10: "9,600", c12: "11,520", c14: "13,440", c15: "14,400", c16: "15,360", c20: "19,200" },
        { en: "125", c3: "3,000", c5: "5,000", c6: "6,000", c8: "8,000", c10: "10,000", c12: "12,000", c14: "14,000", c15: "15,000", c16: "16,000", c20: "20,000" },
        { en: "130", c3: "3,120", c5: "5,200", c6: "6,240", c8: "8,320", c10: "10,400", c12: "12,480", c14: "14,560", c15: "15,600", c16: "16,640", c20: "20,800" },
        { en: "140", c3: "3,360", c5: "5,600", c6: "6,720", c8: "8,960", c10: "11,200", c12: "13,440", c14: "15,680", c15: "16,800", c16: "17,920", c20: "22,400" },
        { en: "150", c3: "3,600", c5: "6,000", c6: "7,200", c8: "9,600", c10: "12,000", c12: "14,400", c14: "16,800", c15: "18,000", c16: "19,200", c20: "24,000" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HERO BANNER */}
            <div className="relative bg-blue-950 py-24 md:py-32 overflow-hidden border-b border-blue-800">
                <div className="absolute inset-0">
                    <Image src="/products/paslanmaz-lama.jpg" alt="Paslanmaz Lama" fill priority className="object-cover opacity-20 mix-blend-luminosity scale-105" />
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
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Çelik Lama</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Endüstriyel yassı çubuklar ve paslanmaz taşıyıcı silme profiller.
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
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">GENİŞLİK</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">10,00 - 150,00 mm arası</div>
                            </div>
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">ET KALINLIĞI</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">5,00 - 20,00 mm arası</div>
                            </div>
                        </div>

                        {/* Image Box */}
                        <div className="lg:w-1/3 relative min-h-[160px] rounded-xl overflow-hidden shadow-md border border-slate-200 hidden sm:block group">
                            <Image
                                src="/products/paslanmaz-lama.jpg"
                                alt="Paslanmaz Çelik Lama"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-slate-500 italic mb-10 pl-2">
                        Diğer kalite, genişlik ve et kalınlıkları için, <a href="tel:+902623355878" className="text-blue-600 font-semibold hover:underline transition-colors">+90 262 335 58 78</a> veya <Link href="/iletisim" className="text-blue-600 font-semibold hover:underline transition-colors">iletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
                    </p>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200">
                        <table className="w-full text-center border-collapse min-w-[900px]">
                            <thead>
                                <tr>
                                    <th colSpan={11} className="bg-blue-950 text-white border-b border-blue-900 py-3 px-4 font-bold tracking-wide text-lg text-center">Lama (Kg/Mt)</th>
                                </tr>
                                <tr>
                                    <th rowSpan={2} className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold whitespace-nowrap align-middle">En (mm)</th>
                                    <th colSpan={10} className="bg-blue-900 text-white border-b border-blue-800/50 py-2 px-4 text-sm font-semibold text-center">Kalınlık (mm)</th>
                                </tr>
                                <tr>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">3</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">5</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">6</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">8</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">10</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">12</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">14</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">15</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">16</th>
                                    <th className="bg-blue-900 text-white border-b border-blue-800/50 py-2 px-3 text-sm font-semibold">20</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-semibold text-slate-700">
                                {tableData.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"} >
                                        <td className="border-r border-b border-slate-200 py-2 px-3 bg-blue-50/30 text-blue-950 font-extrabold">{row.en}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c3}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c5}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c6}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c8}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c10}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c12}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c14}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c15}</td>
                                        <td className="border-r border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c16}</td>
                                        <td className="border-b border-slate-200 py-2 px-3 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.c20}</td>
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
