import Link from 'next/link';
import type { Post } from '@/lib/data';

export function HeroSection({ post }: { post: Post }) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_0.8fr] lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-soft">
          <img src={post.coverImage} alt={post.title} className="h-[420px] w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full bg-brand-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
            {post.category}
          </div>

          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            <Link href={`/article/${post.slug}`} className="hover:text-brand-200">
              {post.title}
            </Link>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{post.excerpt}</p>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
