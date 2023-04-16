import { Icon } from "./Icon"

export const AddItemFloatButton: React.FC = () => {
  return (
    <button w-56px h-56px rounded="50%" fixed flex justify-center items-center
      bg='#5eb39e' text='#f4f4f4' bottom-16px right-16px p-4px b-none>
      <Icon name="add" className="w-32px h-32px" />
    </button>
  )
}
