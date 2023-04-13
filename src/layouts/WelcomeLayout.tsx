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
    <div className="bg-#d1ecf8" h-screen flex flex-col items-stretch>
      <header shrink-0>
        <p align-revert flex justify-end p-32px>
          <Link to="/welcome/xxx">跳过</Link>
        </p>
        <div text-center>
          <img src={logo} w-50px />
          <h1 text='#5db29e' >Money Mate</h1>
        </div>
      </header>
      <main shrink-0 grow-1 flex justify-center items-center>
        {transitions((style, pathName) =>
          <animated.div key={pathName} style={style}>
            {map.current[pathName]}
          </animated.div>
        )}
      </main>
      <footer shrink-0 text-center text-24px pb-64px pt-64px>
        <Link to={linkMap[location.pathname]}>Next</Link>
      </footer>
    </div>
  )
}
