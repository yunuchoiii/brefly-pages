// 사이트 공통 상수. scripts/fetch-releases.mjs 에도 같은 값이 있다(ESM 스크립트라 TS 를 못 읽는다).
export const SITE_URL = 'https://yunuchoiii.github.io/brefly-pages/';
export const REPO_URL = 'https://github.com/yunuchoiii/brefly';
export const DOWNLOAD_URL = `${REPO_URL}/releases/latest/download/Brefly.dmg`;
export const SPONSOR_URL = 'https://github.com/sponsors/yunuchoiii';

// GitHub Pages 는 저장소 이름 아래에 얹히므로 내부 링크·정적 파일에 접두사가 붙는다.
// vite.config.ts 의 base 와 반드시 같아야 한다 — 대소문자까지. 한 번 어긋나서 favicon 이 404 였다.
export const BASE_PATH = process.env.GITHUB_PAGES === 'true' ? '/brefly-pages' : '';

/** 내부 경로에 base 를 붙인다. 인자는 항상 '/' 로 시작한다. */
export const path = (p: string) => `${BASE_PATH}${p}`;
