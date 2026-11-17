/**
 * 스킬 인벤토리 페이지 (헤드헌터 제출용)
 * 주소: /skill
 * Portfolio.jsx와 같은 다크 톤 · React + Tailwind CSS
 *
 * ○○ 표시는 실제 값으로 채워 주세요.
 */

const ACCENT = "#f2a65a";
const mono = "font-['JetBrains_Mono',ui-monospace,monospace]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a65a]";

// 크몽·숨고에서 들어온 경우(?from=kmong / ?from=soomgo) 연락처와 희망단가를 숨김
const MARKET_SOURCES = ["kmong", "soomgo"];
function isMarketView() {
  if (typeof window === "undefined") return false;
  const from = new URLSearchParams(window.location.search).get("from");
  return MARKET_SOURCES.includes((from || "").toLowerCase());
}

/* ───────────────────────── 데이터 ───────────────────────── */

const SUMMARY =
  "총 14년차 풀스택 개발자로, 엔터프라이즈 시스템 10년과 커머스 플랫폼 리드 경험이 있습니다.";

// contact: true 인 항목은 크몽·숨고 경로에서 숨김
const PERSONAL = [
  { label: "성명", value: "윤새롬" },
  { label: "나이", value: "40세 (만38세)" },  
  { label: "연락처", value: "010-8638-9698", contact: true }, 
  { label: "이메일", value: "dev.yoonsr@gmail.com", contact: true },
  { label: "거주지", value: "경기도 부천시" },
  { label: "총 경력", value: "14년 7개월 (2008.11 ~ 현재, 공백 기간 제외)" },
  { label: "최종학력", value: "경인여자대학 전산커뮤니티학과 졸업, 학점은행제 학사 이수" }, 
  // { label: "사업자", value: "플로우코드 (개인사업자, 세금계산서 발행 가능)" },
  { label: "투입 가능일", value: "즉시 가능 (협의)" },
  { label: "근무 형태", value: "원격·하이브리드 희망" },
];

const SKILLS = [
  { area: "Language", name: "Java", level: "상", years: "11년" },
  { area: "Language", name: "JavaScript", level: "상", years: "14년" },
  { area: "Language", name: "PHP", level: "상", years: "4년" },
  { area: "Language", name: "TypeScript", level: "하", years: "1년 미만" },
  { area: "Backend", name: "Spring Framework (MVC)", level: "상", years: "10년" },
  { area: "Backend", name: "Spring Boot", level: "상", years: "1년" },
  { area: "Backend", name: "CodeIgniter (PHP)", level: "상", years: "4년" },
  { area: "Backend", name: "JSP/Servlet, SOAP(XML)", level: "상", years: "10년" },
  { area: "Frontend", name: "React, Vite, Tailwind CSS", level: "중상", years: "1년" },
  { area: "DB", name: "Oracle", level: "상", years: "10년" },
  { area: "DB", name: "MySQL", level: "상", years: "5년" },
  { area: "DB", name: "MongoDB (Atlas)", level: "하", years: "1년 미만" },
  { area: "Infra", name: "Linux", level: "중상", years: "14년" },
  { area: "Infra", name: "Nginx", level: "중", years: "1년" },
  { area: "Infra", name: "Vercel", level: "중", years: "1년" },
  { area: "형상관리", name: "Git, SVN", level: "상", years: "14년" },
  { area: "대외 연동", name: "TCP/IP 소켓 통신, 금융기관(KCB) 전문 연동, XML 파싱 (PHP)", level: "중상", years: "1년 미만 (2023)" },
  {
    area: "외부 연동",
    name: "KG이니시스(포트원) 결제, 카카오 로그인·알림톡, 채널톡, Google Sheets·Apps Script",
    level: "상",
    years: "4년",
  },
  { area: "기타", name: "PowerBuilder", level: "중", years: "4년" },
];

