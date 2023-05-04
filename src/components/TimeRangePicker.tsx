import { useState } from 'react'
import { usePopup } from '../hooks/usePopup'
import type { Time } from '../lib/time'
import { time } from '../lib/time'
import { Tabs } from './Tabs'
import { Input } from './Input'

export type TimeRange = {
  start: Time
  end: Time
  name:
  | 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
  | 'twoMonthsAgo' | 'threeMonthsAgo'
}

const defaultTimeRanges: { key: TimeRange; text: string }[] = [
  {
    text: '本月',
    key: { name: 'thisMonth', start: time().firstDayOfMonth, end: time().lastDayOfMonth.add(1, 'day') },
  },
  {
    text: '上月',
    key: { name: 'lastMonth', start: time().add(-1, 'month').firstDayOfMonth, end: time().add(-1, 'month').lastDayOfMonth.add(1, 'day') },
  },
  {
    text: '今年',
    key: { name: 'thisYear', start: time().set({ month: 1 }).firstDayOfMonth, end: time().set({ month: 12 }).lastDayOfMonth.add(1, 'day') },
  },
  {
    text: '自定义时间',
    key: { name: 'custom', start: time(), end: time() },
  },
]
type Props = {
  currentTimeRange: TimeRange
  onChange: (selected: TimeRange) => void
  timeRanges?: { key: TimeRange; text: string }[]
}
export const TimeRangePicker: React.FC<Props> = (props) => {
  const { currentTimeRange, onChange: _onSelect, timeRanges = defaultTimeRanges } = props
  const [start, setStart] = useState<string>('')
  const [end, setEnd] = useState<string>('')
  const onConfirm = () => {
    _onSelect({
      name: 'custom',
      start: time(start),
      end: time(end).add(1, 'day')
    })
  }
  const { popup, show } = usePopup({
    zIndex: 'var(--z-dialog)',
    children: <div w-72vw>
      <header text-18px text="[var(--primary-color)]" text-center py-14px px-16px>请选择时间</header>
      <main px-16px pt-6px>
        <Input type="date" value={start} onChange={d => setStart(d)} placeholder='开始时间' />
        <Input type="date" value={end} onChange={d => setEnd(d)} placeholder='结束时间' />
      </main>
      <footer pb-24px px-16px>
        <button m-btn onClick={onConfirm}>确认</button>
      </footer>
    </div>,
    position: 'center'
  })
  const onSelect = (timeRange: TimeRange) => {
    if (timeRange.name === 'custom') {
      // 弹框
      show()
    } else {
      _onSelect(timeRange)
    }
  }
  return (
    <>
      {popup}
      <Tabs tabItems={defaultTimeRanges} value={currentTimeRange} onChange={onSelect} />
    </>
  )
}
