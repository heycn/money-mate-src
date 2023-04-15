export const AddItemFloatButton: React.FC = () => {
  return (
    <button w-56px h-56px bg="#5C33BE" rounded="50%"
      p-4px b-none text-white fixed bottom-16px right-16px>
      <svg style={{ fill: 'white', width: '1.2em', height: '1.2em' }}>
        <use xlinkHref='#add'></use>
      </svg>
    </button>
  )
}
