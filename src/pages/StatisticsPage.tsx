import { useState } from "react"
import useSWR from 'swr'
import { Gradient } from "../components/Gradient"
import { TimeRangePicker, TimeRange } from "../components/TimeRangePicker.tsx"
import { TopNav } from "../components/TopNav"
import { useTitle } from "../hooks/useTitle"
import { LineChart } from "../components/LineChart"
import { PieChart } from "../components/PieChart"
import { RankChart } from "../components/RankChart"
import { Input } from "../components/Input"
import { useAjax } from '../lib/ajax'
import type { Time } from '../lib/time'
import { time } from '../lib/time'

type Props = {
  title?: string
}

type Groups = { happen_at: string; amount: number }[]
type Groups2 = { tag_id: number; tag: Tag; amount: number }[]
const format = 'yyyy-MM-dd'

export const StatisticsPage: React.FC<Props> = ({ title }) => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  useTitle(title)
  const [kind, setKind] = useState('expenses')
  const { get } = useAjax({ showLoading: false, handleError: true })

  const generateStartEnd = () => {
    if (currentTimeRange === 'thisMonth') {
      const start = time().firstDayOfMonth
      const end = time().lastDayOfMonth.add(1, 'day')
      return { start, end }
    } else {
      return { start: time(), end: time() }
    }
  }
  const generateDefaultItems = (time: Time) => {
    return Array.from({ length: start.dayCountOfMonth }).map((_, i) => {
      const x = start.clone.add(i, 'day').format(format)
      return { x, y: 0 }
    })
  }
  const { start, end } = generateStartEnd()
  const defaultItems = generateDefaultItems(start)
  const { data: items } = useSWR(`/api/v1/items/summary?happened_after=${start}&happened_before=${end}&kind=${kind}&group_by=happen_at`,
    async (path) =>
      (await get<{ groups: Groups; total: number }>(path)).data.groups
        .map(({ happen_at, amount }) => ({ x: happen_at, y: (amount / 100).toFixed(2) }))
  )
  const normalizedItems = defaultItems?.map((defaultItem, index) =>
    items?.find((item) => item.x === defaultItem.x) || defaultItem
  )

  const { data: items2 } = useSWR(`/api/v1/items/summary?happened_after=${start}&happened_before=${end}&kind=${kind}&group_by=tag_id`,
    async (path) =>
      (await get<{ groups: Groups2; total: number }>(path)).data.groups
        .map(({ tag_id, tag, amount }) =>
          ({ name: tag.name, value: (amount / 100).toFixed(2), sign: tag.sign }))
  )
  const items3 = [
    { tag: { name: '吃饭', sign: '😨' }, amount: 10000 },
    { tag: { name: '打车', sign: '🥱' }, amount: 20000 },
    { tag: { name: '买皮肤', sign: '💖' }, amount: 68800 },
  ].map(item => ({ name: item.tag.name, value: item.amount, sign: item.tag.sign }))

  return (
    <div>
      <Gradient>
        <TopNav title={title} icon="back" />
        <TimeRangePicker
          currentTimeRange={currentTimeRange}
          onChange={setCurrentTimeRange}
          timeRanges={[
            { key: 'thisMonth', text: '本月' },
            { key: 'lastMonth', text: '上月' },
            { key: 'twoMonthsAgo', text: '两个月前' },
            { key: 'threeMonthsAgo', text: '三个月前' },
          ]}
        />
      </Gradient>
      <div flex p-16px items-center gap-x-16px>
        <span grow-0 shrink-0>类型</span>
        <div grow-1 shrink-1>
          <Input
            type="select"
            options={[
              { text: '支出', value: 'expenses' },
              { text: '收入', value: 'income' }
            ]}
            value={kind} onChange={value => setKind(value)}
          />
        </div>
      </div>
      <LineChart className="h-120px" items={normalizedItems} />
      <PieChart className="h-260px m-t-16px" items={items2} />
      <RankChart className="m-t-8px" items={items3} />
    </div>
  )
}
