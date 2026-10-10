export const categories = [
  { name: 'Politics', slug: 'politics', description: 'Policy, governance and the decisions shaping the country.' },
  { name: 'Business', slug: 'business', description: 'Markets, investment and enterprise stories driving growth.' },
  { name: 'Culture', slug: 'culture', description: 'Arts, identity and the creative life around us.' },
  { name: 'Opinion', slug: 'opinion', description: 'Long-form perspective and commentary from our editors.' },
  { name: 'Analysis', slug: 'analysis', description: 'Explainers and deeper context beyond the headlines.' },
  { name: 'World', slug: 'world', description: 'Regional and international developments with local impact.' },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'labor-market-recovery-gains-momentum',
    title: 'Labor market recovery gains momentum as hiring expands across key sectors',
    excerpt: 'Employers in manufacturing, logistics and consumer services are expanding payrolls as higher demand returns to several parts of the economy.',
    category: 'Business',
    author: 'Nyan Aye',
    date: 'October 10, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    tags: ['employment', 'economy', 'labor'],
    content: '<p>Employment data released in the past month has signaled a modest but encouraging rebound across several critical industries.</p><h2>What is changing</h2><p>Manufacturing plants and logistics groups are hiring again as regional shipments improve and demand stabilizes.</p><blockquote>“The hiring trend is still uneven, but it is moving in the right direction,” one analyst said.</blockquote><p>Observers say the next step is to support workforce training and foster more productive investment in the private sector.</p>'
  },
  {
    slug: 'new-transport-routes-open-up-regions',
    title: 'New transport routes open up access to remote towns and border communities',
    excerpt: 'Authorities say the new linkages are expected to reduce travel times and help local trade expand across the region.',
    category: 'Analysis',
    author: 'Moe Thu',
    date: 'October 9, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    tags: ['infrastructure', 'logistics', 'trade'],
    content: '<p>Regional officials opened a new phase of transport connectivity this week, promising faster travel for passengers and goods.</p><h2>Why it matters</h2><p>For rural communities, the new route means shorter trips to market, better service access and more reliable movement of agricultural products.</p>'
  },
  {
    slug: 'arts-festival-celebrates-local-storytelling',
    title: 'Arts festival celebrates local storytelling and cultural memory',
    excerpt: 'A growing wave of community organizers is turning public spaces into venues for performance, film and oral history.',
    category: 'Culture',
    author: 'Khine Zar',
    date: 'October 8, 2026',
    readTime: '3 min read',
    coverImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    tags: ['arts', 'culture', 'community'],
    content: '<p>From music performances to short films, this year’s arts festival brought new attention to local stories told by creators who live and work in the region.</p><p>Organizers also held workshops for young storytellers, helping preserve memory and expand public dialogue.</p>'
  },
  {
    slug: 'city-council-approves-public-transport-plan',
    title: 'City council approves a new public transport plan to ease congestion',
    excerpt: 'Transit officials will expand bus corridors and introduce timed services in densely crowded districts.',
    category: 'Politics',
    author: 'Aye Min',
    date: 'October 7, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    tags: ['transport', 'government', 'cities'],
    content: '<p>A council vote this week approved a phased plan to improve public transit capacity in the urban core.</p><h2>What officials said</h2><p>Officials described the project as part of a wider effort to reduce congestion and improve access for commuters.</p>'
  },
  {
    slug: 'digital-cashless-payments-expand-rural-banks',
    title: 'Digital and cashless payments expand in rural bank branches',
    excerpt: 'Financial institutions are introducing mobile-first tools aimed at village traders and service providers.',
    category: 'Business',
    author: 'Zaw Htet',
    date: 'October 6, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    tags: ['finance', 'technology', 'rural'],
    content: '<p>Rural financial hubs are slowly integrating digital payments as banks upgrade infrastructure for local entrepreneurs.</p><p>Industry watchers say the shift could reduce cash handling costs and improve recordkeeping in daily commerce.</p>'
  },
  {
    slug: 'community-radio-voices-still-pulse-through-rural-areas',
    title: 'Community radio networks continue to shape public conversation in rural areas',
    excerpt: 'Local broadcasters are filling critical information gaps with updates on agriculture, health and civic issues.',
    category: 'Opinion',
    author: 'Mya Mya',
    date: 'October 5, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
    tags: ['media', 'community', 'radio'],
    content: '<p>For many communities, community radio remains one of the clearest channels for timely information and local accountability.</p><p>By broadcasting in local dialects and covering practical concerns, stations are becoming indispensable platforms for daily life.</p>'
  },
  {
    slug: 'regional-elections-lure-strong-turnout',
    title: 'Regional elections draw strong turnout as civic interest rises',
    excerpt: 'Observers say higher participation reflects a sharper focus on local governance and service delivery.',
    category: 'Politics',
    author: 'Soe Lin',
    date: 'October 4, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    tags: ['election', 'governance', 'civic'],
    content: '<p>Local election officials reported high engagement in several regions, with turnout surpassing expectations in some urban and peri-urban districts.</p><h2>Signals for reform</h2><p>Analysts say the stronger participation shows citizens are paying closer attention to accountability and service quality.</p>'
  },
  {
    slug: 'young-designers-demand-space-for-creative-work',
    title: 'Young designers demand more space and funding for creative work',
    excerpt: 'Students and early-career creators are pushing for dedicated studios, mentorship and market access.',
    category: 'Culture',
    author: 'Lwin Lwin',
    date: 'October 3, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    tags: ['design', 'creativity', 'youth'],
    content: '<p>Creative practitioners across visual design, fashion and digital media said the ecosystem still lacks the infrastructure needed to scale their work.</p><p>Youth groups are calling for artist residencies, studios and stronger public procurement programs.</p>'
  },
  {
    slug: 'mining-dispute-sparks-local-questions-over-accountability',
    title: 'Mining dispute sparks local questions over accountability and land use',
    excerpt: 'Residents say they need clearer processes, stronger protections and better transparency before extraction expands.',
    category: 'World',
    author: 'Khin Hla',
    date: 'October 2, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    tags: ['mining', 'environment', 'governance'],
    content: '<p>Community complaints over planned extraction projects continue to mount, prompting questions about land rights and local oversight.</p><p>Rights groups say stronger consultation must be built into both permitting and enforcement.</p>'
  },
];

export const featuredPost = posts[0];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(slug: string) {
  return posts.filter((post) => post.category.toLowerCase() === slug.toLowerCase());
}

export function getPostsByTag(tag: string) {
  return posts.filter((post) => post.tags.some((item) => item.toLowerCase() === tag.toLowerCase()));
}
