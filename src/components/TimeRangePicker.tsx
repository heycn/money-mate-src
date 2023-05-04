import { Tabs } from './Tabs'
export type TimeRange =
  | 'thisMonth'
  | 'lastMonth'
  | 'thisYear'
  | 'custom'
  | 'twoMonthsAgo'
  | 'threeMonthsAgo'

const defaultTimeRanges: { key: TimeRange; text: string }[] = [
  { key: 'thisMonth', text: '本月' },
  { key: 'lastMonth', text: '上月' },
  { key: 'thisYear', text: '今年' },
  { key: 'custom', text: '自定义时间' },
]
type Props = {
  currentTimeRange: TimeRange
  onChange: (selected: TimeRange) => void
  timeRanges?: { key: TimeRange; text: string }[]
}
export const TimeRangePicker: React.FC<Props> = (props) => {
  const { currentTimeRange, onChange, timeRanges = defaultTimeRanges } = props
  return (
    <Tabs tabItems={timeRanges} value={currentTimeRange} onChange={onChange} />
  )
}
