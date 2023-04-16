import { useMenuStore } from "../stores/useMenuStore"
import { Icon } from "./Icon"

interface Props {
  title?: string
}

export const TopNav: React.FC<Props> = ({ title = 'MoneyMate' }) => {
  const { visible, setVisible } = useMenuStore()

  return (
    <div text='#73b19f' flex items-center py-16px>
      <Icon name="menu" className="color-#73b19f h-26px w-26px"
        onClick={() => setVisible(!visible)} />
      <h1 text-18px font-700 w='100%' mr-24px text-center>{title}</h1>
    </div>
  ) 
}
