// 가이드 글 목록. 사이트맵(scripts/build-sitemap.mjs)과 목록 페이지가 같은 값을 쓴다.
export type Guide = {
  slug: string;
  title: string;
  /** <title> 과 검색 결과에 쓰는 긴 제목. */
  seoTitle: string;
  description: string;
  /** 글이 마지막으로 사실 확인된 날. 구조화 데이터의 dateModified 로 나간다. */
  updated: string;
};

export const GUIDES: Guide[] = [
  {
    slug: 'mac-dictation',
    title: '맥에서 음성으로 받아쓰기 하는 법',
    seoTitle: '맥에서 음성으로 받아쓰기 하는 법 — macOS 기본 기능과 Brefly 비교',
    description:
      'macOS 에 내장된 받아쓰기를 켜는 법과, 받아 적은 말을 읽을 수 있는 문장으로 정리하는 법. 기본 기능의 한계와 Brefly 로 채우는 부분을 나눠 설명합니다.',
    updated: '2026-09-20',
  },
  {
    slug: 'gemini-api-key',
    title: '무료 Gemini API 키 발급받아 연결하기',
    seoTitle: '무료 Gemini API 키 발급받는 법 — Brefly 에 연결하기까지',
    description:
      'Google AI Studio 에서 Gemini API 키를 무료로 발급받아 Brefly 에 넣는 순서. 키를 어디에 저장하는지, 요금이 나가는 조건은 무엇인지까지 짚습니다.',
    updated: '2026-09-20',
  },
  {
    slug: 'meeting-notes',
    title: '회의 내용을 말로 정리하기',
    seoTitle: '회의 내용을 말로 정리하는 법 — 맥에서 음성으로 회의록 쓰기',
    description:
      '회의가 끝난 직후 기억이 살아 있을 때 말로 쏟아 내고, AI 가 항목으로 정리하게 하는 방법. 녹취가 아니라 정리에 초점을 둔 사용법입니다.',
    updated: '2026-09-20',
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
