import { EmojiInput } from "./Input/EmojiInput"

interface Props {
  placeholder?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'emoji'
}

export const Input: React.FC<Props> = props => {
  const { placeholder, error, value, onChange, type = 'text' } = props
  const renderInput = () => {
    switch (type) {
      case 'text':
        return <input className="bg-#00000009 focus:bg-#00000004 focus:b-1 focus:b-solid focus:b-#73b19f placeholder-color-#0003"
          text-center b-1 b-transparent p-y-4px p-l-12px min-h-48px leading-24px text-16px font-bold w-full rounded-8px
          type="text"
          placeholder={placeholder}
          color="#303133" value={value}
          onChange={e => onChange?.(e.target.value)}
        />
      case 'emoji':
        return <EmojiInput />
      default:
        return null
    }
  }

  return (
    <div flex flex-col gap-y-8px>
      {renderInput()}
      <span text-red text-12px>{error}</span>
    </div>
  )
}
