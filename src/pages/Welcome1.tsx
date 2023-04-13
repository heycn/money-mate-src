import logo from '../assets/images/welcome1.svg'

export const Welcome1: React.FC = () => {
  return (
    <div>
      <img src={logo} w-200px />
      <h2 text-center>
        Money Mate <br />
        你的记账伴侣
      </h2>
    </div>
  )
}
