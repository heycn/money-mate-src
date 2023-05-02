import { Link } from "react-router-dom"
import useSWR from 'swr'
import { Icon } from "../../components/Icon"
import { useTagsStore } from '../../stores/useTagsStore'
import { useAjax } from '../../lib/ajax'

type Props = {
  kind: Item['kind']
  value?: Item['tag_ids']
  onChange?: (ids: Item['tag_ids']) => void
}

export const Tags: React.FC<Props> = props => {
  const { kind } = props

  const { list: tags, setList } = useTagsStore()
  const { get } = useAjax({ showLoading: true, handleError: true })
  useSWR('/api/v1/tags', async (path) => {
    const response = await get<Resources<Tag>>(path)
    setList(response.data.resources)
  })

  return (
    <ol grid grid-cols="[repeat(auto-fit,48px)]"
      justify-center gap-x-32px gap-y-16px py-16px px-8px
    >
      <Link to={`/tags/new?kind=${kind}`} replace>
        <li b-2 b-white bg-white rounded='50%' w-56px h-56px
          flex justify-center items-center text-20px color='#77B4A2'
        >
          <Icon name="add" />
        </li>
      </Link>
      {tags.map((tag, idx) =>
        <li key={idx} flex justify-center items-center flex-col>
          <div style={{ borderColor: props.value?.includes(tag.id) ? 'var(--primary-color)' : 'transparent' }}
            b-2 bg-white rounded='50%' w-56px h-56px flex justify-center items-center text-26px
            onClick={() => props.onChange?.([tag.id])}
          >
            {tag.sign}
          </div>
          <div text-12px text='#666' mt-6px max-w-54px>{tag.name}</div>
        </li>)}
    </ol>
  )
}
