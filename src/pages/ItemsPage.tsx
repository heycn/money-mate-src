import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { ItemRangePicker } from "../components/ItemRangePicker"
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"

export const ItemsPage: React.FC = () => {
  return (
    <div>
      <div bg-gradient='to-b from-#addcd4' px-16px>
        <Topnav />
        <ItemRangePicker />
      </div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}
