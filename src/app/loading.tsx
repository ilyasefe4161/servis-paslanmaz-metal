export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-blue-950/20 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-red-600 rounded-full animate-spin mb-4"></div>
        <div className="text-blue-900 font-bold tracking-widest uppercase text-xs animate-pulse">Sayfa Yükleniyor</div>
      </div>
    </div>
  );
}
