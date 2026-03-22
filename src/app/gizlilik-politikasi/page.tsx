import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Servis Paslanmaz Metal',
  description: 'Servis Paslanmaz Metal Gizlilik Politikası',
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8">Gizlilik Politikası</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p><strong>Servis Paslanmaz Metal İnş. San. ve Tic. Ltd. Şti.</strong> olarak, müşteri verilerinin korunmasına ve kişisel gizliliğe büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi (<code>servispaslanmaz.com</code>) ziyaret ettiğinizde hakkınızda hangi verilerin toplandığı, bu verilerin nasıl kullanıldığı ve korunduğu konusunda sizi bilgilendirmeyi amaçlamaktadır.</p>
            
            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">1. Toplanan Bilgiler</h2>
            <p>Web sitemiz üzerinden doldurduğunuz iletişim formları (ad-soyad, firma adı, telefon numarası, e-posta adresi ve mesaj içeriği) aracılığıyla verileriniz toplanabilir. Bu veriler sadece size daha iyi bir hizmet sunmak, taleplerinizi değerlendirmek ve sizinle iletişime geçmek amacıyla kullanılır.</p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">2. Bilgilerin Kullanımı</h2>
            <p>Formlar aracılığıyla bize ilettiğiniz bilgiler şunlar için kullanılabilir:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Teklif taleplerinize yanıt vermek</li>
              <li>Sipariş ve sevkiyat süreçlerini yönetmek</li>
              <li>Müşteri destek hizmetleri sağlamak</li>
              <li>(Dilerseniz) kampanyalardan sizi haberdar etmek</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">3. Bilgilerin Üçüncü Şahıslarla Paylaşımı</h2>
            <p>Kişisel bilgileriniz, yasal zorunluluklar haricinde hiçbir üçüncü şahıs veya kurumla paylaşılmaz, satılmaz veya kiralanamaz.</p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">4. Çerezler (Cookies)</h2>
            <p>Web sitemiz, ziyaretçi deneyimini analiz etmek ve sitemizi geliştirmek için standart tarayıcı çerezleri kullanabilir. Çerezleri tarayıcı ayarlarınızdan kapatabilirsiniz.</p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">5. İletişim</h2>
            <p>Gizlilik süreçleri hakkında bilgi veya verilerinizin silinmesini talep etmek için bizimle <strong>info@servispaslanmaz.com</strong> adresi üzerinden iletişime geçebilirsiniz.</p>
          </div>
          
          <div className="mt-12 text-sm text-slate-400 border-t border-slate-100 pt-6">
            Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </div>
        </div>
      </div>
    </div>
  );
}
