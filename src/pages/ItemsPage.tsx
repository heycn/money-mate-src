import { useState } from "react"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { ItemRangePicker, TimeRange } from "../components/ItemRangePicker"
import { TopNav } from "../components/TopNav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import { useTitle } from "../hooks/useTitle"
import { useMenuStore } from "../stores/useMenuStore"
import { TopMenu } from "../components/TopMenu"

interface Props {
  title?: string
}

export const ItemsPage: React.FC<Props> = ({ title }) => {
  const [currentTimeRange, setCurrentTimeRange] = useState<TimeRange>('thisMonth')
  const { visible, setVisible } = useMenuStore()
  useTitle(title)

  return (
    <div h-screen>
      <header bg-gradient='to-b from-#addcd480' px-16px shadow-lg shadow-light-7>
        <TopNav title={title} />
        <ItemRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </header>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
      <TopMenu visible={visible} onClickMask={() => setVisible(false)} />
    </div>
  )
}
