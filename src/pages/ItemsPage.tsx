import { useState } from "react"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { ItemRangePicker, TimeRange } from "../components/ItemRangePicker"
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import { useTitle } from "../hooks/useTitle"

export const ItemsPage: React.FC = () => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  useTitle('收支明细')

  return (
    <div>
      <header bg-gradient='to-b from-#addcd4' px-16px shadow-neutral-1 shadow-xl>
        <Topnav title="收支明细" />
        <ItemRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </header>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}
