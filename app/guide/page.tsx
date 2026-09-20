export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { GuideCta, GuideFooter, GuideHeader } from './chrome';
import { GUIDES } from '../../lib/guides';
import { SITE_URL, path } from '../../lib/site';

const title = '사용 가이드 — Brefly';
const description = '맥에서 음성으로 받아쓰고 AI 로 정리하는 방법을 상황별로 정리했습니다.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}guide/` },
  openGraph: { type: 'website', locale: 'ko_KR', url: `${SITE_URL}guide/`, siteName: 'Brefly', title, description },
};

export default function GuideIndex() {
  return <>
    <a className="skip" href="#main">본문으로 바로가기</a>
    <GuideHeader/>
    <main id="main" className="guide">
      <p className="guide-kicker">Guides</p>
      <h1>사용 가이드</h1>
      <p className="guide-lead">{description}</p>
      <div className="guide-index">
        {GUIDES.map((g) => <a key={g.slug} href={path(`/guide/${g.slug}/`)}>
          <h2>{g.title} <ArrowUpRight size={16}/></h2>
          <p>{g.description}</p>
        </a>)}
      </div>
      <GuideCta/>
    </main>
    <GuideFooter/>
  </>;
}
