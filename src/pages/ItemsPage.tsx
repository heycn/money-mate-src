import { useState } from "react"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { ItemRangePicker, TimeRange } from "../components/ItemRangePicker"
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import { useTitle } from "../hooks/useTitle"

interface Props {
  title?: string
}

export const ItemsPage: React.FC<Props> = ({ title }) => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  useTitle(title)

  return (
    <div h-screen bg='#f6f6f6'>
      <header bg-gradient='to-b from-#addcd4' px-16px shadow-lg className="shadow='light-900'">
        <Topnav title={title} />
        <ItemRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </header>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}
