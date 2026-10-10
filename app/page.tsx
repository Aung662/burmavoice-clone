import Link from 'next/link';
import { categories, featuredPost, posts } from '@/lib/data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ArticleCard } from '@/components/article-card';

export default function HomePage() {
  const topStories = posts.slice(0, 4);
  const latest = posts.slice(4, 8);

  return (
    <div className="bg-stone-50 text-slate-900">
      <Header />

      <main>
        <HeroSection post={featuredPost} />

        <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Top Stories</h2>
            <Link href="/search" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
              View all articles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topStories.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Browse Sections</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="mb-4 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-800">
                    {category.slug}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{category.name}</h3>
                  <p className="text-sm leading-6 text-slate-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Latest Analysis</h2>
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
