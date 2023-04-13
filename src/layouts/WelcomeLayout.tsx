import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import type { Pathname } from 'react-router-dom'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const linkMap: Record<Pathname, Pathname> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx'
}

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

  return (
    <div>
      <header>
        <p>
          <Link to="/welcome/xxx">跳过</Link>
        </p>
        <img src={logo} />
        <h1>Money Mate</h1>
      </header>
      <div>
        {transitions((style, pathName) =>
          <animated.div key={pathName} style={style}>
            {map.current[pathName]}
          </animated.div>
        )}
      </div>
      <footer>
        <Link to={linkMap[location.pathname]}>Next</Link>
      </footer>
    </div>
  )
}
