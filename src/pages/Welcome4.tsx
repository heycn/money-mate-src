import logo from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
  return (
    <div>
      <img src={logo} w-200px />
      <h2 text-center>
        云端备份<br />
        无需担心数据丢失
      </h2>
    </div>
  )
}
