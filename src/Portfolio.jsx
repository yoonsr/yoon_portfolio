/**
 * sr 포트폴리오
 * React + Tailwind CSS
 *
 * 폰트: index.html <head>에 아래 한 줄 추가
 * <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
 *
 * index.html의 <html lang="ko"> 도 확인해주세요.
 */

 const ACCENT = "#f2a65a";

 const PROFILE = {
   name: "Yoon Saerom",
   prompt: "yoon@flowcode:~$",
   role: "시니어 풀스택 개발자 · 15년차",
   intro:
     "웹서비스 기획부터 배포까지 혼자 가능합니다. 플로우코드를 운영하며 클라이언트 프로젝트와 자체 서비스를 만들고 있습니다.",
   tags: ["spring-boot", "react", "php", "ai", "infra"],
   resumeUrl: "https://portfolio-bice-five-66hls8nry8.vercel.app/resume_yoonsaerom.pdf",
   email: "dev.yoonsr@gmail.com", // TODO
   linkedin: "https://www.linkedin.com/in/your-id", // TODO
 };
 
 const PROJECTS = [
//    {
//      title: "플로우코드 커머스",
//      desc: "소상공인을 위한 쇼핑몰 플랫폼",
//      stack: "spring-boot · react · mysql",
//      image: null, // "/images/commerce.png"
//      href: "/projects/commerce",
//    },
   {
        title: "부천시 리틀 야구단",
        desc: "리틀 야구단 팀 홈페이지",
        stack: "react · tailwind · vercel",
        image: "/bucheon.png",
        href: "https://bucheon-baseball.kr/",
    },
    {
      title: "미트kg",
      desc: "정육 소매 쇼핑몰 · 관리자 페이지",
      stack: "spring-boot · react · MySQL",
      image: "/meatkg.png",
      href: "https://meatkg.co.kr/",
    },
   {
     title: "지코리아",
     desc: "반도체 부품 기업 홈페이지",
     stack: "react · tailwind · MongoDB",
     image: "/gkorea.png",
     href: "https://www.g-korea.co.kr/",
   },
   {
     title: "포슬",
     desc: "소상공인용 AI SNS 콘텐츠 생성 서비스 (진행중)",
     stack: "react · AI",
     badge: "사이드 프로젝트",
     image: "/posle.png",
     href: "https://posle.vercel.app/login", 
   },
 ];
 
 const EXPERIENCE = [
   { company: "플로우코드", role: "대표 · 풀스택 개발", period: "[2025] → 현재" },
   { company: "토글", role: "개발팀 리드", period: "[2022] → [2025]" },
   { company: "아이와트립", role: "개발팀 매니저", period: "[2021] → [2022]" },
   { company: "넥솔위즈빌", role: "기업부설연구소 선임연구원", period: "[2008] → [2018]" },
 ];
 
 const STACK = [
   { area: "백엔드", items: "Spring Boot, Spring MVC, PHP / CodeIgniter" },
   { area: "프론트엔드", items: "React, Tailwind CSS, javascript, jQuery" },
   { area: "데이터베이스", items: "MySQL, Oracle, MongoDB" },
   { area: "인프라", items: "Linux, Nginx, Vercel, Git" },
 ];
 
 const ARCHIVED = [
   { title: "[토글, 언어 교육 티켓 서비스]", period: "[2022-2025]" },
   { title: "[KRG, 부동산 서비스 (금융API)]", period: "[2023-2023]" },
 ];
 
 const mono = "font-['JetBrains_Mono',ui-monospace,monospace]";
 const focus =
   "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a65a]";
 
 function SectionLabel({ children }) {
   return <h2 className={`${mono} text-[13px] font-normal text-[#a3a8ad]`}>// {children}</h2>;
 }
 
 function ProjectCard({ project, index }) {
    const isExternal = project.href?.startsWith("http");

    return (
        <a
            href={project.href}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            className={`group flex gap-5 rounded-[10px] border border-[#2a2e32] bg-[#1f2327] p-4 transition-colors hover:border-[#4a5056] ${focus}`}
        >
            <div className="flex h-28 w-36 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#2c3136] text-[11px] text-[#a3a8ad]">
                {project.image ? (
                    <img src={project.image} alt={`${project.title} 화면`} className="h-full w-full object-cover" />
                ) : (
                    "[Screenshot]"
                )}
            </div>
            <div className="flex min-w-0 flex-col gap-1.5 pt-1">
                <div className="flex items-center gap-2">
                    <span className={`${mono} text-xs`} style={{ color: ACCENT }}>
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.badge && (
                        <span className={`${mono} rounded border border-[#3a3f44] px-1.5 py-0.5 text-[10px] text-[#c9c5be]`}>
                            {project.badge}
                        </span>
                    )}
                </div>
                <span className="text-xl font-medium text-[#ece8e1] group-hover:text-[#f2a65a]">{project.title}</span>
                <span className="text-sm leading-relaxed text-[#a3a8ad]">{project.desc}</span>
                <span className={`${mono} text-[11px] text-[#a3a8ad]`}>{project.stack}</span>
            </div>
        </a>
    );
 }
 
 function InfoPanel({ label, children, footer }) {
   return (
     <section className="flex flex-col gap-[18px] rounded-[10px] border border-[#2a2e32] bg-[#1f2327] p-6">
       <SectionLabel>{label}</SectionLabel>
       {children}
       {footer && <p className="mt-auto text-[13px] leading-relaxed text-[#a3a8ad]">{footer}</p>}
     </section>
   );
 }
 
 function Row({ title, sub, subMono = true }) {
   return (
     <div className="flex flex-col gap-0.5">
       <span className="text-base font-medium text-[#ece8e1]">{title}</span>
       <span className={subMono ? `${mono} text-xs text-[#a3a8ad]` : "text-sm text-[#a3a8ad]"}>{sub}</span>
     </div>
   );
 }
 
 export default function Portfolio() {
   return (
     <div
       className="min-h-screen bg-[#16191c] text-[#ece8e1] lg:flex lg:h-screen lg:overflow-hidden"
       style={{ fontFamily: "'Space Grotesk', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}
     >
       {/* Sidebar */}
       <aside className="flex flex-col gap-7 border-b border-[#2a2e32] bg-[#0f1113] px-6 py-10 sm:px-12 lg:w-[400px] lg:shrink-0 lg:border-b-0 lg:border-r lg:py-14">
         <div className="flex items-center justify-between">
           <span className={`${mono} text-sm`} style={{ color: ACCENT }}>
             {PROFILE.prompt}
           </span>
           <button
             type="button"
             className={`${mono} min-h-[44px] rounded-md border border-[#3a3f44] bg-[#1d2023] px-3 text-[13px] text-[#ece8e1] ${focus}`}
           >
             KR | EN
           </button>
         </div>
 
         <div className="flex flex-col gap-2.5 lg:pt-6">
           <h1 className="text-5xl font-bold leading-none tracking-tight lg:text-[64px]">
             {PROFILE.name}
             <span style={{ color: ACCENT }}>.</span>
           </h1>
           <p className={`${mono} text-sm text-[#a3a8ad]`}>{PROFILE.role}</p>
         </div>
 
         <p className="max-w-prose text-[17px] leading-relaxed text-[#c9c5be]">{PROFILE.intro}</p>
 
         <ul className={`${mono} flex flex-wrap gap-2 text-xs text-[#c9c5be]`}>
           {PROFILE.tags.map((t) => (
             <li key={t} className="rounded border border-[#3a3f44] px-2.5 py-1.5">
               {t}
             </li>
           ))}
         </ul>
 
         <div className={`${mono} flex flex-col gap-3 text-sm lg:mt-auto`}>
           <a
             href={PROFILE.resumeUrl}
             download
             className={`flex min-h-[52px] items-center justify-center rounded-md font-medium text-[#121416] ${focus}`}
             style={{ backgroundColor: ACCENT }}
           >
             이력서 다운로드 ↓
           </a>
           <a
             href={`mailto:${PROFILE.email}`}
             className={`flex min-h-[52px] items-center justify-center rounded-md border border-[#3a3f44] hover:border-[#6a7076] ${focus}`}
           >
             {PROFILE.email}
           </a>
           {/* <a
             href={PROFILE.linkedin}
             target="_blank"
             rel="noreferrer"
             className={`flex min-h-[44px] items-center justify-center text-[#a3a8ad] hover:text-[#ece8e1] ${focus}`}
           >
             링크드인 ↗
           </a> */}
         </div>
       </aside>
 
       {/* Main */}
       <main className="flex flex-1 flex-col gap-10 px-6 py-10 sm:px-12 lg:overflow-y-auto lg:px-14 lg:py-14">
         <section className="flex flex-col gap-4">
           <SectionLabel>대표 프로젝트</SectionLabel>
           <div className="grid gap-4 xl:grid-cols-2">
             {PROJECTS.map((p, i) => (
               <ProjectCard key={p.title} project={p} index={i} />
             ))}
           </div>
         </section>
 
         <div className="grid flex-1 gap-4 md:grid-cols-3">
           <InfoPanel label="경력">
             {EXPERIENCE.map((e) => (
               <Row key={e.company} title={`${e.company} · ${e.role}`} sub={e.period} />
             ))}
           </InfoPanel>
 
           <InfoPanel label="기술 스택">
             {STACK.map((s) => (
               <Row key={s.area} title={s.area} sub={s.items} subMono={false} />
             ))}
           </InfoPanel>
 
           <InfoPanel label="종료된 프로젝트">
             {ARCHIVED.map((a, i) => (
               <Row key={i} title={a.title} sub={`${a.period} · 서비스 종료`} />
             ))}
           </InfoPanel>
         </div>
       </main>
     </div>
   );
 }