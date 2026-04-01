"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Truck, PackageCheck, Factory, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    { name: "Paslanmaz Çelik Sac", href: "/urunler/paslanmaz-celik-sac", desc: "Soğuk ve sıcak haddelenmiş plakalar", image: "/products/paslanmaz-sac.jpg" },
    { name: "Paslanmaz Çelik Boru", href: "/urunler/paslanmaz-celik-boru", desc: "Dikişli, dikişsiz ve dekoratif", image: "/products/paslanmaz-boru.jpg" },
    { name: "Paslanmaz Çelik Profil", href: "/urunler/paslanmaz-celik-profil", desc: "Kare ve dikdörtgen yapı profilleri", image: "/products/paslanmaz-profil.jpg" },
    { name: "Paslanmaz Çelik Çubuk", href: "/urunler/paslanmaz-celik-cubuk", desc: "Yuvarlak, kare ve altıgen çubuklar", image: "/products/paslanmaz-cubuk.jpg" },
    { name: "Paslanmaz Çelik Lama", href: "/urunler/paslanmaz-celik-lama", desc: "Endüstriyel yassı çubuklar", image: "/products/paslanmaz-lama.jpg" },
    { name: "Paslanmaz Çelik Köşebent", href: "/urunler/paslanmaz-celik-kosebent", desc: "Eşit kenar L profiller", image: "/products/paslanmaz-kosebent.jpg" },
    { name: "Paslanmaz Çelik Fittings", href: "/urunler/paslanmaz-celik-fittings", desc: "Yüksek basınç bağlantı elemanları", image: "/products/paslanmaz-fittings.jpg" },
  ];

  const features = [
    {
      title: "Geniş Stok Gücü",
      description: "Tüm paslanmaz çelik ihtiyaçlarınız için yüksek tonajlı, anında teslime hazır binlerce tonluk stok hacmi.",
      icon: PackageCheck,
    },
    {
      title: "Uluslararası Sertifika",
      description: "Sattığımız tüm ürünler global üreticilerden (AISI 304, 316, 430) tedarik edilir ve 3.1 kalite sertifikalıdır.",
      icon: ShieldCheck,
    },
    {
      title: "Kusursuz Lojistik",
      description: "Müşterilerimizin üretim hattı durmasın diye, siparişleriniz aynı gün hazırlanıp sevk edilir.",
      icon: Truck,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-red-900/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563823292686-353782ce74df?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] z-0"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[100px] z-0"
        />

        <div className="container relative z-20 mx-auto px-4 pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-red-200 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              B2B Endüstriyel Çelik Tedarikçisi
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]">
              Gücünüze Güç Katan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                Paslanmaz Çelik Stoğu
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              Sadece birinci sınıf paslanmaz ürünleri tedarik ediyor, firmanızın üretim hızına stoktan anında teslimat ile destek oluyoruz. İşinize değer katan kesintisiz tedarik zinciri.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-red-600 hover:bg-red-500 text-white border-0 shadow-lg shadow-red-600/30 h-14 px-8 text-lg w-full sm:w-auto transition-transform hover:-translate-y-1">
                <Link href="/urunler" className="flex items-center">
                  Geniş Stoğu İncele <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass h-14 px-8 text-lg w-full sm:w-auto text-slate-700 hover:bg-white hover:text-blue-900 border-white/20 transition-transform hover:-translate-y-1">
                <Link href="/iletisim">Hemen Teklif İste</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8"
            >
              {[
                { label: 'Yıllık Tecrübe', value: '15+' },
                { label: 'Ürün Çeşidi', value: '1000+' },
                { label: 'Kalite', value: 'AISI' },
                { label: 'Teslimat', value: '24s' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUALITY STRIP */}
      <section className="bg-red-600 py-6 border-y border-red-700 shadow-inner relative z-30 overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-red-100/80 font-bold text-lg md:text-2xl tracking-wider uppercase">
            {['AISI 201', 'AISI 304', 'AISI 304L', 'AISI 316', 'AISI 316L', 'AISI 310S', 'AISI 430'].map((grade, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: "#fff" }}
                className="flex items-center whitespace-nowrap cursor-default transition-colors"
              >
                <ShieldCheck className="w-5 h-5 mr-2 opacity-50" />
                {grade}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. CATEGORIES GRID (Bento Box Style) */}
      <section className="py-24 relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Zengin Çeşitlilik</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight">Ürünlerimiz</h3>
              <p className="text-slate-500 mt-4 text-lg">Makine, gıda, denizcilik ve inşaat sektörleri için gerekli tüm paslanmaz malzemeleri depolarımızda hazır bulunduruyoruz.</p>
            </div>
            <Link href="/urunler" className="flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors group">
              Tüm Ürünleri Gör <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -8 }}>
                <Link href={cat.href} className="group flex flex-col h-full">
                  <Card className="flex-1 bg-white border-0 shadow-lg transition-all duration-500 overflow-hidden relative min-h-[320px] flex items-end rounded-3xl">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-red-950 group-hover:via-red-900/40"></div>
                    <div className="p-8 relative z-10 w-full text-left">
                      <h4 className="text-2xl font-extrabold text-white mb-2">{cat.name}</h4>
                      <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2">
                        <p className="text-slate-200 text-sm leading-relaxed">{cat.desc}</p>
                      </div>

                      <div className="mt-4 flex items-center text-sm font-bold text-red-400 group-hover:text-red-300 transition-colors">
                        Ürünü İncele <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY US (Modern Cards) */}
      <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Tedarikçi Seçiminiz</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight">Neden Servis Paslanmaz Metal?</h3>
            <p className="text-slate-500 mt-4 text-lg">Sadece ürün satmıyor, operasyonunuzun aksamaması için tedarik güvenliği sağlıyoruz.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. BIG CTA SECTION */}
      <section className="relative py-24 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[120px]"
        />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 max-w-4xl text-center z-10"
        >
          <span className="inline-block p-4 rounded-full bg-red-500/10 mb-6">
            <Factory className="w-8 h-8 text-red-400" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Projeniz İçin Fiyat Alın</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
            İhtiyacınız olan ürünleri, malzeme kalitesini ve ölçüleri bizimle paylaşın. Dakikalar içinde rekabetçi teklifimizi sunalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 h-14 px-10 text-lg font-bold shadow-xl transition-transform hover:-translate-y-1">
              <Link href="/iletisim">Hemen Forma Git</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-slate-100 h-14 px-10 text-lg font-bold shadow-xl transition-transform hover:-translate-y-1">
              <a href="tel:+902623355878">Bizi Arayın</a>
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
