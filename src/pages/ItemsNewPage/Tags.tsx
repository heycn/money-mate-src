import { Link, useNavigate } from 'react-router-dom'
import useSWRInfinite from 'swr/infinite'
import { Icon } from "../../components/Icon"
import { useAjax } from '../../lib/ajax'
import { Loading } from "../../components/Loading"
import { LongPressable } from '../../components/LongPressable'

type Props = {
  kind: Item['kind']
  value?: Item['tag_ids']
  onChange?: (ids: Item['tag_ids']) => void
}


const Tips: React.FC<{ text: string }> = ({ text }) =>
  <p text-center font-300 color='#999'>-<span px-16px>{text}</span>-</p>

export const Tags: React.FC<Props> = props => {
  const { kind } = props
  const getKey = (pageIndex: number, prev: Resources<Item>) => {
    if (prev) {
      const sendCount = (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length
      const count = prev.pager.count
      if (sendCount >= count) { return null }
    }
    return `/api/v1/tags?page=${pageIndex + 1}&kind=${kind}`
  }
  const nav = useNavigate()
  const { get } = useAjax({ showLoading: true, handleError: true })
  const { data, error, size, setSize } = useSWRInfinite(
    getKey,
    async path => (await get<Resources<Tag>>(path)).data,
    { revalidateFirstPage: false }
  )
  const isLoadingInitialData = !data && !error
  const isLoadingMore = data?.[size - 1] === undefined && !error
  const isLoading = isLoadingInitialData || isLoadingMore

  if (!data) {
    return isLoading ? <Loading /> : <div>空</div>
  } else {
    const onLoadMore = () => setSize(size + 1)
    const last = data[data.length - 1]
    const { page, per_page, count } = last.pager
    const hasMore = (page - 1) * per_page + last.resources.length < count

    return (
      <>
        <ol grid grid-cols="[repeat(auto-fit,48px)]" justify-center gap-x-32px gap-y-16px py-16px px-8px>
          <Link to={`/tags/new?kind=${kind}`} replace>
            <li b-2 b-white bg-white rounded='50%' w-56px h-56px flex
              justify-center items-center text-20px color='#77B4A2'
            >
              <Icon name="add" />
            </li>
          </Link>
          {data.map(({ resources }) => {
            return resources.map((tag, idx) => (
              <li key={idx} flex justify-center items-center flex-col>
                <LongPressable onEnd={() => nav(`/tags/${tag.id}`, { replace: true })}>
                  <div style={{ borderColor: props.value?.includes(tag.id) ? 'var(--primary-color)' : 'transparent' }}
                    b-2 bg-white rounded='50%' w-56px h-56px flex justify-center items-center text-26px
                    onClick={() => props.onChange?.([tag.id])}
                  >
                    {tag.sign}
                  </div>
                </LongPressable>
                <div text-12px text='#666' mt-6px max-w-54px>{tag.name}</div>
              </li>
            ))
          })}
        </ol>
        <div p-16px pb-32px>
          {error && <Tips text='加载失败 请刷新页面' />}
          {!hasMore
            ? <Tips text={data[0].pager.count === 0 ? '点击加号 新建标签' : 'The End'} />
            : isLoading
              ? <Loading />
              : <button m-btn onClick={onLoadMore}>加载更多</button>
          }
        </div>
      </>
    )
  }
}
