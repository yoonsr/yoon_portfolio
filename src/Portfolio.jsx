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
   role: "시니어 풀스택 개발자 · 14년차",
   intro:
     "맡은 서비스는 끝까지 책임지는 14년차 풀스택 개발자입니다. 기획부터 배포, 운영까지 전 과정을 경험했습니다.",
   tags: ["spring-boot", "react", "php", "ai", "infra"],
   resumeUrl: "/resume_yoonsaerom.pdf",
   email: "dev.yoonsr@gmail.com",
   linkedin: "https://www.linkedin.com/in/your-id", // TODO
 };
 
 const OWNERSHIP = {
   solo: { label: "전담 개발", highlight: true },
   lead: { label: "개발 리드", highlight: false },
   team: { label: "팀 참여", highlight: false },
 };
 
 const PROJECTS = [
   {
     title: "부천시 리틀 야구단",
     desc: "리틀 야구단 팀 홈페이지",
     stack: "react · tailwind · vercel",
     ownership: "solo",
     image: "/bucheon.png",
     href: "https://bucheon-baseball.kr/",
   },
   {
     title: "미트kg",
     desc: "정육 소매 쇼핑몰 · 관리자 페이지",
     stack: "spring-boot · react · mysql",
     ownership: "solo",
     image: "/meatkg.png",
     href: "https://meatkg.co.kr/",
   },
   {
     title: "지코리아",
     desc: "반도체 부품 기업 홈페이지",
     stack: "react · tailwind · mongodb",
     ownership: "solo",
     image: "/gkorea.png",
     href: "https://www.g-korea.co.kr/",
   },
   {
     title: "포슬",
     desc: "소상공인용 AI SNS 콘텐츠 생성 서비스 (진행중)",
     stack: "react · ai",
     badge: "사이드 프로젝트",
     image: "/posle.png",
     href: "https://posle.vercel.app/login",
   },
 ];
 
 // status: 서비스가 종료된 경우에만 적어주세요 (별도 '종료된 프로젝트' 섹션 대신)
 const EXPERIENCE = [
   {
     company: "플로우코드",
     role: "대표 · 풀스택 개발",
     period: "2025 – 현재",
     ownership: "solo",
     highlight: "홈페이지·쇼핑몰 외주 기획부터 배포까지",
   },
   {
     company: "토글",
     role: "개발팀 리드",
     period: "2022 – 2025",
     ownership: "solo",
     status: "서비스 종료",
     highlight: "언어 교육 티켓 구매 플랫폼 개발, 운영",
   },
   {
     company: "KRG",
     role: "풀스택 외주 개발",
     period: "2023",
     ownership: "solo",
     highlight: "부동산 서비스 금융 API 연동",
   },
   {
     company: "아이와트립",
     role: "개발팀 매니저",
     period: "2021 – 2022",
     ownership: "team",
     highlight: "키즈 체험 티켓 구매 플랫폼 개발, 운영",
   },
   {
     company: "넥솔위즈빌",
     role: "기업부설연구소 선임연구원",
     period: "2008 – 2018",
     ownership: "team",
     highlight: "쉐보레, 코오롱모터스 정비·CRM 시스템 개발, 운영",
   },
 ];
 
 const STACK = [
   { area: "Backend", items: "Spring Boot, Spring MVC, PHP / CodeIgniter" },
   { area: "Frontend", items: "React, Tailwind CSS, JavaScript, jQuery" },
   { area: "Database", items: "MySQL, Oracle, MongoDB" },
   { area: "Infra", items: "Linux, Nginx, Vercel, Git" },
 ];
 
 const mono = "font-['JetBrains_Mono',ui-monospace,monospace]";
 const focus =
   "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a65a]";
 
 function SectionLabel({ children }) {
   return <h2 className={`${mono} text-[13px] font-normal text-[#a3a8ad]`}>// {children}</h2>;
 }
 
 function Tag({ children, filled = false }) {
   return (
     <span
       className={`${mono} whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] ${
         filled ? "font-medium text-[#121416]" : "border border-[#3a3f44] text-[#c9c5be]"
       }`}
       style={filled ? { backgroundColor: ACCENT } : undefined}
     >
       {children}
     </span>
   );
 }
 
 function OwnershipBadge({ type }) {
   const o = OWNERSHIP[type];
   if (!o) return null;
   return <Tag filled={o.highlight}>{o.label}</Tag>;
 }
 
 function Panel({ label, children, className = "" }) {
   return (
     <section
       className={`flex flex-col gap-4 rounded-[10px] border border-[#2a2e32] bg-[#1f2327] p-6 ${className}`}
     >
       <SectionLabel>{label}</SectionLabel>
       {children}
     </section>
   );
 }
 
 function ProjectCard({ project, index }) {
   const isExternal = project.href?.startsWith("http");
 
   return (
     <a
       href={project.href}
       {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
       className={`group flex gap-4 rounded-[10px] border border-[#2a2e32] bg-[#1f2327] p-3.5 transition-colors hover:border-[#4a5056] ${focus}`}
     >
       <div className="flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#2c3136] text-[11px] text-[#a3a8ad]">
         {project.image ? (
           <img src={project.image} alt={`${project.title} 화면`} className="h-full w-full object-cover" />
         ) : (
           "[Screenshot]"
         )}
       </div>
       <div className="flex min-w-0 flex-col gap-1">
         <div className="flex flex-wrap items-center gap-1.5">
           <span className={`${mono} text-xs`} style={{ color: ACCENT }}>
             {String(index + 1).padStart(2, "0")}
           </span>
           <OwnershipBadge type={project.ownership} />
           {project.badge && <Tag>{project.badge}</Tag>}
         </div>
         <span className="text-lg font-medium text-[#ece8e1] group-hover:text-[#f2a65a]">
           {project.title}
           {isExternal && <span className="ml-1 text-sm text-[#a3a8ad]">↗</span>}
         </span>
         <span className="truncate text-sm text-[#a3a8ad]">{project.desc}</span>
         <span className={`${mono} text-[11px] text-[#a3a8ad]`}>{project.stack}</span>
       </div>
     </a>
   );
 }
 
 function ExperienceRow({ item }) {
   return (
     <li className="grid grid-cols-[104px_1fr] gap-x-4 border-t border-[#2a2e32] py-3 first:border-t-0 first:pt-0 last:pb-0">
       <span className={`${mono} pt-0.5 text-xs text-[#a3a8ad]`}>{item.period}</span>
       <div className="flex min-w-0 flex-col gap-1">
         <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
           <span className="text-[15px] font-medium text-[#ece8e1]">{item.company}</span>
           <span className="text-sm text-[#a3a8ad]">{item.role}</span>
           <OwnershipBadge type={item.ownership} />
           {item.status && <Tag>{item.status}</Tag>}
         </div>
         <p className="text-sm text-[#c9c5be]">{item.highlight}</p>
       </div>
     </li>
   );
 }
 
 export default function Portfolio() {
   return (
     <div
       className="min-h-screen bg-[#16191c] text-[#ece8e1] lg:flex lg:h-screen lg:overflow-hidden"
       style={{ fontFamily: "'Space Grotesk', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}
     >
       {/* Sidebar */}
       <aside className="flex flex-col gap-7 border-b border-[#2a2e32] bg-[#0f1113] px-6 py-10 sm:px-12 lg:w-[380px] lg:shrink-0 lg:border-b-0 lg:border-r lg:py-14">
         <span className={`${mono} text-sm`} style={{ color: ACCENT }}>
           {PROFILE.prompt}
         </span>
 
         <div className="flex flex-col gap-2.5 lg:pt-6">
           <h1 className="text-5xl font-bold leading-none tracking-tight lg:text-[56px]">
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
             download="윤새롬_풀스택개발자_이력서.pdf"
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
         </div>
       </aside>
 
       {/* Main */}
       <main className="flex flex-1 flex-col gap-8 px-6 py-10 sm:px-12 lg:overflow-y-auto lg:px-12 lg:py-12">
         <section className="flex flex-col gap-4">
           <SectionLabel>대표 프로젝트</SectionLabel>
           <div className="grid gap-3 xl:grid-cols-2">
             {PROJECTS.map((p, i) => (
               <ProjectCard key={p.title} project={p} index={i} />
             ))}
           </div>
         </section>
 
         <div className="grid gap-3 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
           <Panel label="경력">
             <ul className="flex flex-col">
               {EXPERIENCE.map((e) => (
                 <ExperienceRow key={e.company} item={e} />
               ))}
             </ul>
           </Panel>
 
           <Panel label="기술 스택">
             <dl className="flex flex-col gap-3.5">
               {STACK.map((s) => (
                 <div key={s.area} className="flex flex-col gap-0.5">
                   <dt className={`${mono} text-xs`} style={{ color: ACCENT }}>
                     {s.area}
                   </dt>
                   <dd className="text-sm leading-relaxed text-[#c9c5be]">{s.items}</dd>
                 </div>
               ))}
             </dl>
           </Panel>
         </div>
       </main>
     </div>
   );
 }