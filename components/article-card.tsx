import Link from 'next/link';
import type { Post } from '@/lib/data';

export function ArticleCard({ post, compact = false }: { post: Post; compact?: boolean }) {
  return (
    <article className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft ${compact ? 'h-full' : ''}`}>
      <img src={post.coverImage} alt={post.title} className={`w-full object-cover ${compact ? 'h-48' : 'h-56'}`} />

      <div className="p-5">
        <div className="mb-3 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">
          {post.category}
        </div>

        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-black tracking-tight text-slate-900`}>
          <Link href={`/article/${post.slug}`} className="hover:text-brand-700">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </article>
  );
}
