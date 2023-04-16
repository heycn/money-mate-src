import c from 'classnames'

interface Props {
  className?: string
  name: string
  onClick?: () => void
}
export const Icon: React.FC<Props> = ({ name, className, onClick }) => {
  return (
    <svg className={c(className, 'm-icon')} onClick={onClick}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}