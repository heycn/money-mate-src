import { Icon } from "../Icon"

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  request?: () => Promise<unknown>
}
const codeConfig = { type: 'text', maxLength: 6, autoComplete: "off", placeholder: '输入验证码' }

export const SmsCodeInput: React.FC<Props> = ({ value, onChange, request }) => {
  const onClick = async () => {
    if (!request) { return }
    await request()
    // 开始倒计时
  }

  return (
    <div form-item-sing-in>
      <Icon className='w-24px h-24px' name='menu' />
      <input {...codeConfig} input-sign-in value={value} onChange={e => onChange?.(e.target.value)} />
      <button type="button" send-code onClick={onClick}>发送验证码</button>
    </div>
  )
}
