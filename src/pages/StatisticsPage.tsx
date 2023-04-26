import { useState } from "react"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { Gradient } from "../components/Gradient"
import { ItemRangePicker, TimeRange } from "../components/ItemRangePicker"
import { TopNav } from "../components/TopNav"
import { useTitle } from "../hooks/useTitle"
import { LineChart } from "../components/LineChart"

type Props = {
  title?: string
}

export const StatisticsPage: React.FC<Props> = ({ title }) => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  useTitle(title)

  const items = [
    { date: '2000-01-01', value: 15000 },
    { date: '2000-01-02', value: 25000 },
    { date: '2000-01-31', value: 10000 },
  ].map(item => ({ x: item.date, y: item.value }))

  return (
    <div>
      <Gradient>
        <TopNav title={title} icon="back" />
        <ItemRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </Gradient>
      <AddItemFloatButton />
      <LineChart className="h-400px" items={items} />
    </div>
  )
}
