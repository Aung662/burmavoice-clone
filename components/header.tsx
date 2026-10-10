import Link from 'next/link';
import { categories } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-[#f8f4ef]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-4">
            <span className="rounded-md bg-red-700 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white">
              Breaking
            </span>
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
              BURMAVOICE
            </Link>
          </div>

          <nav className="hidden items-center gap-5 lg:flex">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700 transition hover:text-red-700"
              >
                {category.name}
              </Link>
            ))}
            <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700 transition hover:text-red-700">
              About
            </Link>
            <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700 transition hover:text-red-700">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/admin" className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-red-200 hover:text-red-700">
              Admin
            </Link>
            <Link href="/search" className="rounded-full bg-red-700 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
