import { ReactNode, useState } from "react"
import { Gradient } from "../components/Gradient"
import { Tabs } from "../components/Tabs"
import { TopNav } from "../components/TopNav"

type ItemKind = 'income' | 'expense'

export const ItemsNewPage: React.FC = () => {
  const tabItems: { key: ItemKind; text: string, element?: ReactNode }[] = [
    { key: 'expense', text: '支出', element: <div>支出</div> },
    { key: 'income', text: '收入', element: <div>收入</div> }
  ]
  const [currentItemKind, setCurrentItemKind] = useState<ItemKind>('expense')

  return (
    <>
      <Gradient>
        <TopNav title="记一笔" icon='back' />
        <Tabs
          tabItems={tabItems}
          value={currentItemKind}
          onChange={setCurrentItemKind}
          className="children-flex-1 text-center"
        />
      </Gradient>
      <ol>
        {tabItems.find(item => item.key === currentItemKind)?.element}
      </ol>
    </>
  )
}
