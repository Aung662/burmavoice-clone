import Link from 'next/link';
import type { Post } from '@/lib/data';

export function HeroSection({ post }: { post: Post }) {
  return (
    <section className="bg-[#0d1117] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3 border-b border-slate-700 pb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
          <span>Editor’s choice</span>
          <span className="text-red-400">•</span>
          <span>In focus</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.72fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft">
            <img src={post.coverImage} alt={post.title} className="h-[440px] w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full bg-red-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white">
              {post.category}
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-5xl">
              <Link href={`/article/${post.slug}`} className="hover:text-red-300">
                {post.title}
              </Link>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <Link href={`/article/${post.slug}`} className="rounded-full bg-red-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
                Read story
              </Link>
              <Link href="/search" className="rounded-full border border-slate-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-red-500 hover:text-red-300">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
