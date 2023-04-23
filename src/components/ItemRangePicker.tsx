import { Tabs } from './Tabs';

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
    <Tabs tabItems={timeRanges} value={currentTimeRange} onChange={onChange} />
  )
}
