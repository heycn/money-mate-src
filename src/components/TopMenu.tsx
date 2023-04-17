import { Menu } from './TopMenu/Menu'
import { User } from './TopMenu/User'

export const TopMenu: React.FC = () => {
  return (
    <div fixed top-0 left-0 w-78vw h-screen flex flex-col bg='#f5f5f5' p-16px>
      <User className="grow-0 shrink-0" />
      <Menu className="grow-1 shrink-1" />
    </div>
  )
}
