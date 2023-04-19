import logo from '../assets/images/logo.svg'
import { useTitle } from '../hooks/useTitle'
import bottom from '../assets/images/bottom.svg'
import { Icon } from '../components/Icon'

interface Props {
  title?: string
}
const property = {
  email: { placeholder: '请输入邮箱', type: 'email', autoComplete: "off" },
  code: { type: 'text', maxLength: 6, autoComplete: "off", placeholder: '输入验证码' }
}
export const SignInPage: React.FC<Props> = props => {
  useTitle(props?.title)

  return (
    <div fixed left-0 top-0 w-screen h-screen flex flex-col justify-between bg='#f6f6f6'>
      <div px-26px z="[calc(var(--z-menu))]">
        <div my='1/7' text-center>
          <img h-48px src={logo} />
          <h2 pt-16px text-22px text='#5eb39e'>登陆 MoneyMate</h2>
        </div>
        <form flex flex-col>
          <div form-item-sing-in>
            <Icon className='w-24px h-24px' name='menu' />
            <input {...property.email} w-full input-sign-in />
          </div>
          <div {...property.code} pt-16px form-item-sing-in>
            <Icon className='w-24px h-24px' name='menu' />
            <input input-sign-in />
            <button send-code>发送验证码</button>
          </div>
        </form>
        <button mt-64px m-btn>登陆</button>
      </div>
      <img className='fixed bottom--32px left-0 w-100%' src={bottom} z="[calc(var(--z-menu)-1)]" />
    </div>
  )
}
