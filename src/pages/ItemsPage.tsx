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
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }, {
      id: 2,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }
  ])
  useTitle(title)

  return (
    <div h-screen bg='#f6f6f6'>
      <header bg-gradient='to-b from-#addcd4' px-16px shadow-lg shadow-light-7>
        <Topnav title={title} />
        <ItemRangePicker currentTimeRange={currentTimeRange} onChange={setCurrentTimeRange} />
      </header>
      <ItemsSummary />
      <ItemsList items={items} />
      <AddItemFloatButton />
    </div>
  )
}
