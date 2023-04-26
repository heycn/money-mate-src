import { EmojiInput } from "./Input/EmojiInput"

type Props = {
  placeholder?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  disabledError?: boolean
} & (
    | { type: 'text' }
    | { type: 'emoji' }
    | { type: 'select'; options: { value: string; text: string }[] }
  )

export const Input: React.FC<Props> = props => {
  const { placeholder, error, value, onChange, disabledError } = props
  const renderInput = () => {
    switch (props.type) {
      case undefined:
      case 'text':
        return <input className=" focus:bg-#00000004 focus:b-1 focus:b-solid focus:b-#73b19f placeholder-color-#0003"
          bg="#00000009" text-center b-1 b-transparent p-y-4px p-l-12px min-h-48px leading-24px text-16px font-bold w-full rounded-8px
          type="text"
          placeholder={placeholder}
          color="#303133" value={value}
          onChange={e => onChange?.(e.target.value)}
        />
      case 'emoji':
        return <EmojiInput value={value} onChange={onChange} />
      case 'select':
        return <select value={value} onChange={e => onChange?.(e.target.value)}
          className="h-36px">
          {props.options.map(option =>
            <option value={option.value}> {option.text} </option>
          )}
        </select>
      default:
        return null
    }
  }

  return (
    <div flex flex-col gap-y-8px>
      {renderInput()}
      {disabledError ? null : <span text-red text-12px>{error || '　'}</span>}
    </div>
  )
}
