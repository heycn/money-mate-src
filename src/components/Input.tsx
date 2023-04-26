import { Data } from "../lib/validate"
import { Icon } from "./Icon"
import { EmojiInput } from "./Input/EmojiInput"
import { SmsCodeInput } from "./Input/SmsCodeInput"

type Props = {
  placeholder?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
} & (
    | { type: 'text' }
    | { type: 'emoji' }
    | { type: 'email' }
    | { type: 'sms_code'; request: () => Promise<unknown> }
    | { type: 'select'; options: { value: string; text: string }[] }
  )

const emailConfig = { placeholder: '请输入邮箱', type: 'text', autoComplete: "off" }

export const Input: React.FC<Props> = props => {
  const { placeholder, error, value, onChange } = props
  const renderInput = () => {
    switch (props.type) {
      case undefined:
      case 'text':
        return <>
          <input className=" focus:bg-#00000004 focus:b-1 focus:b-solid focus:b-#73b19f placeholder-color-#0003"
            bg="#00000009" text-center b-1 b-transparent p-y-4px p-l-12px min-h-48px leading-24px text-16px font-bold w-full rounded-8px
            type="text"
            placeholder={placeholder}
            color="#303133" value={value}
            onChange={e => onChange?.(e.target.value)}
          />
          <span text-red text-12px>{error || '　'}</span>
        </>
      case 'emoji':
        return <>
          <EmojiInput value={value} onChange={onChange} />
          <span text-red text-12px>{error || '　'}</span>
        </>
      case 'select':
        return <select value={value} onChange={e => onChange?.(e.target.value)}
          className="h-36px">
          {props.options.map(option =>
            <option key={option.value} value={option.value}> {option.text} </option>
          )}
        </select>
      case 'email':
        return <>
          <div form-item-sing-in>
            <Icon className='w-24px h-24px' name='menu' />
            <input {...emailConfig} w-full input-sign-in
              value={value}
              onChange={e => onChange?.(e.target.value)}
            />
          </div>
          <p pl-34px text-red>{error || '　'}</p>
        </>
      case 'sms_code':
        return <>
          <SmsCodeInput value={value} onChange={onChange} request={props.request} />
          <p pl-34px text-red>{error || '　'}</p>
        </>
      default:
        return null
    }
  }

  return (
    <div flex flex-col gap-y-8px>
      {renderInput()}
    </div>
  )
}
