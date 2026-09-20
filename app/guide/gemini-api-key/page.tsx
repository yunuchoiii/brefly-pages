export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { GuideArticle, guideMetadata } from '../article';

const SLUG = 'gemini-api-key';
export const metadata: Metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuideArticle slug={SLUG}>
    <p className="guide-lead">
      Brefly 에서 받아쓰기는 애플 음성 인식이라 키가 필요 없습니다. 키가 필요한 건
      <strong> 받아 적은 말을 문장으로 정리하는 단계</strong>뿐이고, 그것도 구글 키로 무료로 쓸 수 있습니다.
      카드 등록은 필요 없습니다.
    </p>

    <h2>1. Google AI Studio 에서 키 만들기</h2>
    <ol className="guide-steps">
      <li>
        <strong>aistudio.google.com/apikey 를 엽니다.</strong> 구글 계정으로 로그인하면 됩니다.
      </li>
      <li>
        <strong>API 키 만들기(Create API key)</strong> 를 누릅니다. 프로젝트를 고르라고 하면
        아무거나 골라도 됩니다.
      </li>
      <li>
        <kbd>AIza</kbd> 로 시작하는 긴 문자열이 나옵니다. <strong>복사</strong> 버튼을 누릅니다.
      </li>
    </ol>
    <div className="guide-callout">
      <p>
        Brefly 설정 안에서도 같은 안내를 볼 수 있습니다. <strong>설정 &gt; 음성인식 · AI</strong> 의
        API 키 칸 옆 <strong>?</strong> 버튼을 누르면 이 단계가 말풍선으로 뜨고,
        <strong> 발급 페이지 열기</strong> 버튼이 바로 그 주소를 열어 줍니다.
      </p>
    </div>

    <h2>2. Brefly 에 넣기</h2>
    <ol className="guide-steps">
      <li>메뉴바의 Brefly 아이콘을 누르고 <strong>설정</strong>을 엽니다.</li>
      <li><strong>음성인식 · AI</strong> 탭으로 갑니다.</li>
      <li>Gemini 칸의 <strong>입력</strong> 버튼을 누르고 복사한 키를 붙여넣은 뒤 저장합니다.</li>
    </ol>
    <p>
      저장하면 바로 씁니다. 앱을 다시 켤 필요는 없습니다.
    </p>

    <h2>3. 키는 어디에 저장되나요</h2>
    <p>
      키는 이 맥 안의 파일에만 저장됩니다. 어디에도 올라가지 않습니다.
    </p>
    <ul>
      <li>위치: <kbd>~/Library/Application Support/Brefly/keys.json</kbd></li>
      <li>이 파일은 본인만 읽을 수 있는 권한으로 저장됩니다.</li>
      <li>Brefly 를 지우고 싶으면 이 폴더를 통째로 지우면 키도 같이 사라집니다.</li>
    </ul>

    <h2>4. 요금이 나가지 않나요</h2>
    <p>
      Gemini 에는 무료로 쓸 수 있는 등급이 있고, Brefly 는 그 범위 안에서 쓰는 것을 전제로 합니다.
      카드를 등록하지 않으면 요금이 청구될 일도 없습니다.
    </p>
    <div className="guide-callout">
      <p>
        다만 <strong>무료 한도의 구체적인 숫자는 구글이 수시로 바꿉니다.</strong> 정확한 현재 한도는
        Google AI Studio 의 요금 안내에서 확인하세요. 이 글에 숫자를 적어 두면 금방 틀린 말이 됩니다.
      </p>
      <p>
        무료 등급은 몰리는 시간대에 응답이 느리거나 실패하기도 합니다. Brefly 의 기본값인
        <strong> 자동</strong> 모드는 맥 안의 모델을 같이 불러 두기 때문에, Gemini 가 늦으면
        그쪽 결과를 씁니다.
      </p>
    </div>

    <h2>5. 키를 안 넣고 쓰는 방법</h2>
    <p>
      macOS 26 이고 Apple Intelligence 를 켜 두었다면 <strong>Apple AI</strong> 를 고르면 됩니다.
      키도, 인터넷도 필요 없고, 받아 적은 말이 맥 밖으로 나가지 않습니다.
      대신 긴 이야기에서는 Gemini 쪽 정리가 대체로 더 매끄럽습니다.
    </p>
  </GuideArticle>;
}
