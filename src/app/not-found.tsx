"use client";

import Link from 'next/link';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-32 pb-24">
      <div className="max-w-xl w-full bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-8 border-4 border-white shadow-xl">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
          
          <h1 className="text-7xl font-extrabold text-blue-900 mb-2 tracking-tighter">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Aradığınız Sayfa Bulunamadı</h2>
          
          <p className="text-slate-500 mb-10 text-lg leading-relaxed">
            Hatalı bir bağlantıya tıklamış olabilir veya aradığınız sayfa yayından kaldırılmış olabilir. Ana sayfaya dönerek ürünlerimizi incelemeye devam edebilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-base font-bold shadow-xl shadow-red-600/20 rounded-xl" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-3" /> Ana Sayfaya Dön
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-3" /> Geri Git
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
