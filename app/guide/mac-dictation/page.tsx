export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { GuideArticle, guideMetadata } from '../article';

const SLUG = 'mac-dictation';
export const metadata: Metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuideArticle slug={SLUG}>
    <p className="guide-lead">
      맥에는 받아쓰기가 이미 들어 있습니다. 켜는 데 1분이면 됩니다. 다만 받아 적는 것과
      <strong> 읽을 수 있는 글이 되는 것</strong>은 다른 일이라, 그 사이를 어떻게 메우는지까지 적었습니다.
    </p>

    <h2>1. macOS 기본 받아쓰기 켜기</h2>
    <p>
      추가로 설치할 것은 없습니다. 시스템 설정에서 스위치 하나만 켜면 됩니다.
    </p>
    <ol className="guide-steps">
      <li><strong>시스템 설정 &gt; 키보드</strong>를 엽니다.</li>
      <li><strong>받아쓰기</strong>를 켭니다. 처음 켜면 언어를 고르라고 합니다. 한국어를 고르세요.</li>
      <li>
        같은 자리에서 <strong>단축키</strong>를 정할 수 있습니다. 기본값은 <kbd>제어</kbd> 키를 두 번
        누르는 것입니다.
      </li>
      <li>글을 쓰는 칸에 커서를 두고 단축키를 누른 뒤 말합니다.</li>
    </ol>
    <div className="guide-callout">
      <p>
        메뉴 이름은 macOS 버전에 따라 조금씩 다릅니다. 못 찾겠으면 시스템 설정 오른쪽 위 검색창에
        <strong> 받아쓰기</strong>를 쳐 보세요.
      </p>
    </div>

    <h2>2. 기본 받아쓰기로 충분한 경우</h2>
    <p>
      짧고 분명한 말은 기본 기능으로 충분합니다. 검색어를 넣거나, 한 줄짜리 메모를 적거나,
      주소를 부르는 정도라면 굳이 다른 걸 쓸 이유가 없습니다.
    </p>

    <h2>3. 기본 받아쓰기가 못 하는 것</h2>
    <p>
      말을 길게 하면 이야기가 달라집니다. 받아쓰기는 <strong>들린 대로 적는 것까지</strong>가 일이고,
      그다음은 하지 않습니다. 그래서 이런 글이 남습니다.
    </p>
    <ul>
      <li>“어”, “그”, “음” 같은 군말이 그대로 들어갑니다.</li>
      <li>같은 말을 고쳐 말하면 고치기 전 문장도 같이 남습니다.</li>
      <li>문장 부호가 잘 안 붙어 한 덩어리로 이어집니다.</li>
      <li>업계 용어나 사람 이름은 엉뚱한 단어로 들립니다.</li>
    </ul>
    <p>
      결국 받아 적은 글을 손으로 다듬게 되는데, 그러면 처음부터 타이핑하는 것과 크게 다르지 않습니다.
    </p>

    <h2>4. 받아쓴 말을 문장으로 만들기</h2>
    <p>
      Brefly 는 그 뒷부분을 맡습니다. 받아쓰기는 똑같이 애플 음성 인식을 쓰고,
      <strong> 받아 적은 말을 AI 가 정리해서 커서가 있는 자리에 바로 넣어 줍니다.</strong>
    </p>
    <ol className="guide-steps">
      <li><strong>단축키를 누릅니다.</strong> 메뉴바에서 바로 녹음이 시작됩니다.</li>
      <li><strong>말합니다.</strong> 중간에 말을 고쳐도 됩니다. 고치기 전 말은 정리하면서 빠집니다.</li>
      <li><strong>단축키를 다시 누릅니다.</strong> 군말을 덜고 문장을 다듬어 클립보드에 넣습니다.</li>
      <li>자동 붙여넣기를 켜 두면 클립보드를 거치지 않고 커서 자리에 바로 들어갑니다.</li>
    </ol>
    <div className="guide-callout">
      <p>
        <strong>말투는 말한 사람을 따라갑니다.</strong> 반말로 말하면 반말로, 존댓말로 말하면
        존댓말로 정리합니다. 설정 &gt; 개인화의 <strong>정리 스타일</strong>에서 형식을 따로 정할 수도 있습니다.
      </p>
      <p>
        자주 틀리게 들리는 단어가 있으면 설정 &gt; 개인화의 <strong>추가 용어</strong>에
        “들린 말 → 올바른 표기” 형태로 적어 두면 됩니다.
      </p>
    </div>

    <h2>5. 어떤 AI 로 정리할지</h2>
    <p>
      정리 단계만 AI 를 씁니다. 세 가지 중에 고를 수 있고, 둘은 돈이 들지 않습니다.
    </p>
    <ul>
      <li><strong>Apple AI</strong> — macOS 26 의 Apple Intelligence 를 씁니다. 맥 안에서 처리하니 아무 데도 보내지 않고, 인터넷도 필요 없습니다.</li>
      <li><strong>Gemini</strong> — 구글 키를 무료로 발급받아 넣습니다. 카드 등록이 필요 없습니다.</li>
      <li><strong>Claude</strong> — 가장 정확하지만 크레딧을 충전해야 합니다. 한 번 정리에 5원 안팎입니다.</li>
    </ul>
    <p>
      기본값은 <strong>자동</strong>입니다. 맥 안의 모델과 Gemini 를 같이 불러서 먼저 쓸 만한 결과가
      오는 쪽을 씁니다.
    </p>
  </GuideArticle>;
}
