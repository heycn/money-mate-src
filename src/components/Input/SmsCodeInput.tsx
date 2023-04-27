import { useState, useEffect, useRef } from "react"
import { Icon } from "../Icon"

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  request?: () => Promise<unknown>
}
const codeConfig = { type: 'text', maxLength: 6, autoComplete: "off", placeholder: '输入验证码' }
const maxCount = 60

export const SmsCodeInput: React.FC<Props> = ({ value, onChange, request }) => {
  const [started, setStarted] = useState<Date>()
  const [count, setCount] = useState(maxCount)
  const timer = useRef<number>()

  useEffect(() => {
    if (!started) {
      clearTimer()
      return
    }
    timer.current = window.setInterval(() => {
      const seconds = Math.round((new Date().getTime() - started.getTime()) / 1000)
      const count = maxCount - seconds
      if (count < 0) { setStarted(void 0) }
      setCount(count)
    }, 1000)
    return clearTimer()
  }, [started])

  const clearTimer = () => {
    if (timer.current) {
      window.clearInterval(timer.current)
      timer.current = undefined
    }
  }
  const onClick = async () => {
    if (!request) { return }
    await request()
    setStarted(new Date())
  }

  return (
    <div form-item-sing-in>
      <Icon className='w-24px h-24px' name='menu' />
      <input {...codeConfig} input-sign-in value={value} onChange={e => onChange?.(e.target.value)} />
      <button type="button" send-code onClick={onClick} disabled={!!started}>
        {started ? `重新发送 ${count}s` : '发送验证码'}
      </button>
    </div>
  )
}
