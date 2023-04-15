import logo from '../assets/images/logo.svg'
import useSWR from 'swr'
import axios from 'axios'
import { ajax } from '../lib/ajax'

export const Home: React.FC = () => {
  const { data, error } = useSWR('/api/v1/me', path => {
    return ajax.get(path)
  })
  console.log('data:', data)
  console.log('error', error)

  return (
    <div text-center flex-col bg="#d1ecf8" h-screen >
      <img mt='1/4' h-32 src={logo} />
      <h1 text-center leading-32 text-6 font-500>
        好好记账 自由生活
      </h1>
      <div h-48px bg='#36b59d' rounded-7 mx-12px>
        <button w='100%' h='100%' text-16px font-700 text-white>
          去记账
        </button>
      </div>
    </div>
  )
}
