import Link from 'next/link';
import { categories } from '@/lib/data';

export default function AboutPage() {
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
        <h1 className="text-4xl font-black tracking-tight text-slate-900">About BurmaVoice</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          BurmaVoice is a digital newsroom focused on regional issues, local accountability and the stories that shape everyday life. We report with context, publish with clarity and keep our editorial standards transparent.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ['Independent', 'A newsroom shaped by fact-checking, context and public accountability.'],
            ['Local', 'Coverage grounded in the realities communities face every day.'],
            ['Context-rich', 'We explain the why behind the headlines and the systems behind the stories.'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