const CAREERS = [
  {
    period: "2025.10 ~ 2026.05",
    company: "플로우코드",
    role: "프리랜서 · 풀스택",
    work: "홈페이지·쇼핑몰 외주 기획부터 배포·유지보수까지 단독 수행",
  },
  {
    period: "2022.04 ~ 2025.04",
    company: "토글",
    role: "개발팀 리드",
    work: "언어 교육 티켓 구매 플랫폼 초기 구축 단독 수행 후 운영·고도화 전담, 후반 합류 프론트엔드 1명과 분담",
  },
  {
    period: "2023.12 ~ 2024.02",
    company: "KRG (외주)",
    role: "백엔드 개발",
    work: "부동산 서비스 KCB 금융 정보 연동 (TCP/IP 소켓 통신, XML 전문 파싱)",
  },
  {
    period: "2021.06 ~ 2022.02",
    company: "아이와트립",
    role: "시스템개발팀 · 매니저",
    work: "키즈 플랫폼 '동키' 시스템 운영·개발 (입점사 시스템 리뉴얼, 벤더사 주문 연동 API, 지도 서비스)",
  },
  {
    period: "2008.11 ~ 2018.12",
    company: "넥솔위즈빌 기업부설연구소",
    role: "선임연구원",
    work: "쉐보레·코오롱모터스 정비·CRM·보증수리 시스템 개발·운영",
  },
];

