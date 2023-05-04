import { animated, useSpring } from '@react-spring/web'
import { Menu } from './TopMenu/Menu'
import { User } from './TopMenu/User'
import { useState } from 'react'
import { comfirmable } from '../lib/comfirmable'

interface Props {
  onClickMask: () => void
  visible: boolean
}

export const TopMenu: React.FC<Props> = ({ onClickMask, visible }) => {
  const [maskVisible, setMaskVisible] = useState(visible)
  const maskSpringStyle = useSpring({
    opacity: visible ? 1 : 0,
    onStart: ({ value }) => value.opacity < 0.1 && setMaskVisible(true),
    onRest: ({ value }) => value.opacity < 0.1 && setMaskVisible(false)
  })
  const menuSpringStyle = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0%)' : 'translateX(-100%)'
  })
  const maskStyle = {
    ...maskSpringStyle,
    visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
  }
  const signOut = comfirmable('确定要退出登录吗？', () => {
    window.localStorage.removeItem('jwt')
    window.location.reload()
  })

  return (
    <>
      <animated.div fixed top-0 left-0 w="100%" h="100%" className="bg-black:30"
        style={maskStyle} z="[calc(var(--z-menu)-1)]" onClick={onClickMask}
      />
      <animated.div fixed top-0 left-0 w-78vw h-screen flex flex-col shadow-2xl shadow-truegray-6
        style={menuSpringStyle} bg='#f5f5f5' p-16px z="[calc(var(--z-menu)-1)]">
        <User className="grow-0 shrink-0" />
        <Menu className="grow-1 shrink-1" />
        <button m-btn mb-24px onClick={signOut}>退出登录</button>
      </animated.div>
    </>
  )
}
