import Portfolio from './Portfolio'
import Skill from './Skill'

// 주소가 /skill 이면 스킬 인벤토리, 그 외에는 포트폴리오
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/skill') return <Skill />
  return <Portfolio />
}
