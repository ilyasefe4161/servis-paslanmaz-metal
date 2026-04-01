"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PaslanmazCubukPage() {
    const tableData = [
        { cap: "3", yuvarlak: "0,056", kare: "0,071", altikose: "0,061" },
        { cap: "4", yuvarlak: "0,099", kare: "0,126", altikose: "0,109" },
        { cap: "5", yuvarlak: "0,154", kare: "0,196", altikose: "0,170" },
        { cap: "6", yuvarlak: "0,222", kare: "0,283", altikose: "0,245" },
        { cap: "7", yuvarlak: "0,302", kare: "0,385", altikose: "0,333" },
        { cap: "8", yuvarlak: "0,395", kare: "0,502", altikose: "0,435" },
        { cap: "9", yuvarlak: "0,500", kare: "0,636", altikose: "0,551" },
        { cap: "10", yuvarlak: "0,617", kare: "0,785", altikose: "0,680" },
        { cap: "11", yuvarlak: "0,747", kare: "0,950", altikose: "0,823" },
        { cap: "12", yuvarlak: "0,888", kare: "1,130", altikose: "0,979" },
        { cap: "13", yuvarlak: "1,043", kare: "1,327", altikose: "1,149" },
        { cap: "14", yuvarlak: "1,209", kare: "1,539", altikose: "1,333" },
        { cap: "15", yuvarlak: "1,388", kare: "1,766", altikose: "1,530" },
        { cap: "16", yuvarlak: "1,580", kare: "2,010", altikose: "1,741" },
        { cap: "17", yuvarlak: "1,783", kare: "2,269", altikose: "1,965" },
        { cap: "18", yuvarlak: "1,999", kare: "2,543", altikose: "2,203" },
        { cap: "19", yuvarlak: "2,227", kare: "2,834", altikose: "2,455" },
        { cap: "20", yuvarlak: "2,468", kare: "3,140", altikose: "2,720" },
        { cap: "21", yuvarlak: "2,721", kare: "3,462", altikose: "2,999" },
        { cap: "22", yuvarlak: "2,986", kare: "3,799", altikose: "3,291" },
        { cap: "23", yuvarlak: "3,264", kare: "4,153", altikose: "3,597" },
        { cap: "24", yuvarlak: "3,554", kare: "4,522", altikose: "3,917" },
        { cap: "25", yuvarlak: "3,856", kare: "4,906", altikose: "4,250" },
        { cap: "28", yuvarlak: "4,837", kare: "6,154", altikose: "5,331" },
        { cap: "30", yuvarlak: "5,553", kare: "7,065", altikose: "6,120" },
        { cap: "35", yuvarlak: "7,558", kare: "9,616", altikose: "8,330" },
        { cap: "38", yuvarlak: "8,909", kare: "11,335", altikose: "9,819" },
        { cap: "40", yuvarlak: "9,872", kare: "12,560", altikose: "10,880" },
        { cap: "45", yuvarlak: "12,494", kare: "15,896", altikose: "13,770" },
        { cap: "50", yuvarlak: "15,425", kare: "19,625", altikose: "17,000" },
        { cap: "55", yuvarlak: "18,664", kare: "23,746", altikose: "20,570" },
        { cap: "60", yuvarlak: "22,212", kare: "28,260", altikose: "24,480" },
        { cap: "65", yuvarlak: "26,068", kare: "33,166", altikose: "28,730" },
        { cap: "70", yuvarlak: "30,233", kare: "38,465", altikose: "33,320" },
        { cap: "75", yuvarlak: "34,706", kare: "44,156", altikose: "38,250" },
        { cap: "80", yuvarlak: "39,488", kare: "50,240", altikose: "43,520" },
        { cap: "85", yuvarlak: "44,578", kare: "56,716", altikose: "49,130" },
        { cap: "90", yuvarlak: "49,977", kare: "63,585", altikose: "55,080" },
        { cap: "100", yuvarlak: "61,700", kare: "78,500", altikose: "68,000" },
        { cap: "110", yuvarlak: "74,657", kare: "94,985", altikose: "82,280" },
        { cap: "120", yuvarlak: "88,848", kare: "113,040", altikose: "97,920" },
        { cap: "125", yuvarlak: "96,406", kare: "122,656", altikose: "106,250" },
        { cap: "130", yuvarlak: "104,273", kare: "132,665", altikose: "114,920" },
        { cap: "140", yuvarlak: "120,932", kare: "153,860", altikose: "133,280" },
        { cap: "150", yuvarlak: "138,825", kare: "176,625", altikose: "153,000" },
        { cap: "160", yuvarlak: "157,952", kare: "200,960", altikose: "174,080" },
        { cap: "180", yuvarlak: "199,908", kare: "254,340", altikose: "220,320" },
        { cap: "200", yuvarlak: "246,800", kare: "314,000", altikose: "272,000" },
        { cap: "220", yuvarlak: "298,628", kare: "379,940", altikose: "329,120" },
        { cap: "250", yuvarlak: "385,625", kare: "490,625", altikose: "425,000" },
        { cap: "280", yuvarlak: "483,728", kare: "615,440", altikose: "533,120" },
        { cap: "300", yuvarlak: "555,300", kare: "706,500", altikose: "612,000" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HERO BANNER */}
            <div className="relative bg-blue-950 py-24 md:py-32 overflow-hidden border-b border-blue-800">
                <div className="absolute inset-0">
                    <Image src="/products/paslanmaz-cubuk.jpg" alt="Paslanmaz Çubuk" fill priority className="object-cover opacity-20 mix-blend-luminosity scale-105" />
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
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Çelik Çubuk</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Yuvarlak, kare ve altıköşe formlu, talaşlı imalata uygun paslanmaz dolu miller.
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
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">303 / 304 / 310 / 316</div>
                            </div>
                            <div className="flex flex-col sm:flex-row shadow-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <div className="bg-blue-950 text-white font-semibold py-3 px-6 sm:w-48 flex items-center border-l-4 border-red-600">ÇAP</div>
                                <div className="py-3 px-6 text-blue-900 bg-slate-50 flex-1 font-bold text-lg">3,00 - 200,00 mm arası</div>
                            </div>
                        </div>

                        {/* Image Box */}
                        <div className="lg:w-1/3 relative min-h-[160px] rounded-xl overflow-hidden shadow-md border border-slate-200 hidden sm:block group">
                            <Image
                                src="/products/paslanmaz-cubuk.jpg"
                                alt="Paslanmaz Çelik Çubuk"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-slate-500 italic mb-10 pl-2">
                        "Kare" ve "Altıköşe" çubuk çeşitlerimiz, diğer kalite ve çaplar için, <a href="tel:+902623355878" className="text-blue-600 font-semibold hover:underline transition-colors">+90 262 335 58 78</a> veya <Link href="/iletisim" className="text-blue-600 font-semibold hover:underline transition-colors">iletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
                    </p>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200">
                        <table className="w-full text-center border-collapse min-w-[700px]">
                            <thead>
                                <tr>
                                    <th colSpan={4} className="bg-blue-950 text-white border-b border-blue-900 py-3 px-4 font-bold tracking-wide text-lg text-center">Çubuk (Kg/Mt)</th>
                                </tr>
                                <tr>
                                    <th className="bg-blue-900 text-white/90 border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">Çap (mm)</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">Yuvarlak (Kg/Mt)</th>
                                    <th className="bg-blue-900 text-white border-r border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">Kare (Kg/Mt)</th>
                                    <th className="bg-blue-900 text-white border-b border-blue-800/50 py-3 px-4 text-sm font-semibold w-1/4">Altıköşe (Kg/Mt)</th>
                                </tr>
                            </thead>
                            <tbody className="text-base font-semibold text-slate-700">
                                {tableData.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"} >
                                        <td className="border-r border-b border-slate-200 py-3 px-4 bg-blue-50/30 text-blue-950 font-extrabold">{row.cap}</td>
                                        <td className="border-r border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.yuvarlak}</td>
                                        <td className="border-r border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.kare}</td>
                                        <td className="border-b border-slate-200 py-3 px-4 hover:bg-slate-100 hover:text-red-600 transition-colors cursor-default">{row.altikose}</td>
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
