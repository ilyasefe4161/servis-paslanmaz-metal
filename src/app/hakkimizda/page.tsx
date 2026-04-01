"use client";

import { CheckCircle2, Award, FileText, Target, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function KurumsalPage() {
    const certificates = [
        { title: "ISO 9001:2015", desc: "Kalite Yönetimi" },
        { title: "ISO 14001:2015", desc: "Çevre Yönetimi" },
        { title: "ISO 45001:2018", desc: "İSG Yönetimi" },
        { title: "EN 10204 3.1", desc: "Ürün Belgeleri" },
    ];

    const stats = [
        { icon: Users, label: "Mutlu Müşteri", value: "2.500+" },
        { icon: Target, label: "Hedef Lojistik", value: "%99.8" },
        { icon: Zap, label: "Aynı Gün Teslim", value: "7/24" },
    ];

    const fadeInUp = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

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
                        Hakkımızda
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Kurumsal Kimliğimiz & <br /> Kalite Standartları
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-light"
                    >
                        Sektörün en köklü ve güvenilir paslanmaz çelik tedarikçisi olarak kuruluşumuzdan bugüne dek hıza, stoka ve belge kalitesine yatırım yapıyoruz.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 lg:-mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-32 items-center">

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-[4/5] md:aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white z-10">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700" style={{ backgroundImage: "url('/servis-paslanmaz-metal.png')" }}></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-900/80 to-transparent pointer-events-none"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-6 lg:-bottom-8 right-4 lg:-right-8 bg-white p-6 shadow-2xl rounded-2xl border-l-4 border-red-600 hidden md:block w-64 z-30"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl shrink-0">
                                    <Award className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <div className="font-extrabold text-3xl text-blue-900 mb-1">15+ Yıl</div>
                                    <div className="text-slate-500 text-sm font-medium leading-tight">Güvenilir Tedarik Geçmişi</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 flex flex-col justify-center"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">Vizyonumuz ve Değerlerimiz</motion.h2>
                        <motion.div variants={fadeInUp} className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                <strong className="text-blue-900">Servis Paslanmaz Metal</strong> olarak, sanayinin vazgeçilmez girdisi olan paslanmaz çelik ürünlerinin lojistiğini ve tedariğini sağlamak amacıyla kurulduk. Hizmet merkezinden ziyade tamamen devasa bir <strong>stokçu kimliğiyle</strong> hareket ediyoruz.
                            </p>
                            <p>
                                Sipariş süreçlerini minimalize ederek, müşterilerimize <strong>en geniş ölçü varyasyonunu</strong>, rekabetçi fiyatlarla ve anında sevkiyat avantajıyla uluslararası piyasalardan sağlıyoruz.
                            </p>
                            <p className="border-l-4 border-red-500 pl-4 py-2 italic font-medium text-slate-700 bg-slate-50">
                                "Sanayicimizin malzeme eksikliğinden dolayı üretiminin durmaması için sadece tedarik değil, güvence sunuyoruz."
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Tonajlı Stok Kapasitesi',
                                'Kendi Lojistik Ağımız',
                                '%100 Sertifikalı Ürün Garantisi',
                                'Kurumsal Fiyatlama',
                            ].map((val, i) => (
                                <div key={i} className="flex items-center text-blue-800 font-semibold bg-white p-3 rounded-lg border border-slate-100 shadow-sm transition-colors hover:border-red-300">
                                    <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center mr-3 shrink-0">
                                        <CheckCircle2 className="text-red-600 h-5 w-5" />
                                    </div>
                                    {val}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-blue-900 rounded-3xl p-10 md:p-16 mb-32 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-red-600/10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-color-dodge pointer-events-none"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 divide-y md:divide-y-0 md:divide-x divide-blue-800">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center text-center pt-8 md:pt-0"
                            >
                                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30">
                                    <stat.icon className="w-8 h-8 text-red-400" />
                                </div>
                                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quality Certificates */}
                <div id="kalite" className="pt-24 pb-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Tescilli Standartlar</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight">Kalite Belgelerimiz</h3>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
                            Avrupa ve diğer global normlara (AISI, EN, DIN) uygun malzemelerimiz, her sevkiyatta elektronik kalite sertifikasıyla birlikte teslim edilir.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {certificates.map((cert, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 text-center group cursor-default"
                            >
                                <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                                    <FileText className="h-8 w-8 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-extrabold text-xl text-blue-900 mb-2">{cert.title}</h3>
                                <p className="text-slate-500 font-medium">{cert.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
