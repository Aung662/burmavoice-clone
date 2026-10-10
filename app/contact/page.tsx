import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-stone-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            BURMAVOICE
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Contact us</h1>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
            <textarea rows={6} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2" placeholder="Tell us what you are working on" />
          </div>
          <button className="mt-6 rounded-full bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800">
            Send message
          </button>
        </div>
      </main>
    </div>
  );
}
