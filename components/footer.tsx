import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 text-2xl font-black tracking-tight text-white">BURMAVOICE</div>
          <p className="max-w-xs text-sm leading-6 text-slate-300">
            Independent reporting and analysis on public affairs, economy, culture and everyday life.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">Sections</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/category/politics">Politics</Link></li>
            <li><Link href="/category/business">Business</Link></li>
            <li><Link href="/category/culture">Culture</Link></li>
            <li><Link href="/category/opinion">Opinion</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">Company</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/search">Archive</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400"
            />
            <button className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-400">
        © 2026 BurmaVoice. All rights reserved.
      </div>
    </footer>
  );
}
