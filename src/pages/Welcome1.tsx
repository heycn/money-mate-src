import logo from '../assets/images/welcome1.svg'

export const Welcome1: React.FC = () => {
  return (
    <div>
      <img src={logo} h-160px />
      <h2 text-center mt-24px text='#72b09f'>
        Money Mate <br />
        你的记账伴侣
      </h2>
    </div>
  )
}
