import type { ChangeEvent, ReactNode } from 'react'
import { DateInput } from './Input/DateInput'
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
    | { type?: 'text' }
    | { type: 'emoji' }
    | { type: 'email' }
    | { type: 'date' }
    | { type: 'sms_code'; request: () => Promise<unknown> }
    | { type: 'select'; options: { value: string; text: string }[] }
  )

const emailConfig = { placeholder: '请输入邮箱', type: 'text', autoComplete: "off" }

export const Input: React.FC<Props> = props => {
  const { placeholder, value, onChange: _onChange, error } = props
  const onChange = (e: string | ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (typeof e === 'string') {
      _onChange?.(e)
    } else {
      _onChange?.(e.target.value)
    }
  }
  const common = { value, onChange, placeholder }

  const renderInput = () => {
    switch (props.type) {
      case undefined:
      case 'text':
        return <>
          <input className="focus:bg-#00000004 focus:b-1 focus:b-solid focus:b-#73b19f placeholder-color-#0003"
            bg="#00000009" text-center b-1 b-transparent p-y-4px p-x-12px min-h-48px leading-24px text-16px font-bold w-full rounded-8px
            type="text"
            color="#303133"
            {...common}
          />
          <span text-red text-12px>{error || '　'}</span>
        </>
      case 'emoji':
        return <>
          <EmojiInput {...common} />
          <span text-red text-12px>{error || '　'}</span>
        </>
      case 'select':
        return <select className="h-36px" {...common}>
          {props.options.map(option =>
            <option key={option.value} value={option.value}> {option.text} </option>
          )}
        </select>
      case 'email':
        return <>
          <div form-item-sing-in>
            <Icon className='w-24px h-24px' name='menu' />
            <input {...emailConfig} w-full input-sign-in {...common} />
          </div>
          <p pl-34px text-red>{error || '　'}</p>
        </>
      case 'sms_code':
        return <>
          <SmsCodeInput {...common} request={props.request} />
          <p pl-34px text-red>{error || '　'}</p>
        </>
      case 'date':
        return <>
          <DateInput {...common} />
          <span text-red text-12px>{error || '　'}</span>
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
