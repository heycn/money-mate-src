import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import type { Pathname } from 'react-router-dom'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

type Position = Record<'position', 'relative' | 'absolute'>

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
  const [extraStyle, setExtraStyle] = useState<Position>({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 350 },
    onStart: () => setExtraStyle({ position: 'absolute' }),
    onRest: () => setExtraStyle({ position: 'relative' })
  })

  return (
    <div className="bg-#d1ecf8" h-screen flex flex-col items-stretch>
      <header shrink-0>
        <p align-revert flex justify-end p-32px>
          <Link to="/welcome/xxx">跳过</Link>
        </p>
        <div text-center>
          <img src={logo} h-40px />
          <h1 text='#5db29e' >Money Mate</h1>
        </div>
      </header>
      <main shrink-1 grow-1 relative>
        {transitions((style, pathName) =>
          <animated.div key={pathName} style={{ ...style, ...extraStyle }} flex justify-center items-center w="100%" h="100%" >
            {map.current[pathName]}
          </animated.div>
        )}
      </main>
      <footer className="h-1/7" shrink-0 text-center text-24px >
        <Link to={linkMap[location.pathname]}>Next</Link>
      </footer>
    </div>
  )
}
