import Link from 'next/link';
import { posts } from '@/lib/data';

export default function SearchPage() {
  const recent = posts.slice(0, 6);

  return (
    <div className="bg-stone-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            BURMAVOICE
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Search articles</label>
          <input placeholder="Search breaking news, analysis, culture..." className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base" />
        </div>

        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-black tracking-tight text-slate-900">Popular stories</h2>
          <div className="space-y-4">
            {recent.map((post) => (
              <Link key={post.slug} href={`/article/${post.slug}`} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-red-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">{post.category}</p>
                    <h3 className="mt-2 text-xl font-black text-slate-900">{post.title}</h3>
                  </div>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
