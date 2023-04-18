import useSWRInfinite from 'swr/infinite'
import { ajax } from '../../lib/ajax'

const getKey = (pageIndex: number, prev: Resources<Item>) => {
  if (prev) {
    const sendCount = (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length
    const count = prev.pager.count
    if (sendCount >= count) { return null }
  }
  return `/api/v1/items?page=${pageIndex + 1}` as `/${string}`
}

export const ItemsList: React.FC = () => {
  const { data, size, setSize } = useSWRInfinite(
    getKey, async path => (await ajax.get<Resources<Item>>(path)).data
  )
  const onLoadMore = () => {
    setSize(size + 1)
  }

  if (!data) {
    return <div>暂无数据</div>
  } else {
    return <>
      <ol px-16px>
        {data.map(({ resources }) => {
          return resources.map(item => (
            <li key={item.id} flex px-4 justify-between py-1 bg-white rounded-6px mb-8px items-center>
              <div flex>
                <div text-36px mr-8px>😘</div>
                <div flex flex-col justify-center py-8px>
                  <div text='#333'>旅行</div>
                  <div text='#999' text-12px font-300 pt-1>2011-01-01</div>
                </div>
              </div>
              <div text='#181818' text-18px font-500>{item.amount / 100}</div>
            </li>
          ))
        })}
      </ol>
      <div p-16px>
        <button m-btn onClick={onLoadMore}>加载更多</button>
      </div>
    </>
  }
}
