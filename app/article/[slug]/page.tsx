import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getPostBySlug, getPostsByCategory, getPostsByTag, posts } from '@/lib/data';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = posts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category || item.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="bg-stone-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            BURMAVOICE
          </Link>
          <nav className="hidden gap-5 text-sm font-semibold uppercase text-slate-700 lg:flex">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
          {post.category}
        </div>

        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{post.title}</h1>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <img src={post.coverImage} alt={post.title} className="mt-8 h-[420px] w-full rounded-2xl object-cover shadow-soft" />

        <article className="article-body mt-8 text-lg leading-8" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
              #{tag}
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="mb-6 text-2xl font-black tracking-tight text-slate-900">More from the report</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/article/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-200">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">{item.category}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
