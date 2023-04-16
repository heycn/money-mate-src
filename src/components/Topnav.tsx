import { Icon } from "./Icon"

interface Props {
  title?: string
}
export const Topnav: React.FC<Props> = ({ title = 'MoneyMate' }) => {
  return (
    <div text='#73b19f' flex items-center py-16px>
      <Icon name="menu" className="color-#73b19f h-24px w-24px" />
      <h1 text-18px font-700 w='100%' mr-24px text-center>{title}</h1>
    </div>
  )
}
