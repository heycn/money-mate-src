import logo from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
  return (
    <div>
      <img src={logo} h-160px />
      <h2 text-center mt-48px>
        云端备份<br />
        无需担心数据丢失
      </h2>
    </div>
  )
}
