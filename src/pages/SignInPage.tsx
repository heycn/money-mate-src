import logo from '../assets/images/logo.svg'
import { useTitle } from '../hooks/useTitle'
import bottom from '../assets/images/bottom.svg'

interface Props {
  title?: string
}
export const SignInPage: React.FC<Props> = props => {
  useTitle(props?.title)

  return (
    <div h-screen flex flex-col justify-between bg='#f6f6f6'>
      <div px-26px>
        <div text-center>
          <img my='1/6' h-20 src={logo} />
        </div>
        <h2 py-16px text-18px font-300 text='#181818'>使用邮箱进行登陆</h2>
        <p font-300 text='#999' pt-8px pb-16px>如果懒得获取验证码 你可以使用<code>123456</code></p>
        <button m-btn>登陆</button>
      </div>
      <img className='w-100%' src={bottom} />
    </div>
  )
}