const PROJECTS = [
  {
    period: "2025.10 ~ 2026.03",
    title: "정육 쇼핑몰 구축",
    client: "미트kg",
    org: "플로우코드",
    role: "단독 수행 (100%)",
    tech: "Spring Boot, React, Vite, Tailwind CSS, MySQL, 포트원, 카카오 API, 채널톡",
    tasks: [
      "상품·장바구니·결제·회원·마이페이지 개발",
      "매출 대시보드와 상품·카테고리·주문·고객·배너 관리자 페이지 구축",
      "KG이니시스 결제, 카카오 로그인·알림톡, 문자 서비스, 채널톡 연동",
      "도메인·SSL·서버 배포, 검색 등록",
      "React 기반 반응형 웹 UI 개발로 멀티 디바이스 사용자 경험 개선"
    ],
  },
  {
    period: "2026.04 ~ 2026.04",
    title: "반도체 부품 기업 다국어 홈페이지",
    client: "지코리아",
    org: "플로우코드",
    role: "단독 수행 (100%)",
    tech: "React, TypeScript, Vite, Tailwind CSS, MongoDB Atlas, react-i18next",
    tasks: [
      "한국어·영어 제품 소개 사이트 구축",
      "카테고리 필터·상세 페이지·이미지 확대·PDF 카탈로그 다운로드 구현",
      "sitemap 등 네이버·구글 검색 노출 설정",
    ],
  },
  {
    period: "2026.01 ~ 2026.01",
    title: "리틀야구단 공식 홈페이지",
    client: "부천시 리틀야구단",
    org: "플로우코드",
    role: "단독 수행 (100%)",
    tech: "React, Tailwind CSS, Google Apps Script, Google Sheets",
    tasks: [
      "반응형 홈페이지 제작",
      "구글 시트에 입력한 경기 일정이 자동 반영되는 연동 구현",
      "경기 상태 자동 표시, 입단 문의 접수(시트 저장), 검색 노출 설정",
    ],
  },
  {
    period: "2022.04 ~ 2025.04",
    title: "언어 교육 티켓 구매 플랫폼",
    client: "토글 (자사)",
    org: "토글",
    role: "개발 리드 (초기 구축 단독 수행) · 참여도 전체 약 90% (백엔드·인프라 100%)",
    tech: "CodeIgniter, MySQL",
    tasks: [
      "서비스 초기 설계·개발을 단독으로 완료하고 이후 운영·고도화까지 전담",
      "후반 합류한 프론트엔드 개발자 1명과 업무 분담, 작업 리뷰",
      "고객용 티켓 구매 사이트와 백오피스 설계·개발",
      "구매·결제·회원·예약 기능과 상품·주문·회원 관리 화면 구축",
      "개발 일정·업무 배분, 코드 리뷰, 배포 관리",
      "장애·데이터 이슈 대응",
    ],
  },
  {
    period: "2023.12 ~ 2024.02",
    title: "부동산 서비스 KCB 금융 정보 연동",
    client: "KRG",
    org: "외주",
    role: "백엔드 개발 (100%)",
    tech: "PHP, CodeIgniter, MySQL, TCP/IP Socket, XML",
    tasks: [
      "KCB와 TCP/IP 소켓 통신 방식의 대외 연동 구축",
      "접속 서버 IP 등록(방화벽 오픈) 등 기관 측과 연동 환경 협의·테스트",
      "XML 응답 전문 파싱 및 데이터 검증 로직 개발",
      "통신 오류·비정상 응답 예외 처리 후 실서비스 반영",
    ],
  },
  {
    period: "2021.12 ~ 2022.02",
    title: "입점사 추가 기능 개발 및 벤더사 주문 연동 API 구현",
    client: "아이와트립 (키즈 플랫폼 동키)",
    org: "아이와트립",
    role: "시스템개발팀 매니저",
    tech: "PHP, MySQL, CodeIgniter",
    tasks: [
      "입점사 프로그램 신규 기능 개발 및 고도화",
      "벤더사 주문 데이터 연동을 위한 RESTful API 설계 및 구현 (JSON · XML)",
    ],
  },
  {
    period: "2021.11",
    title: "앱 내 지도 서비스 개발",
    client: "아이와트립 (키즈 플랫폼 동키)",
    org: "아이와트립",
    role: "시스템개발팀 매니저",
    tech: "PHP, MySQL, CodeIgniter, Google Maps API",
    tasks: ["Google Maps API 연동을 통한 위치 기반 서비스 기능 구현"],
  },
  {
    period: "2021.07 ~ 2021.11",
    title: "입점사 시스템 리뉴얼",
    client: "아이와트립 (키즈 플랫폼 동키)",
    org: "아이와트립",
    role: "시스템개발팀 매니저",
    tech: "PHP, MySQL, CodeIgniter",
    tasks: ["입점사 관리 시스템 전면 리뉴얼 및 UX 개선"],
  },
  {
    period: "2017.06 ~ 2017.12",
    title: "고객 멤버십 시스템 구축",
    client: "코오롱모터스",
    org: "넥솔위즈빌",
    role: "개발",
    tech: "Java, Spring MVC, JSP, Oracle, Linux, SVN",
    tasks: ["수입차 고객 멤버십 관리·혜택 운영 시스템 신규 개발"],
  },
  {
    period: "2016.12 ~ 2017.05",
    title: "수입차 출고·정비 시스템 구축",
    client: "코오롱모터스",
    org: "넥솔위즈빌",
    role: "개발",
    tech: "Java, Spring MVC, JSP, Oracle, Linux, SVN",
    tasks: ["수입차 출고 프로세스와 정비 업무 전산화 시스템 신규 개발"],
  },
  {
    period: "2012.12 ~ 2013.03",
    title: "글로벌 보증수리 시스템",
    client: "한국GM (쉐보레)",
    org: "넥솔위즈빌",
    role: "설계·개발",
    tech: "Java, Spring MVC, JSP, Oracle, SOAP(XML), Linux, SVN",
    tasks: ["글로벌 보증수리 데이터 처리를 위한 SOAP(XML) 기반 연동 시스템 설계·개발"],
  },
  {
    period: "2012.01 ~ 2012.09",
    title: "센터급 정비 시스템 버전 업그레이드",
    client: "한국GM (쉐보레)",
    org: "넥솔위즈빌",
    role: "개발",
    tech: "PowerBuilder, Oracle",
    tasks: ["센터급 정비 시스템 버전 업그레이드와 안정화"],
  },
  {
    period: "2011.10 ~ 2012.03",
    title: "정비 CRM 사이트 Chevy Connect",
    client: "한국GM (쉐보레)",
    org: "넥솔위즈빌",
    role: "개발",
    tech: "Java, Spring MVC, JSP, Oracle, Linux, SVN",
    tasks: ["고객 정비 이력 관리와 CRM 기능을 통합한 사이트 신규 개발"],
  },
  {
    period: "2010.06 ~ 2010.11",
    title: "정비 시스템 재구축",
    client: "한국GM (쉐보레)",
    org: "넥솔위즈빌",
    role: "개발",
    tech: "Java, Spring MVC, JSP, Oracle, Linux, SVN",
    tasks: ["JSP/Servlet 기반 레거시 정비 시스템을 Spring MVC로 전환, 아키텍처 개선"],
  },
  {
    period: "2008.11 ~ 2011.01",
    title: "정비 시스템 운영·기능 개발",
    client: "한국GM (쉐보레)",
    org: "넥솔위즈빌",
    role: "운영·개발",
    tech: "Java, PowerBuilder, Oracle, Linux",
    tasks: ["대용량 정비 데이터를 다루는 Oracle 기반 시스템 운영, 기능 개발, 장애 대응·성능 개선"],
  },
];

