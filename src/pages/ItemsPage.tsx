import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { ItemRangePicker } from "../components/ItemRangePicker"
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"

export const ItemsPage: React.FC = () => {
  return (
    <div>
      <div bg='#71bcbf' bg-gradient='to-b from-#368099'>
        <Topnav />
        <ItemRangePicker />
      </div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}
