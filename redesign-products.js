const fs = require('fs');
const path = require('path');

const contentDict = {
    sac: {
        title: "Paslanmaz Sac",
        tagline: "Endüstrinin her alanında kullanılan dayanıklı ve estetik levhalar.",
        desc1: "Paslanmaz sac ürünlerimiz, yüksek korozyon direnci ve optimum şekillendirilebilirlik özellikleri sayesinde mutfak eşyalarından ağır sanayi tesislerine kadar her alanda güvenle kullanılmaktadır.",
        desc2: "Soğuk ve sıcak haddelenmiş (CR / HR) sac alternatiflerimiz, 2B, BA, 4N (Taşlı) gibi farklı yüzey kalitelerinde stoklarımızda her an mevcuttur. Rulodan boya kesim hizmetimizle ölçü firenizi sıfıra indiriyoruz.",
        features: ["Yüksek Korozyon Direnci", "Kolay Şekillendirme ve Kaynak", "2B, BA, SB, HL Yüzey Seçenekleri"],
        img: "paslanmaz-sac.jpg"
    },
    boru: {
        title: "Paslanmaz Boru",
        tagline: "Yüksek basınca ve zorlu koşullara dayanıklı endüstriyel çözüm.",
        desc1: "Dikişli ve çekme (dikişsiz) paslanmaz borularımız, petro-kimya tesisleri, enerji santralleri ve gıda üretim hatları gibi kritik süreçlerde sorunsuz sıvı ve gaz transferi sağlar.",
        desc2: "TIG veya HF kaynak yöntemleriyle üretilen dikişli borularımız dekoratif beklentileri karşılarken, yüksek güvenlik gerektiren prosesler için çekme boru tedariğimiz de bulunmaktadır.",
        features: ["Dikişsiz ve Dikişli Seçenekler", "Yüksek Basınç Dayanımı", "Mükemmel Akışkan İletimi"],
        img: "paslanmaz-boru.jpg"
    },
    profil: {
        title: "Paslanmaz Profil",
        tagline: "Yapısal bütünlük, estetik ve uzun ömür bir arada.",
        desc1: "Kare ve dikdörtgen kesitli paslanmaz çelik profillerimiz, özellikle mimari tasarımlarda, taşıyıcı konstrüksiyonlarda ve makine şaselerinde benzersiz bir mukavemet sunar.",
        desc2: "Özel haddetme ve kaynak teknolojisiyle üretilen profillerimiz, kusursuz köşe açılarına ve homojen yüzey kalitesine sahiptir. Mat veya polisajlı ayna yüzey seçenekleriyle stokta.",
        features: ["Kare ve Dikdörtgen Kesit", "Mimari Estetik Yüzey (Polisajlı)", "Yüksek Yapısal Mukavemet"],
        img: "paslanmaz-profil.jpg"
    },
    kosebent: {
        title: "Paslanmaz Köşebent",
        tagline: "L kesitiyle birleştirme ve güçlendirme projelerinizin temeli.",
        desc1: "L formundaki paslanmaz köşebentlerimiz, yapılar arası bağlantılarda, köşelerin desteklenmesinde ve taşıyıcı iskeletlerde maksimum dayanıklılık sağlar.",
        desc2: "Sıcak haddeleme veya büküm yoluyla elde edilen bu ürünler, özellikle marin, kimya ve asit sanayisinde korozyona karşı üst düzey bir savunma hattı oluşturur. Özel kesim imkanıyla her projeye uyar.",
        features: ["L Formunda Kusursuz Gönye", "Yüksek Korozyon ve Asit Direnci", "Kolay Kaynaklanabilirlik"],
        img: "paslanmaz-kosebent.jpg"
    },
    lama: {
        title: "Paslanmaz Lama",
        tagline: "Düzlemsel sağlamlık ve sınırsız işleme potansiyeli.",
        desc1: "Dikdörtgen şeklindeki paslanmaz çubuklar olarak bilinen lamalar, talaşlı imalat, endüstriyel mutfak ekipmanları ve süsleme sanayisinin vazgeçilmez temel yapı taşlarındandır.",
        desc2: "Slit (dilme) lama ve sıcak haddelenmiş gerçek lama seçeneklerimiz, tam otomatik testerelerimizde projelerinize uygun ölçülerde firesiz olarak kesilmektedir.",
        features: ["Hassas Kesim Ölçüleri", "Talaşlı İmalata Uygun", "Sıcak Hadde ve Kesme Alternatifleri"],
        img: "paslanmaz-lama.jpg"
    },
    fittings: {
        title: "Paslanmaz Fittings",
        tagline: "Tesisat hatlarınızda sıfır sızıntı, tam uyum.",
        desc1: "Dirsek, T-parçası, redüksiyon, flanş, yaka ve rakor gibi tüm bağlantı elemanları (fittings) basınçlı boru hatlarının montajında kilit rol oynar.",
        desc2: "Dişli veya kaynaklı bağlantı tipleriyle, sızdırmazlık gerektiren gıda, kimya ve ilaç sanayisinde en yüksek kalite standartlarına uygun normlarda (ISO, DIN, ASME) stoklanmaktadır.",
        features: ["Sızdırmaz Kesin Çözüm", "Dişli ve Kaynaklı Modeller", "Uluslararası Flanş Normları"],
        img: "paslanmaz-fittings.jpg"
    }
};

const dirs = Object.keys(contentDict);
dirs.forEach(dir => {
    const file = path.join(__dirname, 'src/app/urunler', dir, 'page.tsx');
    if (fs.existsSync(file)) {
        const raw = fs.readFileSync(file, 'utf8');

        // Split on the 'return (' to preserve all data arrays and imports above it
        const parts = raw.split(/return\s*\(/);
        if (parts.length < 2) return;

        let preReturn = parts[0];
        const data = contentDict[dir];

        // Automatically inject required library imports if not present
        if (!preReturn.includes('from "framer-motion"')) {
            preReturn = `import { motion } from "framer-motion";\nimport { Layers, ShieldCheck, Ruler } from "lucide-react";\n` + preReturn;
        }

        // Some components might lack Building2 or other imports, but since we are redefining the layout with Layers, ShieldCheck, Ruler, we inject them globally

        const newReturn = `
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* HER0 BANNER */}
            <div className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0">
                    <img src="/products/${data.img}" alt="${data.title}" className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 mt-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-300 mb-6 tracking-wide">
                            B2B Endüstriyel Tedarik
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">${data.title}</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            ${data.tagline}
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
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Ürün Genel Bakış</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>${data.desc1}</p>
                                <p>${data.desc2}</p>
                            </div>
                            
                            <div className="mt-10 grid gap-4">
                                ${data.features.map(f => `
                                <div className="flex items-center text-slate-800 font-bold bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                                    <span>${f}</span>
                                </div>
                                `).join('')}
                            </div>
                            
                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-bold shadow-xl shadow-blue-600/20 rounded-xl">
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>
                            
                            {/* Main Image */}
                            <div className="relative group rounded-3xl shadow-2xl overflow-hidden border border-slate-100 aspect-square md:aspect-[4/3] bg-white">
                                <img src="/products/${data.img}" alt="${data.title}" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 animate-fade-in-up stagger-3">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Garanti Kapsamı</div>
                                    <div className="font-extrabold text-slate-900 text-lg">100% Sertifikalı</div>
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
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                           <Ruler className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Teknik Ölçü ve Ağırlık Tablosu</h2>
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
`;

        fs.writeFileSync(file, preReturn + "return (" + newReturn);
        console.log(`Priceless layout injected into: ${dir}`);
    }
});
