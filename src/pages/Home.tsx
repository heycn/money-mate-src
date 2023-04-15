import logo from '../assets/images/logo.svg'
import useSWR from 'swr'
import { ajax } from '../lib/ajax'
import { Navigate } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
import { Loading } from '../components/Loading'
import { AddItemFloatButton } from '../components/AddItemFloatButton'

interface Props {
  title?: string
}
export const Home: React.FC<Props> = props => {
  useTitle(props?.title)
  const { data: meData, error: meError, isLoading: meLoading } = useSWR(
    '/api/v1/me',
    async path => (await ajax.get<Resource<User>>(path)).data.resource
  )
  const { data: itemsData, error: itemsError, isLoading: itemsLoading } = useSWR(
    meData ? '/api/v1/items' : null,
    async path => (await ajax.get<Resources<Item>>(path)).data
  )

  if (meLoading || itemsLoading) {
    return <Loading />
  }
  if (itemsData?.resources[0]) {
    return <Navigate to="/items" replace />
  }

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
      <AddItemFloatButton />
    </div>
  )
}
