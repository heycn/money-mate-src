interface Props {
  items: Item[]
}

export const ItemsList: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <ol mx-16px>
        {items.map(item =>
          <li key={item.id} flex px-16px justify-between py-4px
            bg-white rounded-xl mb-8px items-center>
            <div flex>
              <div text-34px mr-8px>😘</div>
              <div flex flex-col justify-center py-8px>
                <div text='#333' text-15px>旅行</div>
                <div text='#999' text-13px font-300 pt-4px>2011-01-01</div>
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
