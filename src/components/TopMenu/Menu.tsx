import styled from 'styled-components'
import { Icon } from '../Icon'

interface Props {
  className?: string
}

const MenuIcon = styled(Icon)`
  width: 20px; height: 20px; margin-right: 12px;
`
const RightIcon = styled(Icon)`
  width: 16px; height: 16px; color: #999;
`

export const Menu: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ul bg-white text-16px pl-16px pr-8px children-flex children-justify-between
        children-items-center children-py-4 rounded-8px shadow-xl shadow-light-7>
        <li>
          <span flex items-center><MenuIcon name="menu" />统计图表</span>
          <RightIcon name="right" />
        </li>
        <li>
          <span flex items-center><MenuIcon name="menu" />导出数据</span>
          <RightIcon name="right" />
        </li>
        <li>
          <span flex items-center><MenuIcon name="menu" />自定义分类</span>
          <RightIcon name="right" />
        </li>
        <li>
          <span flex items-center><MenuIcon name="menu" />记账提醒</span>
          <RightIcon name="right" />
        </li>
      </ul>
    </div>
  )
}
