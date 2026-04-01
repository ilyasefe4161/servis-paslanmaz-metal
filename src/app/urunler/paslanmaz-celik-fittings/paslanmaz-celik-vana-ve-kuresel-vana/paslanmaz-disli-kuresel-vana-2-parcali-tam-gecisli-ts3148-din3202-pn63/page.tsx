"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FileText, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function flans1Page() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HERO BANNER */}
            <div className="relative bg-blue-950 py-24 md:py-32 overflow-hidden border-b border-blue-800">
                <div className="absolute inset-0">
                    <Image src="/products/vana1.png" alt="Paslanmaz Dişli Küresel Vana 2 Parçalı Tam Geçişli TS3148 DIN3202 PN63" fill priority className="object-cover opacity-20 mix-blend-luminosity scale-105" />
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
                        <h1 className="text-5xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Dişli Küresel Vana 2 Parçalı Tam Geçişli TS3148 DIN3202 PN63</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Paslanmaz çelik küresel vana, endüstriyel uygulamalarda korozyona karşı üstün dayanıklılığı ve hijyenik yapısı sayesinde yaygın olarak tercih edilen bir üründür.
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
                        {/* Image Box */}

                        <div style={{ width: "100%", maxWidth: "300px", height: "300px" }} className="relative shrink-0 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-200 group bg-slate-50">
                            <Image
                                src="/products/vana1.png"
                                alt="Paslanmaz Dişli Küresel Vana 2 Parçalı Tam Geçişli TS3148 DIN3202 PN63"
                                fill
                                sizes="(max-width: 768px) 10vw, 50vw"
                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <Button asChild size="lg" variant="outline" className="border-blue-950 text-blue-950 hover:bg-blue-50/50 bg-white font-bold h-14 px-8 rounded-xl shadow-sm transition-all border-2">
                                <a href="/vana1.png" target="_blank" rel="noopener noreferrer">
                                    <FileImage className="w-5 h-5 mr-3" />
                                    Teknik Resim Aç (Görsel)
                                </a>
                            </Button>
                        </div>

                    </div>

                    <p className="text-sm md:text-base text-slate-500 italic mb-10 pl-2">
                        Diğer fazla bilgi için, <a href="tel:+902623355878" className="text-blue-600 font-semibold hover:underline transition-colors">+90 262 335 58 78</a> veya <Link href="/iletisim" className="text-blue-600 font-semibold hover:underline transition-colors">iletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
                    </p>

                </motion.div>
            </div>
        </div>
    );
}
