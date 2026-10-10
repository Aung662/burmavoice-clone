import Link from 'next/link';
import { categories } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-brand-700 px-3 py-1 text-xs font-black uppercase tracking-[0.25em] text-white">
              Breaking
            </div>
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
              BURMAVOICE
            </Link>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-brand-700">
                {category.name}
              </Link>
            ))}
            <Link href="/about" className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-brand-700">
              About
            </Link>
            <Link href="/contact" className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-brand-700">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/admin" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700">
              Admin
            </Link>
            <Link href="/search" className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
