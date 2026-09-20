export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { GuideArticle, guideMetadata } from '../article';

const SLUG = 'meeting-notes';
export const metadata: Metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuideArticle slug={SLUG}>
    <p className="guide-lead">
      회의록을 쓰기 싫은 이유는 대개 <strong>회의가 끝난 뒤에도 일이 남기 때문</strong>입니다.
      녹취를 통째로 받아 적는 대신, 기억이 살아 있는 5분 안에 말로 쏟아 내고 정리는 맡기는 방법입니다.
    </p>

    <h2>1. 녹취와 정리는 다른 일입니다</h2>
    <p>
      회의 전체를 녹음해 받아 적으면 A4 몇 장이 나옵니다. 그걸 다시 읽고 줄이는 게 결국 또 일입니다.
      실제로 필요한 건 <strong>정해진 것, 해야 할 것, 다음 일정</strong> 정도입니다.
    </p>
    <p>
      그래서 이 방법은 회의를 녹음하지 않습니다. 회의가 끝난 직후, 기억나는 것을 그냥 말합니다.
      사람은 자기가 방금 겪은 일을 요약해서 말하는 데 이미 능숙합니다.
    </p>

    <h2>2. 끝나자마자 말로 쏟아 내기</h2>
    <ol className="guide-steps">
      <li><strong>회의가 끝나면 바로 단축키를 누릅니다.</strong> 자리를 옮기기 전이 가장 좋습니다.</li>
      <li>
        <strong>순서를 맞추려 하지 말고 그냥 말합니다.</strong> 생각나는 대로 뱉어도 됩니다.
        “아 그리고” 하고 되돌아가도 괜찮습니다.
      </li>
      <li>
        <strong>정해진 것과 할 일은 소리 내어 구분합니다.</strong> “결정된 건…”, “내가 해야 할 건…”
        처럼 말하면 정리 결과에서도 그 구분이 남습니다.
      </li>
      <li><strong>단축키를 다시 누릅니다.</strong> 군말이 빠지고 항목으로 묶인 글이 나옵니다.</li>
    </ol>
    <div className="guide-callout">
      <p>
        말하다 멈칫하는 건 상관없습니다. 정리 단계에서 “음”, “그러니까” 같은 군말과
        되돌아가서 고친 말은 빠집니다.
      </p>
    </div>

    <h2>3. 이름과 용어가 자꾸 틀린다면</h2>
    <p>
      회의에는 사람 이름, 제품 이름, 줄임말이 많이 나옵니다. 받아쓰기가 이걸 엉뚱하게 듣는 건
      흔한 일입니다. 미리 적어 두면 고쳐 줍니다.
    </p>
    <ol className="guide-steps">
      <li><strong>설정 &gt; 개인화</strong>를 엽니다.</li>
      <li>
        주로 일하는 <strong>분야와 상황</strong>을 고릅니다. 고른 분야의 용어를 기준으로 잘못 들은 말을 바로잡습니다.
      </li>
      <li>
        <strong>추가 용어</strong> 칸에 한 줄에 하나씩 적습니다.
        “들린 말 → 올바른 표기” 형태로 적으면 그대로 바꿔 줍니다.
      </li>
    </ol>

    <h2>4. 말투와 형식 정하기</h2>
    <p>
      기본적으로는 말한 사람의 말투를 따라갑니다. 반말로 말하면 반말로 남습니다.
      혼자 보는 메모라면 그게 편하고, 팀에 그대로 공유할 거라면 형식을 정해 두는 편이 낫습니다.
    </p>
    <p>
      <strong>설정 &gt; 개인화</strong>의 <strong>정리 스타일</strong>에서 결과의 말투와 형식을 정할 수 있습니다.
    </p>

    <h2>5. 바로 붙여 넣기</h2>
    <p>
      정리된 글은 클립보드에 들어갑니다. 노션이든 슬랙이든 붙여넣기만 하면 됩니다.
      <strong>자동 붙여넣기</strong>를 켜 두면 클립보드를 거치지 않고 커서가 있는 자리에 바로 들어갑니다.
    </p>
    <div className="guide-callout">
      <p>
        자동 붙여넣기는 <strong>손쉬운 사용 권한</strong>이 있어야 동작합니다. 처음 켤 때 한 번
        허용해 주면 그다음부터는 묻지 않습니다.
      </p>
    </div>

    <h2>6. 남기고 싶지 않은 내용이라면</h2>
    <p>
      회의 내용이 밖으로 나가는 게 걸린다면 <strong>Apple AI</strong> 를 고르세요.
      macOS 26 의 Apple Intelligence 로 맥 안에서 정리하므로 받아 적은 말이 어디에도 전송되지 않습니다.
      받아쓰기도 설정에서 애플 서버 대신 이 맥에서만 처리하도록 바꿀 수 있습니다.
    </p>
  </GuideArticle>;
}
