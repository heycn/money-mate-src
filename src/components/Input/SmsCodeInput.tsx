import { Icon } from "../Icon"

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  onClick?: () => void
}
const codeConfig = { type: 'text', maxLength: 6, autoComplete: "off", placeholder: '输入验证码' }

export const SmsCodeInput: React.FC<Props> = props => {
  const { value, onChange, onClick } = props
  return (
    <div form-item-sing-in>
      <Icon className='w-24px h-24px' name='menu' />
      <input {...codeConfig} input-sign-in
        value={value} onChange={e => onChange?.(e.target.value)}
      />
      <button type="button" send-code onClick={onClick}>发送验证码</button>
    </div>
  )
}