const RATE = {
  main: "원격·하이브리드 근무 가능",
  notes: ["월 600 ~ 650만원", "기간·업무 범위에 따라 협의 가능"], 
};

const APPEALS = [
  {
    title: "대용량 데이터 기반 엔터프라이즈 시스템 10년",
    sub: "넥솔위즈빌, 2008~2018",
    points: [
      "쉐보레(한국GM) 정비·CRM 시스템 운영과 재구축, Chevy Connect, 글로벌 보증수리 시스템 개발",
      "코오롱모터스 수입차 출고·정비 시스템, 고객 멤버십 시스템 신규 구축",
      "JSP/Servlet 레거시를 Spring MVC로 전환하고, SOAP(XML) 기반 글로벌 연동 시스템 설계",
      "전국 정비 네트워크의 대량 정비·고객 데이터를 다루는 Oracle 시스템 운영, 장애 대응과 성능 개선",
    ],
  },
  {
    title: "커머스 플랫폼 개발 리드",
    sub: "아이와트립 2021~2022, 토글 2022~2025",
    points: [
      "키즈 플랫폼 '동키' 입점사 관리 시스템 전면 리뉴얼과 벤더사 주문 연동 RESTful API(JSON·XML) 구현",
      "언어 교육 티켓 구매 플랫폼의 고객 사이트와 백오피스 설계·개발",
      "상품·주문·결제·회원·예약 등 커머스 핵심 도메인 설계",
      "개발팀 리드로 일정·업무 배분, 코드 리뷰, 배포 관리, 기획·디자인 부서와 협업 조율",
    ],
  },
  {
    title: "금융기관(KCB) 대외 연동",
    sub: "KRG 외주, 2023",
    points: [
      "KCB와 TCP/IP 소켓 방식으로 직접 연동해, 방화벽 협의부터 XML 전문 파싱·검증, 예외 처리까지 실서비스에 반영",
    ],
  },
  {
    title: "기획부터 배포까지 단독 수행",
    sub: "플로우코드, 2025~2026",
    points: [
      "Spring Boot + React 쇼핑몰에 PG 결제, 카카오 로그인·알림톡, 채널톡 연동과 관리자 페이지 구축",
      "다국어(한/영) 기업 사이트, 구글 시트 연동 사이트 제작",
      "도메인·SSL·서버 세팅, 네이버·구글 검색 등록까지 직접 진행",
    ],
  },
];

const STRENGTHS = [
  "레거시 유지보수부터 신규 구축까지 모두 경험해, 투입 즉시 기존 코드를 파악하고 작업할 수 있습니다.",
  "백엔드·프론트엔드·인프라를 혼자 끝까지 처리해 소규모 팀이나 단독 투입에 적합합니다.",
  "고객사·기획자와 직접 요구사항을 정리해 온 경험이 많아 커뮤니케이션 비용이 적습니다.",
];

