import logo from '../assets/images/logo.svg'
import { useTitle } from '../hooks/useTitle'
import bottom from '../assets/images/bottom.svg'
import { hasError, validate } from '../lib/validate'
import { useSignInStore } from '../stores/useSignInStore'
import { FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { ajax } from '../lib/ajax'
import { Input } from '../components/Input'

interface Props {
  title?: string
}

export const SignInPage: React.FC<Props> = props => {
  useTitle(props?.title)
  const { data, error, setData, setError } = useSignInStore()
  const nav = useNavigate()
  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    const newError = validate(data, [
      { key: 'email', type: 'required', message: '没输入邮箱地址!' },
      { key: 'email', type: 'pattern', regex: /^.+@.+$/, message: '邮箱格式不正确!' },
      { key: 'code', type: 'required', message: '没输入验证码!' },
      { key: 'code', type: 'length', min: 6, max: 6, message: '验证码必须是6位!' }
    ])
    setError(newError)
    if (!hasError(newError)) {
      await ajax.post('/api/v1/session', data)
      // TODO
      // 保存 JWT 作为登录凭证
      nav('/home', { replace: true })
    }
  }
  const onClickCode = () => {
    const newError = validate({ email: data.email }, [
      { key: 'email', type: 'required', message: '没输入邮箱地址!' },
      { key: 'email', type: 'pattern', regex: /^.+@.+$/, message: '邮箱格式不正确!' }
    ])
    setError(newError)
    if (hasError(newError)) {
      console.log('有错')
    } else {
      console.log('没错')
      // 请求
    }
  }

  return (
    <div fixed left-0 top-0 w-screen h-screen flex flex-col justify-between bg='#f6f6f6'>
      <div px-26px z="[calc(var(--z-menu))]">
        <div my='1/7' text-center>
          <img h-48px src={logo} />
          <h2 pt-16px text-22px text='#5eb39e'>登录 MoneyMate</h2>
        </div>
        <form flex flex-col onSubmit={onSubmit}>
          <Input
            type="email"
            value={data.email}
            onChange={email => setData({ email })}
            error={error.email?.[0]}
          />
          <Input
            type="sms_code"
            value={data.code}
            onChange={code => setData({ code })}
            onClick={onClickCode}
            error={error.code?.[0]}
          />
          <button mt-64px m-btn type='submit'>登录</button>
        </form>
      </div>
      <img className='fixed bottom--32px left-0 w-100%' src={bottom} z="[calc(var(--z-menu)-1)]" />
    </div>
  )
}
