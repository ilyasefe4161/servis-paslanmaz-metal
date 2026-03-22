import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | Servis Paslanmaz Metal',
  description: 'Servis Paslanmaz Metal Kullanım Şartları',
};

export default function KullanimSartlariPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8">Kullanım Şartları</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>Bu web sitesini (<code>servispaslanmaz.com</code>) ziyaret ederek, kullanıma ilişkin aşağıdaki şartları ve koşulları kabul etmiş sayılırsınız.</p>
            
            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Telif Hakları ve Fikri Mülkiyet</h2>
            <p>Bu sitede yer alan tüm metin, görsel, logo, grafik ve site içi teknik donanım, <strong>Servis Paslanmaz Metal İnş. San. ve Tic. Ltd. Şti.</strong> veya içerik sağlayıcılarına aittir. Önceden yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.</p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Sorumluluk Reddi</h2>
            <p>Sitemizde bulunan ürün bilgileri, ölçü ve ağırlık tabloları bilgilendirme amaçlıdır. Ticari sipariş süreçlerinde firmamızla yapacağınız nihai sözleşme esastır. Yazım hatalarından doğacak yanlışlıklarda bağlayıcılık firmamız aleyhine kullanılamaz.</p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Değişiklik Hakkı</h2>
            <p>Servis Paslanmaz Metal, bu web sitesindeki kampanya, ürün özellikleri, veya kullanım şartlarını önceden haber vermeksizin istediği zaman değiştirme hakkını saklı tutar.</p>

          </div>
          
          <div className="mt-12 text-sm text-slate-400 border-t border-slate-100 pt-6">
            Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </div>
        </div>
      </div>
    </div>
  );
}
