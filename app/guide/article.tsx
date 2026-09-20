// 가이드 글의 공통 껍데기 — 머리말, 구조화 데이터, 다른 글 링크, 다운로드 유도.
// 글 본문만 각 page.tsx 가 children 으로 넘긴다.
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { GuideCta, GuideFooter, GuideHeader } from './chrome';
import { GUIDES, guideBySlug } from '../../lib/guides';
import { SITE_URL, path } from '../../lib/site';

/** 각 글의 page.tsx 가 그대로 export 하는 메타데이터. */
export function guideMetadata(slug: string): Metadata {
  const g = guideBySlug(slug);
  if (!g) throw new Error(`lib/guides.ts 에 없는 slug: ${slug}`);
  const url = `${SITE_URL}guide/${g.slug}/`;
  return {
    title: `${g.seoTitle} | Brefly`,
    description: g.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      url,
      siteName: 'Brefly',
      title: g.seoTitle,
      description: g.description,
      images: [{ url: `${SITE_URL}og.png`, width: 1200, height: 630, alt: 'Brefly' }],
    },
    twitter: { card: 'summary_large_image', title: g.seoTitle, description: g.description, images: [`${SITE_URL}og.png`] },
  };
}

export function GuideArticle({ slug, children }: { slug: string; children: React.ReactNode }) {
  const g = guideBySlug(slug);
  if (!g) throw new Error(`lib/guides.ts 에 없는 slug: ${slug}`);
  const url = `${SITE_URL}guide/${g.slug}/`;
  const others = GUIDES.filter((x) => x.slug !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: g.seoTitle,
    description: g.description,
    inLanguage: 'ko',
    url,
    dateModified: g.updated,
    publisher: { '@type': 'Organization', name: 'Brefly', url: SITE_URL },
  };

  return <>
    <a className="skip" href="#main">본문으로 바로가기</a>
    <GuideHeader/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
    <main id="main" className="guide">
      <p className="guide-kicker">Guide</p>
      <h1>{g.title}</h1>
      {children}
      {others.length > 0 && <nav className="guide-more" aria-label="다른 가이드">
        <h2>다른 가이드</h2>
        <ul>
          {others.map((o) => <li key={o.slug}>
            <a className="text-link" href={path(`/guide/${o.slug}/`)}>{o.title} <ArrowUpRight size={14}/></a>
          </li>)}
        </ul>
      </nav>}
      <GuideCta/>
    </main>
    <GuideFooter/>
  </>;
}
