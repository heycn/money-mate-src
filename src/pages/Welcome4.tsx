import logo from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
  return (
    <div>
      <img src={logo} h-160px />
      <h2 text-center mt-24px text='#72b09f'>
        云端备份<br />
        无需担心数据丢失
      </h2>
    </div>
  )
}
