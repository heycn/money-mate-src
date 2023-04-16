import s from './TimeRangePicker.module.scss'

export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
interface Props {
  currentTimeRange: TimeRange,
  onChange: (selected: TimeRange) => void
}
const timeRanges: { key: TimeRange; text: string }[] = [
  { key: 'thisMonth', text: '本月' },
  { key: 'lastMonth', text: '上月' },
  { key: 'thisYear', text: '今年' },
  { key: 'custom', text: '自定义时间' }
]
export const ItemRangePicker: React.FC<Props> = ({ currentTimeRange, onChange }) => {
  return (
    <ol flex text='#798196' children-p-12px text-16px cursor-pointer gap-8px overflow-scroll>
      {timeRanges.map(({ key, text }) => (
        <li key={key} onClick={() => onChange(key)}
          className={key === currentTimeRange ? s.selected : ''}
        >
          {text}
        </li>
      ))}
    </ol>
  )
}
