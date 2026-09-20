// 빌드 산출물의 `foo.html` 을 `foo/index.html` 로 옮긴다.
//
// 왜 필요한가: next.config 의 `trailingSlash: true` 를 켜면 vinext(1.0.0-beta.5)의 프리렌더가
// 중첩 경로에서 308 을 받고 빌드가 죽는다. 그래서 껐는데, 그러면 `guide.html` 과 `guide/`
// 디렉터리가 같이 생겨 `/guide` 요청이 디렉터리로 잡히고 index 가 없어 404 가 된다.
// 전부 디렉터리 형태로 맞추면 `/guide` 와 `/guide/` 가 모두 동작한다.
import { readdir, rename, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../dist/client', import.meta.url).pathname;
// 루트의 index.html 은 그대로 두고, 404.html 은 GitHub Pages 가 파일명 그대로 찾는다.
const KEEP = new Set(['index.html', '404.html']);

if (!existsSync(ROOT)) {
  console.log('pretty-urls: dist/client 이 없어 건너뜀');
  process.exit(0);
}

let moved = 0;
async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    if ((await stat(full)).isDirectory()) { await walk(full); continue; }
    if (!name.endsWith('.html') || KEEP.has(name)) continue;
    const target = join(dir, name.slice(0, -'.html'.length));
    await mkdir(target, { recursive: true });
    await rename(full, join(target, 'index.html'));
    moved++;
  }
}
await walk(ROOT);
console.log(`pretty-urls: ${moved}개를 디렉터리 형태로 옮김`);
