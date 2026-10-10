import Link from 'next/link';
import { categories } from '@/lib/data';

export default function AdminPage() {
  const stats = [
    ['Published', '128'],
    ['Editors', '14'],
    ['Pending review', '7'],
    ['Newsletter', '18k'],
  ];

  return (
    <div className="bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            BURMAVOICE ADMIN
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
              <p className="mt-3 text-3xl font-black text-slate-900">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">Latest stories</h2>
            <div className="mt-6 space-y-4">
              {['Labor market rebound', 'Regional transit expansion', 'Arts festival returns'].map((story) => (
                <div key={story} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="font-semibold text-slate-800">{story}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">Live</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">Sections</h2>
            <ul className="mt-6 space-y-3">
              {categories.map((category) => (
                <li key={category.slug} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                  <span>{category.name}</span>
                  <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-red-700">active</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
