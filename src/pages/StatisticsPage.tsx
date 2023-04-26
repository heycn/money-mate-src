import { useState } from "react"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { Gradient } from "../components/Gradient"
import { ItemRangePicker, TimeRange } from "../components/ItemRangePicker"
import { TopMenu } from "../components/TopMenu"
import { TopNav } from "../components/TopNav"
import { useTitle } from "../hooks/useTitle"
import { useMenuStore } from "../stores/useMenuStore"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"

type Props = {
  title?: string
}

export const StatisticsPage: React.FC<Props> = ({ title }) => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  useTitle(title)

  return (
    <div h-screen>
      <Gradient>
        <TopNav title={title} icon="back" />
        <ItemRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </Gradient>
      <AddItemFloatButton />
    </div>
  )
}
