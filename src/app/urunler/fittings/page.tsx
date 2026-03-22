"use client";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Ruler } from "lucide-react";
import { ProductTable } from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Building2 } from "lucide-react";

export default function PaslanmazFittingsPage() {
    const columns = [
        { key: "isim", header: "Ürün Adı" },
        { key: "ölcü", header: "Ölçü Aralığı (Inç/MM)" },
        { key: "tip", header: "Bağlantı Tipi" },
        { key: "basinc", header: "Basınç/Kalınlık Sınıfı" },
    ];

    const grades = ["304", "316"];

    const data = [
        { grade: "304", isim: "Paslanmaz Dirsek 90°", ölcü: "1/2\" - 8\"", tip: "Kaynaklı / Dişli", basinc: "SCH10 / SCH40" },
        { grade: "304", isim: "Paslanmaz TEE", ölcü: "1/2\" - 6\"", tip: "Kaynaklı", basinc: "SCH10 / SCH40" },
        { grade: "304", isim: "Paslanmaz Redüksiyon", ölcü: "3/4\"x1/2\" - 4\"x3\"", tip: "Konsantrik / Eksantrik", basinc: "SCH10 / SCH40" },
        { grade: "304", isim: "Paslanmaz Flanş", ölcü: "DN15 - DN200", tip: "Düz / Boyunlu", basinc: "PN10 / PN16" },
        { grade: "304", isim: "Paslanmaz Nipel / Manşon", ölcü: "1/4\" - 4\"", tip: "Dişli (BSP/NPT)", basinc: "150 LBS" },

        { grade: "316", isim: "Paslanmaz Dirsek 90°", ölcü: "1/2\" - 8\"", tip: "Kaynaklı / Dişli", basinc: "SCH10 / SCH40" },
        { grade: "316", isim: "Paslanmaz Flanş", ölcü: "DN15 - DN300", tip: "Lap Joint / Kör", basinc: "PN16 / PN40" },
        { grade: "316", isim: "Yaka (Kıvrık Yaka)", ölcü: "DN15 - DN300", tip: "Kaynaklı", basinc: "Standart" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HER0 BANNER */}
            <div className="relative bg-blue-950 py-24 md:py-32 overflow-hidden border-b border-blue-800">
                <div className="absolute inset-0">
                    <Image src="/products/paslanmaz-fittings.jpg" alt="Paslanmaz Fittings" fill priority className="object-cover opacity-20 mix-blend-luminosity scale-105" />
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
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Fittings</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Tesisat hatlarınızda sıfır sızıntı, tam uyum.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* DETAILED CONTENT & IMAGE */}
            <div className="container mx-auto px-4 -mt-10 relative z-20 mb-20">
                <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-extrabold text-blue-900 mb-6 tracking-tight">Ürün Genel Bakış</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>Dirsek, T-parçası, redüksiyon, flanş, yaka ve rakor gibi tüm bağlantı elemanları (fittings) basınçlı boru hatlarının montajında kilit rol oynar.</p>
                                <p>Dişli veya kaynaklı bağlantı tipleriyle, sızdırmazlık gerektiren gıda, kimya ve ilaç sanayisinde en yüksek kalite standartlarına uygun normlarda (ISO, DIN, ASME) stoklanmaktadır.</p>
                            </div>
                            
                            <div className="mt-10 grid gap-4">
                                
                                <div className="flex items-center text-blue-800 font-bold bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                                    <ShieldCheck className="w-6 h-6 text-red-600 mr-4 shrink-0" />
                                    <span>Sızdırmaz Kesin Çözüm</span>
                                </div>
                                
                                <div className="flex items-center text-blue-800 font-bold bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                                    <ShieldCheck className="w-6 h-6 text-red-600 mr-4 shrink-0" />
                                    <span>Dişli ve Kaynaklı Modeller</span>
                                </div>
                                
                                <div className="flex items-center text-blue-800 font-bold bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                                    <ShieldCheck className="w-6 h-6 text-red-600 mr-4 shrink-0" />
                                    <span>Uluslararası Flanş Normları</span>
                                </div>
                                
                            </div>
                            
                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg font-bold shadow-xl shadow-red-600/20 rounded-xl">
                                    <Link href="/iletisim">Hemen Teklif İste</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl">
                                    <a href="#tablo">Ölçülere Git</a>
                                </Button>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-rose-700/10 rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>
                            
                            {/* Main Image */}
                            <div className="relative group rounded-3xl shadow-2xl overflow-hidden border border-slate-100 aspect-square md:aspect-[4/3] bg-white">
                                <Image src="/products/paslanmaz-fittings.jpg" alt="Paslanmaz Fittings" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 animate-fade-in-up stagger-3">
                                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Garanti Kapsamı</div>
                                    <div className="font-extrabold text-blue-900 text-lg">100% Sertifikalı</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* PRODUCT TABLE SECTION */}
            <div id="tablo" className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                           <Ruler className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight">Teknik Ölçü ve Ağırlık Tablosu</h2>
                    </div>
                    <p className="text-slate-500 text-lg max-w-3xl ml-16">
                        Projenize uygun kalite ve ebatı seçerek ürün listesinden hızlıca ölçüleri kopyalayabilirsiniz. Özelleştirilmiş kesim talepleri için bizimle iletişime geçin.
                    </p>
                </motion.div>
                
                <ProductTable columns={columns} data={data} grades={grades} />
            </div>
        </div>
    );
}
