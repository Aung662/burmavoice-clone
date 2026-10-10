import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getPostsByCategory } from '@/lib/data';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const items = getPostsByCategory(params.slug);

  if (!items.length) {
    notFound();
  }

  const category = categories.find((entry) => entry.slug === params.slug)?.name || params.slug;

  return (
    <div className="bg-stone-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            BURMAVOICE
          </Link>
          <nav className="hidden gap-5 text-sm font-semibold uppercase text-slate-700 lg:flex">
            {categories.map((entry) => (
              <Link key={entry.slug} href={`/category/${entry.slug}`}>
                {entry.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Section</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">{category}</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <img src={post.coverImage} alt={post.title} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">
                  {post.category}
                </div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  <Link href={`/article/${post.slug}`} className="hover:text-red-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
