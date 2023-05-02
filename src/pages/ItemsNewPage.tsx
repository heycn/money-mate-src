import { ReactNode, useState } from "react"
import { Gradient } from "../components/Gradient"
import { Tabs } from "../components/Tabs"
import { TopNav } from "../components/TopNav"
import { useCreateItemStore } from '../stores/useCreateItemStore'
import { Tags } from "./ItemsNewPage/Tags"
import { DateAndAmount } from "./ItemsNewPage/DateAndAmount"

export const ItemsNewPage: React.FC = () => {
  const { data, error, setData, setError } = useCreateItemStore()
  const tabItems: { key: Item['kind']; text: string, element?: ReactNode }[] = [
    {
      key: 'expense', text: '支出',
      element: <Tags kind="expense" value={data.tag_ids} onChange={(ids) => setData({ tag_ids: ids })} />
    },
    {
      key: 'income', text: '收入',
      element: <Tags kind="income" value={data.tag_ids} onChange={(ids) => setData({ tag_ids: ids })} />
    }
  ]
  const [currentItemKind, setCurrentItemKind] = useState<Item['kind']>('expense')

  return (
    <div h-screen flex flex-col>
      <Gradient grow-0 shrink-0>
        <TopNav title="记一笔" icon='back' />
        <Tabs
          tabItems={tabItems}
          value={data.kind!}
          onChange={(tabItem) => { setData({ kind: tabItem }) }}
          className="children-flex-1 text-center"
        />
      </Gradient>
      <div text-28px>{JSON.stringify(data)}</div>
      <div grow-1 shrink-1 overflow-auto>
        {tabItems.find(item => item.key === currentItemKind)?.element}
      </div>
      <DateAndAmount grow-0 shrink-0 />
    </div>
  )
}
