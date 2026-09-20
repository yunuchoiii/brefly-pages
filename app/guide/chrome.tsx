// 가이드 글이 공통으로 쓰는 머리말·꼬리말. 홈(app/page.tsx)과 같은 헤더·푸터를 쓰되,
// 홈의 앵커 링크(#how 등)는 다른 경로에서 동작하지 않으므로 홈 주소를 앞에 붙인다.
import { ArrowDown, ArrowLeft, ArrowUpRight, Code2, Heart } from 'lucide-react';
import { DOWNLOAD_URL, REPO_URL, SPONSOR_URL, path } from '../../lib/site';

export function BrandMark({ size = 28 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 21 C7 8,10.5 8,13.5 16 C15.5 21.5,18 21.5,20.5 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><circle cx="26.5" cy="16" r="3" fill="#e0604a"/></svg>;
}

export function GuideHeader() {
  return <header className="header">
    <a className="brand" href={path('/')} aria-label="Brefly 홈"><span className="logo"><BrandMark size={25}/></span>Brefly</a>
    <nav aria-label="주요 메뉴">
      <a href={`${path('/')}#how`}>사용 방법</a>
      <a href={`${path('/')}#models`}>AI 모델</a>
      <a href={path('/guide/')}>사용 가이드</a>
    </nav>
    <a className="button small" href={DOWNLOAD_URL}>다운로드 <ArrowDown size={15}/></a>
  </header>;
}

export function GuideFooter() {
  return <footer>
    <a className="brand" href={path('/')}><BrandMark size={26}/> Brefly</a>
    <p>생각과 문장 사이, Brefly.</p>
    <div className="footer-links">
      <a className="text-link" href={path('/guide/')}><ArrowLeft size={16}/> 가이드 목록</a>
      <a className="text-link" href={SPONSOR_URL}><Heart size={16}/> 후원하기 <ArrowUpRight size={14}/></a>
      <a className="text-link" href={REPO_URL}><Code2 size={17}/> GitHub <ArrowUpRight size={14}/></a>
    </div>
  </footer>;
}

/** 글 끝마다 붙는 다운로드 유도. */
export function GuideCta() {
  return <aside className="guide-cta">
    <p><strong>Brefly(브레플리)</strong> 는 무료입니다. macOS 13 이상에서 쓸 수 있고, 애플 공증을 받아 경고 없이 열립니다.</p>
    <a className="button" href={DOWNLOAD_URL}><ArrowDown size={18}/> Mac용 무료 다운로드</a>
  </aside>;
}
