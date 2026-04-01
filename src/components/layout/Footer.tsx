import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Factory, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-blue-950 text-slate-300 relative overflow-hidden">
            {/* Premium Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-cyan-400 to-rose-700"></div>

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-700/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container relative mx-auto px-4 py-20 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-flex items-center group bg-white rounded-2xl p-4 shadow-xl shadow-red-500/10 transition-transform hover:scale-105 w-fit">
                            <Image
                                src="/logo.png"
                                alt="Servis Paslanmaz Logo"
                                width={400}
                                height={150}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed pr-6">
                            Modern sanayinin yüksek kaliteli paslanmaz çelik ihtiyaçları için geniş stok ağı, kusursuz lojistik ve uluslararası sertifikalı malzemelerle hizmetinizdeyiz.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center text-xs font-semibold bg-blue-900 px-3 py-1.5 rounded-full border border-blue-800">
                                <ShieldCheck className="w-4 h-4 mr-2 text-red-400" /> %100 Orijinal
                            </div>
                            <div className="flex items-center text-xs font-semibold bg-blue-900 px-3 py-1.5 rounded-full border border-blue-800">
                                <Factory className="w-4 h-4 mr-2 text-red-400" /> B2B Çözümler
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Ürünlerimiz</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "Paslanmaz Çelik Sac", path: "/urunler/paslanmaz-celik-sac" },
                                { name: "Paslanmaz Çelik Boru", path: "/urunler/paslanmaz-celik-boru" },
                                { name: "Paslanmaz Çelik Profil", path: "/urunler/paslanmaz-celik-profil" },
                                { name: "Paslanmaz Çelik Çubuk", path: "/urunler/paslanmaz-celik-cubuk" },
                                { name: "Paslanmaz Çelik Lama", path: "/urunler/paslanmaz-celik-lama" },
                                { name: "Paslanmaz Çelik Köşebent", path: "/urunler/paslanmaz-celik-kosebent" },
                                { name: "Paslanmaz Çelik Fittings", path: "/urunler/paslanmaz-celik-fittings" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className="group flex items-center text-slate-400 hover:text-white transition-colors">
                                        <span className="w-0 h-px bg-red-500 mr-0 transition-all group-hover:w-3 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Kurumsal</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/hakkimizda" className="text-slate-400 hover:text-white transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/hakkimizda#kalite" className="text-slate-400 hover:text-white transition-colors">Kalite Belgeleri</Link></li>
                            <li><Link href="/iletisim" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                İletişim <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-red-400" />
                            </Link></li>
                            <li><Link href="/iletisim#teklif" className="text-red-400 font-medium hover:text-red-300 transition-colors">Teklif İsteyin</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-4">
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">İletişim Bilgileri</h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start group cursor-default">
                                <div className="mt-1 w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center border border-blue-800 mr-4 shrink-0 transition-colors group-hover:border-red-500/50 group-hover:bg-red-900/20">
                                    <MapPin className="h-4 w-4 text-red-400" />
                                </div>
                                <span className="text-slate-400 leading-relaxed">
                                    Sanayi Mahallesi, İzmit Sanayi Sitesi<br />
                                    9. Cadde, 303 Blok, No: 12<br />
                                    İzmit / Kocaeli / Türkiye
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center border border-blue-800 mr-4 shrink-0 transition-colors group-hover:border-red-500/50 group-hover:bg-red-900/20">
                                    <Phone className="h-4 w-4 text-red-400" />
                                </div>
                                <a href="tel:+902623355878" className="text-slate-400 hover:text-white font-medium transition-colors text-base">
                                    +90 262 335 58 78
                                </a>
                            </li>
                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center border border-blue-800 mr-4 shrink-0 transition-colors group-hover:border-red-500/50 group-hover:bg-red-900/20">
                                    <Mail className="h-4 w-4 text-red-400" />
                                </div>
                                <a href="mailto:info@servispaslanmaz.com" className="text-slate-400 hover:text-white transition-colors">
                                    info@servispaslanmaz.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="mt-8 flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center border border-blue-800 hover:border-red-500 hover:bg-red-600 transition-colors text-slate-400 hover:text-white">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center border border-blue-800 hover:border-red-500 hover:bg-red-600 transition-colors text-slate-400 hover:text-white">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center border border-blue-800 hover:border-red-500 hover:bg-red-600 transition-colors text-slate-400 hover:text-white">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-blue-800/60 bg-blue-950">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
                    <p>© {new Date().getFullYear()} Servis Paslanmaz Metal İnş. San. Ve Tic. Ltd. Şti. Tüm hakları saklıdır. <a href="https://sartechsoftware.com.tr" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Sartech Yazılım</a> tarafından yapılmıştır.</p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        <Link href="/gizlilik-politikasi" className="hover:text-slate-300 transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kullanim-sartlari" className="hover:text-slate-300 transition-colors">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
