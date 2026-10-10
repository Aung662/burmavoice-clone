import Link from 'next/link';
import { categories, featuredPost, posts } from '@/lib/data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ArticleCard } from '@/components/article-card';

export default function HomePage() {
  const topStories = posts.slice(0, 4);
  const latest = posts.slice(4, 8);
  const quickReads = posts.slice(0, 3);

  return (
    <div className="bg-[#f3efe9] text-slate-900 antialiased">
      <Header />

      <main>
        <HeroSection post={featuredPost} />

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-700">Live report</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Top stories</h2>
            </div>
            <Link href="/search" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:text-red-700">
              View all
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.7fr_0.85fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {topStories.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-xl font-black tracking-tight text-slate-900">Breaking</h3>
                <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                  Live
                </span>
              </div>

              <div className="space-y-4">
                {quickReads.map((post) => (
                  <Link key={post.slug} href={`/article/${post.slug}`} className="block border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">{post.category}</p>
                    <h4 className="text-lg font-black leading-tight text-slate-900 transition hover:text-red-700">{post.title}</h4>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-[#111827] text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between border-b border-slate-700 pb-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">Coverage</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">Sections</h2>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">Reportage</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-500 hover:bg-slate-800"
                >
                  <div className="mb-4 inline-flex rounded-full bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-red-300">
                    {category.slug}
                  </div>
                  <h3 className="mb-2 text-2xl font-black tracking-tight">{category.name}</h3>
                  <p className="text-sm leading-6 text-slate-300">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-7 flex items-center justify-between border-b border-slate-300 pb-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-700">Analysis</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Latest analysis</h2>
            </div>
            <Link href="/search" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:text-red-700">
              Archive
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {latest.map((post) => (
              <ArticleCard key={post.slug} post={post} compact />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
