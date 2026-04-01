"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PaslanmazSacPage() {
    const tableData = [
        { kalinlik: "0,30", col1: "4,8", col2: "-", col3: "-", col4: "-" },
        { kalinlik: "0,40", col1: "6,4", col2: "10", col3: "-", col4: "-" },
        { kalinlik: "0,50", col1: "8", col2: "12,5", col3: "-", col4: "-" },
        { kalinlik: "0,60", col1: "9,6", col2: "15", col3: "21,6", col4: "-" },
        { kalinlik: "0,70", col1: "11,2", col2: "17,5", col3: "25,2", col4: "-" },
        { kalinlik: "0,80", col1: "12,8", col2: "20", col3: "28,8", col4: "-" },
        { kalinlik: "1,00", col1: "16", col2: "25", col3: "36", col4: "-" },
        { kalinlik: "1,20", col1: "19,2", col2: "30", col3: "43,2", col4: "-" },
        { kalinlik: "1,50", col1: "24", col2: "37,5", col3: "54", col4: "96" },
        { kalinlik: "2,00", col1: "32", col2: "50", col3: "72", col4: "128" },
        { kalinlik: "2,50", col1: "40", col2: "62,5", col3: "90", col4: "160" },
        { kalinlik: "3,00", col1: "48", col2: "75", col3: "108", col4: "192" },
        { kalinlik: "4,00", col1: "64", col2: "100", col3: "144", col4: "256" },
        { kalinlik: "5,00", col1: "80", col2: "125", col3: "180", col4: "320" },
        { kalinlik: "6,00", col1: "96", col2: "150", col3: "216", col4: "384" },
        { kalinlik: "7,00", col1: "112", col2: "175", col3: "252", col4: "448" },
        { kalinlik: "8,00", col1: "128", col2: "200", col3: "288", col4: "512" },
        { kalinlik: "10,00", col1: "160", col2: "250", col3: "360", col4: "640" },
        { kalinlik: "12,00", col1: "192", col2: "300", col3: "432", col4: "768" },
    ];


    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HER0 BANNER */}
            <div className="relative bg-blue-950 py-24 md:py-32 overflow-hidden border-b border-blue-800">
                <div className="absolute inset-0">
                    <Image src="/products/paslanmaz-sac.jpg" alt="Paslanmaz Sac" fill priority className="object-cover opacity-20 mix-blend-luminosity scale-105" />
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
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Çelik Sac</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Endüstrinin her alanında kullanılan dayanıklı ve estetik levhalar.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* PRODUCT TABLE SECTION */}
            <div id="tablo" className="container mx-auto px-4">
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
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">304 / 304L / 316 / 316L / 310S / 430</div>
                            </div>
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">ET KALINLIĞI</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">0,40 - 50,00 mm arası</div>
                            </div>
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">EBATLAR</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">1000 X 2000 / 1250 X 2500 / 1500 X 3000 / 2000 X 4000 mm</div>
                            </div>
                        </div>

                        {/* Image Box */}
                        <div className="lg:w-1/3 relative min-h-[220px] rounded-xl overflow-hidden shadow-md border border-slate-200 hidden sm:block group">
                            <Image
                                src="/products/paslanmaz-sac.jpg"
                                alt="Paslanmaz Çelik Sac Levha"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-slate-500 italic mb-10 pl-2">
                        Diğer kalite, et kalınlığı ve ebatlar için, <a href="tel:+902623355878" className="text-blue-600 font-semibold hover:underline transition-colors">+90 262 335 58 78</a> veya <Link href="/iletisim" className="text-blue-600 font-semibold hover:underline transition-colors">iletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
                    </p>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200">
                        <table className="w-full text-center border-collapse min-w-[700px]">
                            <thead>
                                <tr>
                                    <th colSpan={5} className="bg-blue-950 text-white border-b border-blue-900 py-3 px-4 font-bold tracking-wide text-lg text-center">Levha (Kg/Adet)</th>
                                </tr>
                                <tr>
                                    <th className="bg-blue-900 text-white/90 border-r border-b border-blue-800/50 py-2 px-4">Kalınlık (mm)</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">1000 X 2000 (mm)</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">1250 X 2500 (mm)</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">1500 X 3000 (mm)</th>
                                    <th className="bg-blue-900 text-white border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">2000 X 4000 (mm)</th>
                                </tr>
                            </thead>
                            <tbody className="text-base font-semibold text-slate-700">
                                {tableData.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"} >
                                        <td className="border-r border-b border-slate-200 py-3 px-4 bg-blue-50/30 text-blue-950 font-extrabold">{row.kalinlik}</td>
                                        <td className="border-r border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.col1}</td>
                                        <td className="border-r border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.col2}</td>
                                        <td className="border-r border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.col3}</td>
                                        <td className="border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.col4}</td>
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
