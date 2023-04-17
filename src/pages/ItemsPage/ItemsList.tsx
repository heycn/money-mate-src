interface Props {
  items: Item[]
}

export const ItemsList: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <ol mx-16px>
        {items.map(item =>
          <li key={item.id} flex px-4 justify-between py-1 bg-white rounded-6px mb-8px items-center>
            <div flex>
              <div text-36px mr-8px>😘</div>
              <div flex flex-col justify-center py-8px>
                <div text='#333'>旅行</div>
                <div text='#999' text-12px font-300 pt-1>2011-01-01</div>
              </div>
            </div>
            <div text='#181818' text-18px font-500>-999</div>
          </li>
        )}
      </ol>
      <div p-16px>
        <button m-btn>加载更多</button>
      </div>
    </div>
  )
}
