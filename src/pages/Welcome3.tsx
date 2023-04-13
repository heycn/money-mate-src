import logo from '../assets/images/welcome3.svg'

export const Welcome3: React.FC = () => {
  return (
    <div>
      <img src={logo} h-160px />
      <h2 text-center mt-48px>
        可视化图表<br />
        收入支出一目了然
      </h2>
    </div>
  )
}
