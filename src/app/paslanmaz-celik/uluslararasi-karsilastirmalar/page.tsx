"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UluslararasiKarsilastirmalarPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24 overflow-hidden">
            {/* Premium Header */}
            <div className="relative bg-blue-950 py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-600/30 rounded-full blur-[100px] pointer-events-none"
                />

                <div className="container relative z-10 mx-auto px-4 mt-8">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Paslanmaz Çelik
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Uluslararası Karşılaştırmalar
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-light"
                    >
                        Paslanmaz çelik standartlarının uluslararası normlardaki karşılıkları ve karşılaştırmalı teknik tabloları.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 lg:-mt-16 relative z-20">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mx-auto max-w-6xl relative overflow-hidden"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight uppercase">Uluslararası Standartların Karşılaştırmaları ve Kimyasal Analizleri</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
                    </div>
                    
                    <div className="relative w-full flex justify-center items-center group">
                        <Image 
                            src="/uluslararasi-karsilastirmalar.png" 
                            alt="Uluslararası Paslanmaz Çelik Karşılaştırmaları" 
                            width={1600} 
                            height={1200}
                             className="w-full h-auto object-contain rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
