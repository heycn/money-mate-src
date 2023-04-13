import logo from '../assets/images/welcome2.svg'

export const Welcome2: React.FC = () => {
  return (
    <div>
      <img src={logo} h-160px />
      <h2 text-center mt-48px>
        每日提醒<br />
        养成记账好习惯
      </h2>
    </div>
  )
}
