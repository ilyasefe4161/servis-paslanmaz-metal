"use client";

import { CheckCircle2, Award, FileText, Target, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function KurumsalPage() {
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
                        Paslanmaz Çelik
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Paslanmaz Çelik
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-light"
                    >
                        Sektörün en köklü ve güvenilir paslanmaz çelik tedarikçisi olarak kuruluşumuzdan bugüne dek hıza, stoğa ve belge kalitesine yatırım yapıyoruz.
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
                            <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700" style={{ backgroundImage: "url('/products/paslanmaz-celik.jpg')" }}></div>
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
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Paslanmaz Çelik</motion.h2>
                        <motion.div variants={fadeInUp} className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Paslanmaz çelik %10,5 ve üzeri oranda krom, %0,12 ve altında karbon içeren ve bunun sonucu olarak korozyona karşı dayanıklılık sağlayan, kendini onaran bir yüzey tabakası oluşturan demir alaşımıdır.
                            </p>
                            <p>
                                Paslanmaz çelik, 20. Yüzyıl başında, esas olarak kimya endüstrisindeki uygulamalarda ihtiyaç duyulan yüksek korozyon direnci ihtiyacı üzerine geliştirilmiştir. Günümüzde ise, çok değişik şartlara cevap verebilen yüzyirmiden fazla türün elde edilebilmesi söz konusudur. Paslanmaz, gıda endüstrisinden makine üretimine, mimari inşaat uygulamalarından evlerimizin mutfaklarındaki aksesuarlara kadar geniş bir alanda kullanılmaktadır.
                                Paslanmaz çeliğin, korozyona karşı dayanıklılığı, uzun ömürlü olması, sağlam yapısı her geçen gün hayatın  daha çok alanında kullanılması sonucunu da beraberinde getirmektedir.
                            </p>
                            <p>
                                Paslanmaz çelik çevre ile ilgili de çok iyi bir şöhrete sahiptir. Onun geri dönüşüm niteliği olağanüstü yüksektir. En dayanıklı metal malzemelerden biri olan paslanmaz çelik sürdürülebilirlik açısından üretime katkıda bulunur. Korozyon direncinden kaynaklanan nötr özelliği, paslanmaz çeliği bugün hemen hemen tüm üretim sektörlerinde yaygın ve kullanılabilir bir malzeme yapmıştır.
                                Paslanmaz çelik başlıca 4 gruba ayrılır:
                            </p>
                            <p>
                                ÖSTENİTİK
                                Paslanmaz çeliğin en çok kullanılan türüdür. Bu grup en çok kullanılan 304, 316 kalite çelikleri ve yüksek alaşımlı 310S kalite çelikleri ihtiva eder. İçeriğinde minimum % 7 oranında bulunan nikel çelik yapıyı tamamen östenitik yapar. Nikel, malzemeye süneklik, geniş sıcaklık aralığında çalışma olasılığı, manyetik olmayan özellikleri ve iyi kaynaklanabilirlik kazandırır.
                            </p>
                            <p>
                                FERRİTİK
                                Bunlar düşük karbonlu ve % 12 - % 18 arası krom içeren paslanmaz çelik türüdür. En çok kullanılan türü 430 kalite çeliklerdir. Yapı itibariyle yumuşak çeliklere benzerler, ancak korozyon dayanımları yüksektir. İçerisinde nikel çelik bulunmaz, bu nedenle aynı zamanda manyetik özelliğe sahiptirler.
                            </p>
                            <p>
                                ÖSTENİTİK-FERRİTİK (Duplex)
                                Östenitik ve ferritik fazlardan oluşan içyapısı nedeniyle dubleks paslanmaz çelik adını alırlar.Alaşımda yüksek oranda krom (% 18 - 28) ve orta miktarda nikel (% 4,5 - 8) içeren çeliklerdir. İçerikte % 8 nikel olması tam östenitik yapı için yetersizdir. Dubleks yapısı hem kuvvet hem de süneklik sağlar.
                            </p>
                            <p>
                                MARTENSİTİK
                                % 0,1 karbon ve % 11-13 arasında krom ihtiva eder. Orta derece korozyon dayanımına sahiptirler. Isıl işlem uygulanabilir ve sertlikler elde edilebilir.
                            </p>
                            <p>
                                Sipariş süreçlerini minimalize ederek, müşterilerimize <strong>en geniş ölçü varyasyonunu</strong>, rekabetçi fiyatlarla ve anında sevkiyat avantajıyla uluslararası piyasalardan sağlıyoruz.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
