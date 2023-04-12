import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const firstPath = location.pathname === '/welcome/1'

  const transitions = useTransition(location.pathname, {
    form: { transform: firstPath ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 350 }
  })

  return transitions((style, pathName) =>
    <animated.div key={pathName} style={style}>
      {map.current[pathName]}
    </animated.div>
  )
}
