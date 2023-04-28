import logo from '../assets/images/logo.svg'
import useSWR from 'swr'
import { useAjax } from '../lib/ajax'
import { Navigate, useNavigate } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
import { Loading } from '../components/Loading'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { AxiosError } from 'axios'

interface Props {
  title?: string
}
export const Home: React.FC<Props> = props => {
  useTitle(props?.title)
  const {get} = useAjax()
  const nav = useNavigate()
  const onHttpError = (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 401) {
        nav('/sign_in')
      }
    }
    throw error
  }
  const { data: meData, error: meError, isLoading: meLoading } = useSWR('/api/v1/me', async path => {
    // 如果返回 403 就让用户先登录
    const response = await get<Resource<User>>(path).catch(onHttpError)
    return response.data.resource
  })
  const { data: itemsData, error: itemsError, isLoading: itemsLoading } = useSWR(
    meData ? '/api/v1/items' : null,
    async path => (await get<Resources<Item>>(path)).data
  )

  if (meLoading || itemsLoading) {
    return <Loading />
  }
  if (itemsData?.resources[0]) {
    return <Navigate to="/items" replace />
  }

  return (
    <div text-center flex-col h-screen bg='#ebf5f6' bg-gradient='to-br from-#addcd4'>
      <img mt='1/4' h-32 src={logo} />
      <h1 text-center leading-32 text-6 font-500>
        好好记账 自由生活
      </h1>
      <div px-16px>
        <button m-btn>去记账</button>
      </div>
      <AddItemFloatButton />
    </div>
  )
}
