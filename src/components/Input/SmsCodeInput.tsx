import { useState, useEffect, useRef } from "react"
import { Icon } from "../Icon"
import { useCountDown } from "../../hooks/useCountDown"

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  request?: () => Promise<unknown>
}
const codeConfig = { type: 'text', maxLength: 6, autoComplete: "off", placeholder: '输入验证码' }

export const SmsCodeInput: React.FC<Props> = ({ value, onChange, request }) => {
  const [seconds, setSeconds] = useCountDown(0)

  const onClick = async () => {
    if (!request) { return }
    await request()
    setSeconds(3)
  }

  return (
    <div form-item-sing-in>
      <Icon className='w-24px h-24px' name='menu' />
      <input {...codeConfig} input-sign-in value={value} onChange={e => onChange?.(e.target.value)} />
      <button type="button" send-code onClick={onClick} disabled={seconds !== 0}>
        {seconds > 0 ? `重新发送 ${seconds}s` : '发送验证码'}
      </button>
    </div>
  )
}
