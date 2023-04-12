import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

const map: Record<string, ReactNode> = {}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const outlet = useOutlet()
  map[location.pathname] = outlet

  const firstPath = location.pathname === '/welcome/1'
  const transitions = useTransition(location.pathname, {
    form: { transform: firstPath ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 1000 }
  })

  return transitions((style, pathName) => {
    return (
      <animated.div key={pathName} style={style}>
        {map[pathName]}
      </animated.div>
    )
  })
}
