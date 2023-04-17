import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

interface Props {
  className?: string
}
export const User: React.FC<Props> = ({ className }) => {
  return (
    <Link to='/sign_in' replace w="100%" className={className} mt-24px flex mb-32px>
      <img src={logo} w-48px ml-4px mr-16px />
      <div flex flex-col justify-between>
        <h1 text-22px text='#181818' font-500 mb-4px>MoneyMate</h1>
        <p text-15px text="#666" font-300>触手可得的记账伴侣</p>
      </div>
    </Link>
  )
}
