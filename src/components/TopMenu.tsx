import { Menu } from './TopMenu/Menu'
import { User } from './TopMenu/User'

interface Props {
  onClickMask: () => void
}

export const TopMenu: React.FC<Props> = ({ onClickMask }) => {
  return (
    <>
      <div fixed top-0 left-0 w="100%" h="100%" className="bg-black:30"
        z="[calc(var(--z-menu)-1)]" onClick={onClickMask}
      />
      <div fixed top-0 left-0 w-78vw h-screen flex flex-col shadow-2xl shadow-truegray-6
        bg='#f5f5f5' p-16px z="[calc(var(--z-menu)-1)]">
        <User className="grow-0 shrink-0" />
        <Menu className="grow-1 shrink-1" />
      </div>
    </>
  )
}
