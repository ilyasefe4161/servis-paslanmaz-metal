"use client";

import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export default function IletisimPage() {
    const fadeInUp = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resultMessage, setResultMessage] = useState<{type: 'success' | 'error' | null, text: string}>({ type: null, text: "" });

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResultMessage({ type: null, text: "" });
        
        try {
            const formData = new FormData(event.currentTarget);
            formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");
            
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResultMessage({ type: 'success', text: "Talebiniz başarıyla iletildi! En kısa sürede dönüş yapacağız." });
                event.currentTarget.reset();
            } else {
                setResultMessage({ type: 'error', text: "Bir hata oluştu: " + data.message });
            }
        } catch (error) {
            setResultMessage({ type: 'error', text: "Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-24">

            {/* Premium Header */}
            <div className="relative bg-blue-950 py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-black z-0"></div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"
                />

                <div className="container relative z-10 mx-auto px-4 mt-8">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        İletişim
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Bizimle İletişime Geçin
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-light"
                    >
                        İhtiyacınız olan ürünleri bildirin, uzman ekibimiz en rekabetçi fiyat ve termal süre ile size dönüş yapsın. Stoklarımız hazır.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        id="teklif"
                        className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Hızlı Teklif Formu</h2>
                        <p className="text-slate-500 mb-8 font-medium">Bize malzeme detaylarınızı bırakın, en geç 30 dakika içerisinde dönüş sağlayalım.</p>

                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Firma Adı / Yetkili</label>
                                    <Input id="name" name="name" required placeholder="Firma A.Ş." className="bg-slate-50 border-slate-200 text-blue-900 h-14 px-4 shadow-sm focus-visible:ring-red-500 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">İletişim Numarası</label>
                                    <Input id="phone" name="phone" type="tel" required placeholder="05XX XXX XX XX" className="bg-slate-50 border-slate-200 text-blue-900 h-14 px-4 shadow-sm focus-visible:ring-red-500 rounded-xl" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700">E-Posta Adresi</label>
                                <Input id="email" name="email" type="email" required placeholder="ornek@firma.com" className="bg-slate-50 border-slate-200 text-blue-900 h-14 px-4 shadow-sm focus-visible:ring-red-500 rounded-xl" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="product" className="text-sm font-semibold text-slate-700">Talep Edilen Ürünler (Ölçü, Kalite ve Miktar)</label>
                                <textarea
                                    id="product"
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full rounded-xl bg-slate-50 border border-slate-200 text-blue-900 placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none p-4 shadow-sm transition-colors"
                                    placeholder="Örn: 304 Kalite 2mm Sac - 5 Plaka, 316 Kalite 40x40x3 Profil - 10 Boy..."
                                ></textarea>
                            </div>

                            {resultMessage.type && (
                                <div className={`p-4 rounded-xl flex items-center gap-3 ${resultMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {resultMessage.type === 'success' ? <CheckCircle2 className="min-w-5 min-h-5 w-5 h-5" /> : null}
                                    <span className="font-medium text-sm">{resultMessage.text}</span>
                                </div>
                            )}

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white h-16 text-lg font-bold transition-all rounded-xl shadow-xl shadow-red-600/20 disabled:opacity-70">
                                    {isSubmitting ? (
                                        <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> İşleniyor...</>
                                    ) : (
                                        <>Talebi Güvenle İlet <Send className="ml-2 w-5 h-5" /></>
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-blue-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center"
                        >
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/20 rounded-full blur-[80px]"></div>

                            <h3 className="text-2xl font-extrabold mb-8 relative z-10">İrtibat ve Konum</h3>

                            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 relative z-10">
                                <motion.div variants={fadeInUp} className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mr-4 shrink-0 group-hover:bg-red-500/30 transition-colors">
                                        <MapPin className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Genel Merkez</h4>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            Sanayi Mahallesi, İzmit Sanayi Sitesi<br />
                                            9. Cadde, 303 Blok, No: 12<br />
                                            İzmit / Kocaeli / Türkiye
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mr-4 shrink-0 group-hover:bg-red-500/30 transition-colors">
                                        <Phone className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Müşteri Hizmetleri</h4>
                                        <a href="tel:+902623355878" className="text-slate-300 hover:text-white transition-colors block mb-1 text-sm font-medium">
                                            +90 262 335 58 78
                                        </a>
                                        <a href="https://wa.me/902623355878" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold flex items-center">
                                            WhatsApp Kurumsal Hattı
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mr-4 shrink-0 group-hover:bg-red-500/30 transition-colors">
                                        <Mail className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">E-Posta</h4>
                                        <a href="mailto:info@servispaslanmaz.com" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                                            info@servispaslanmaz.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-blue-800 border border-slate-700 flex items-center justify-center mr-4 shrink-0">
                                        <Clock className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-300">Mesai Saatleri</h4>
                                        <p className="text-slate-500 text-sm">Hafta İçi: 08:30 - 18:30</p>
                                        <p className="text-slate-500 text-sm">Cumartesi: 09:00 - 14:00</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Premium Map Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-12 bg-slate-200 w-full h-[400px] rounded-3xl overflow-hidden relative shadow-inner border border-slate-100 group cursor-crosshair"
                >
                    <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Istanbul,Turkey&zoom=11&size=1200x500&maptype=roadmap&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:water|element:geometry|color:0x17263c')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-16 h-16 bg-red-600/20 rounded-full animate-ping absolute"></div>
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-red-500/40 border-2 border-white">
                            <MapPin className="text-white w-5 h-5" />
                        </div>
                        <div className="mt-4 bg-blue-900/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-slate-700">
                            <span className="text-white font-bold text-sm">Merkez: İzmit / Kocaeli</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
