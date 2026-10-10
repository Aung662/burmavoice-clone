export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
