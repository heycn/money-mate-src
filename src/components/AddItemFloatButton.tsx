import { Link } from 'react-router-dom'
import { Icon } from "./Icon"

export const AddItemFloatButton: React.FC = () => {
  return (
    <Link to="/items/new" replace>
      <button w-48px h-48px rounded="50%" fixed flex justify-center items-center
        bg='#5eb39e' text='#f4f4f4' bottom-24px right-24px p-4px b-none>
        <Icon name="add" className="w-24px h-24px" />
      </button>
    </Link>
  )
}
