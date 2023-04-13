import p1 from '../assets/images/welcome1.svg'

export const Welcome1: React.FC = () => {
  return (
    <div>
      <img src={p1} w-200px />
      <h2 text-center>
        MoneyMate <br />
        你的资金管家
      </h2>
    </div>
  )
}
