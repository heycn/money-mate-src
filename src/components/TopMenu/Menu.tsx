import styled from 'styled-components'
import { Icon } from '../Icon'
import { NavLink } from 'react-router-dom'

interface Props {
  className?: string
}

const MenuIcon = styled(Icon)`
  width: 20px; height: 20px; margin-right: 12px;
`
const RightIcon = styled(Icon)`
  width: 16px; height: 16px; color: #999;
`
const items = [
  { icon: 'menu', text: '统计图表', to: '/statistics' },
  { icon: 'menu', text: '导出数据' },
  { icon: 'menu', text: '自定义标签' },
  { icon: 'menu', text: '记账提醒' },
]

export const Menu: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ul bg-white text-16px pl-16px pr-8px rounded-8px shadow-xl shadow-light-7>
        {items.map(({ icon, text, to }) => (
          <li key={text} children-flex children-justify-between children-items-center children-py-4>
            {to
              ? <NavLink to={to} replace>
                <span flex items-center><MenuIcon name={icon} />{text}</span>
                <RightIcon name="right" />
              </NavLink>
              : <div onClick={() => window.alert('敬请期待！')}>
                <span flex items-center><MenuIcon name={icon} />{text}</span>
                <RightIcon name="right" />
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
