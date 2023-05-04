import { useState } from "react"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { TimeRangePicker, TimeRange } from "../components/TimeRangePicker"
import { time } from '../lib/time'
import { timeRangeToStartAndEnd } from '../lib/timeRangeToStartAndEnd'
import { TopNav } from "../components/TopNav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import { useTitle } from "../hooks/useTitle"
import { useMenuStore } from "../stores/useMenuStore"
import { TopMenu } from "../components/TopMenu"
import { Gradient } from "../components/Gradient"

interface Props {
  title?: string
}

export const ItemsPage: React.FC<Props> = ({ title }) => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  const { visible, setVisible } = useMenuStore()
  const { start, end } = timeRangeToStartAndEnd(currentTimeRange)
  useTitle(title)

  return (
    <div h-screen>
      <Gradient>
        <TopNav title={title} icon="menu" />
        <TimeRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </Gradient>
      <ItemsSummary />
      <ItemsList start={start} end={end} />
      <AddItemFloatButton />
      <TopMenu visible={visible} onClickMask={() => setVisible(false)} />
    </div>
  )
}