/* ───────────────────────── UI 조각 ───────────────────────── */

function SectionLabel({ children }) {
  return <h2 className={`${mono} text-[13px] font-normal text-[#a3a8ad]`}>// {children}</h2>;
}

function Panel({ label, lead, children }) {
  return (
    <section className="flex min-w-0 flex-col gap-4 rounded-[10px] border border-[#2a2e32] bg-[#1f2327] p-5 sm:p-6">
      <SectionLabel>{label}</SectionLabel>
      {lead && <p className="break-keep text-sm text-[#c9c5be]">{lead}</p>}
      {children}
    </section>
  );
}

// 가로로 넓은 표는 모바일에서 좌우 스크롤
function Table({ head, children }) {
  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className={`${mono} text-[11px] text-[#a3a8ad]`}>
            {head.map((h) => (
              <th key={h} className="whitespace-nowrap border-b border-[#3a3f44] px-3 py-2 font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#c9c5be]">{children}</tbody>
      </table>
    </div>
  );
}

const td = "border-b border-[#2a2e32] px-3 py-2.5 align-top";

/* ───────────────────────── 페이지 ───────────────────────── */

export default function Skill() {
  const marketView = isMarketView();
  const personal = PERSONAL.filter((p) => !(marketView && p.contact));

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#16191c] text-[#ece8e1]"
      style={{ fontFamily: "'Space Grotesk', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-10 lg:py-14">
        {/* 헤더 */}
        <header className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href={`/${window.location.search}`} className={`${mono} w-fit text-sm ${focus}`} style={{ color: ACCENT }}>
              ← yoon@flowcode:~$ portfolio
            </a>
            {/* PDF 다운로드 (public/skill_inventory_yoonsaerom.pdf) — 크몽·숨고 경로에서는 숨김 */}
            {!marketView && (
              <a
                href="/skill_inventory_yoonsaerom.pdf"
                download="윤새롬_스킬인벤토리.pdf"
                className={`${mono} flex min-h-[44px] items-center justify-center rounded-md px-4 text-sm font-medium text-[#121416] ${focus}`}
                style={{ backgroundColor: ACCENT }}
              >
                PDF 다운로드 ↓
              </a>
            )}
          </div>
          <h1 className="text-[36px] font-bold leading-tight tracking-tight sm:text-5xl">
            스킬 인벤토리<span style={{ color: ACCENT }}>.</span>
          </h1>
          <p className="max-w-prose break-keep text-base leading-relaxed text-[#c9c5be] sm:text-[17px]">{SUMMARY}</p>
        </header>

        {/* 인적사항 + 희망단가 */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Panel label="인적사항">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {personal.map((p) => (
                <div key={p.label} className="flex min-w-0 flex-col gap-0.5">
                  <dt className={`${mono} text-[11px]`} style={{ color: ACCENT }}>
                    {p.label}
                  </dt>
                  <dd className="break-keep text-sm text-[#ece8e1]">{p.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>

          {!marketView && (
            <Panel label="희망단가">
              <p className="break-keep text-lg font-medium text-[#ece8e1]">{RATE.main}</p>
              <ul className="flex flex-col gap-1.5 text-sm text-[#c9c5be]">
                {RATE.notes.map((n) => (
                  <li key={n}>· {n}</li>
                ))}
              </ul>
            </Panel>
          )}
        </div>

        {/* 보유 기술 */}
        <Panel label="보유 기술" lead="Java·Spring과 Oracle을 10년 이상 실무에서 써 왔고, 최근에는 Spring Boot·React로 서비스를 단독 구축합니다.">
          <Table head={["구분", "기술", "숙련도", "사용 기간"]}>
            {SKILLS.map((s) => (
              <tr key={s.name}>
                <td className={`${td} ${mono} whitespace-nowrap text-xs`} style={{ color: ACCENT }}>
                  {s.area}
                </td>
                <td className={`${td} text-[#ece8e1]`}>{s.name}</td>
                <td className={`${td} whitespace-nowrap`}>{s.level}</td>
                <td className={`${td} whitespace-nowrap`}>{s.years}</td>
              </tr>
            ))}
          </Table>
        </Panel>

        {/* 경력 요약 */}
        <Panel label="경력 요약" lead="다섯 곳에서 개발과 팀 리드를 맡았고, 2025년부터 개인사업자로 외주를 단독 수행합니다.">
          <Table head={["기간", "회사", "직위", "담당 업무"]}>
            {CAREERS.map((c) => (
              <tr key={c.company}>
                <td className={`${td} ${mono} whitespace-nowrap text-xs`}>{c.period}</td>
                <td className={`${td} whitespace-nowrap font-medium text-[#ece8e1]`}>{c.company}</td>
                <td className={`${td} whitespace-nowrap`}>{c.role}</td>
                <td className={`${td} break-keep`}>{c.work}</td>
              </tr>
            ))}
          </Table>
        </Panel>

        {/* 프로젝트 경력 */}
        <Panel
          label="프로젝트 경력"
          lead={`최신순 ${PROJECTS.length}건입니다. 2025년 3건은 기획·디자인·개발·배포를 모두 단독으로 수행했습니다.`}
        >
          <Table head={["기간", "프로젝트 / 고객사", "소속 · 역할", "기술", "업무 내용"]}>
            {PROJECTS.map((p) => (
              <tr key={p.title}>
                <td className={`${td} ${mono} whitespace-nowrap text-xs`}>{p.period}</td>
                <td className={`${td} min-w-[180px] break-keep`}>
                  <span className="block font-medium text-[#ece8e1]">{p.title}</span>
                  <span className="text-xs text-[#a3a8ad]">{p.client}</span>
                </td>
                <td className={`${td} min-w-[120px] break-keep`}>
                  <span className="block">{p.org}</span>
                  <span className="text-xs" style={{ color: ACCENT }}>
                    {p.role}
                  </span>
                </td>
                <td className={`${td} ${mono} min-w-[160px] text-[11px] leading-relaxed text-[#a3a8ad]`}>{p.tech}</td>
                <td className={`${td} min-w-[260px] break-keep`}>
                  <ul className="flex flex-col gap-1">
                    {p.tasks.map((t) => (
                      <li key={t}>· {t}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </Table>
          <p className="text-xs text-[#a3a8ad]">넥솔위즈빌 재직 중 사내 시스템 유지보수(2018)도 담당했습니다.</p>
        </Panel>

        {/* 어필사항 */}
        <Panel
          label="어필사항"
          lead="14년간 대형 고객사 시스템부터 소상공인 쇼핑몰까지 설계·개발·배포·운영을 직접 해 온 풀스택 개발자입니다."
        >
          <ol className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {APPEALS.map((a, i) => (
              <li key={a.title} className="flex flex-col gap-2 rounded-md border border-[#2a2e32] bg-[#1a1d21] p-4">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className={`${mono} text-xs`} style={{ color: ACCENT }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-[#ece8e1]">{a.title}</span>
                  <span className="text-xs text-[#a3a8ad]">{a.sub}</span>
                </div>
                <ul className="flex flex-col gap-1 text-sm text-[#c9c5be]">
                  {a.points.map((pt) => (
                    <li key={pt} className="break-keep">
                      · {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-2 pt-2">
            <span className={`${mono} text-xs`} style={{ color: ACCENT }}>
              강점
            </span>
            <ul className="flex flex-col gap-1.5 text-sm text-[#c9c5be]">
              {STRENGTHS.map((s) => (
                <li key={s} className="break-keep">
                  · {s}
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </div>
    </div>
  );
}
