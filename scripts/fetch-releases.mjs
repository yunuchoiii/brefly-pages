// 빌드 전에 GitHub 릴리스를 가져와 data/releases.json 에 굽고 sitemap.xml 의 날짜를 갱신한다.
// 네트워크가 없거나 API 가 실패하면 기존 스냅샷을 그대로 둔다 — 로컬 개발이 막히면 안 된다.
import { readFile, writeFile } from 'node:fs/promises';

const SITE_URL = 'https://yunuchoiii.github.io/brefly-pages/';
const API = 'https://api.github.com/repos/yunuchoiii/brefly/releases?per_page=10';
const OUT = new URL('../data/releases.json', import.meta.url);
const SITEMAP = new URL('../public/sitemap.xml', import.meta.url);
const KEEP = 3;

async function fetchReleases() {
  // Actions 러너는 IP 를 공유해 익명 한도(시간당 60회)에 자주 걸린다. 워크플로가 GH_TOKEN 을 넘긴다.
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'brefly-pages' };
  if (process.env.GH_TOKEN) headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
  const res = await fetch(API, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const list = await res.json();
  return list
    .filter((r) => !r.draft && !r.prerelease)
    .slice(0, KEEP)
    .map((r) => ({
      tag: r.tag_name,
      version: r.tag_name.replace(/^v/, ''),
      publishedAt: r.published_at,
      url: r.html_url,
      body: r.body ?? '',
    }));
}

let releases;
try {
  releases = await fetchReleases();
  if (!releases.length) throw new Error('릴리스가 비어 있음');
  await writeFile(OUT, JSON.stringify(releases, null, 2) + '\n');
  console.log(`릴리스 ${releases.length}개 갱신: ${releases.map((r) => r.tag).join(', ')}`);
} catch (e) {
  console.warn(`릴리스 조회 실패 — 스냅샷 유지 (${e.message})`);
  releases = JSON.parse(await readFile(OUT, 'utf8'));
}

// 검색 엔진에는 "마지막으로 바뀐 날" 을 알려 준다. 가장 최근 릴리스 날짜와 오늘 중 뒤의 것.
const latest = releases[0]?.publishedAt ?? new Date().toISOString();
const lastmod = new Date(Math.max(new Date(latest).getTime(), Date.now())).toISOString().slice(0, 10);

// 가이드 글도 사이트맵에 넣는다. 목록은 lib/guides.ts 가 정본이지만 이 스크립트는 ESM 이라
// TS 를 못 읽으므로, 파일에서 slug 와 updated 만 뽑아 쓴다. 두 벌로 적어 두면 갈라진다.
const guidesSrc = await readFile(new URL('../lib/guides.ts', import.meta.url), 'utf8');
const guides = [...guidesSrc.matchAll(/slug:\s*'([^']+)'[\s\S]*?updated:\s*'([^']+)'/g)]
  .map(([, slug, updated]) => ({ slug, updated }));
if (!guides.length) throw new Error('lib/guides.ts 에서 가이드를 못 읽었다 — 사이트맵이 홈만 남는다');

const urls = [
  { loc: SITE_URL, lastmod, changefreq: 'weekly', priority: '1.0' },
  { loc: `${SITE_URL}guide/`, lastmod, changefreq: 'monthly', priority: '0.8' },
  ...guides.map((g) => ({ loc: `${SITE_URL}guide/${g.slug}/`, lastmod: g.updated, changefreq: 'monthly', priority: '0.7' })),
];

await writeFile(SITEMAP, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`);
console.log(`sitemap lastmod ${lastmod} · URL ${urls.length}개`);
