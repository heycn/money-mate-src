import type { AxiosError } from 'axios'
import { useEffect, FormEventHandler } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { Input } from "../../components/Input"
import { useAjax } from '../../lib/ajax'
import type { FormError } from '../../lib/validate'
import { validate, hasError } from "../../lib/validate"
import { useCreateTagStore } from "../../stores/useCreateTagStore"
import useSWR from 'swr'

type Props = {
  type: 'create' | 'edit'
}

export const TagForm: React.FC<Props> = ({ type }) => {
  const { data, error, setData, setError } = useCreateTagStore()
  const [searchParams] = useSearchParams()
  const kind = searchParams.get('kind') ?? ''
  const { post, patch, get } = useAjax({ showLoading: true, handleError: true })
  useEffect(() => {
    if (type !== 'create') { return }
    const kind = searchParams.get('kind')
    if (!kind) {
      throw new Error('kind 必填')
    }
    if (kind !== 'expenses' && kind !== 'income') {
      throw new Error('kind 必须是 expenses 或 income')
    }
    setData({ kind })
  }, [searchParams])
  const params = useParams()
  const id = params.id
  const { data: tag } = useSWR(id ? `/api/v1/tags/${id}` : null, async path =>
    (await get<Resource<Tag>>(path)).data.resource
  )
  useEffect(() => {
    if (tag) {
      setData(tag)
    }
  }, [tag])

  const onSubmitError = (error: AxiosError<{ errors: FormError<typeof data> }>) => {
    if (error.response) {
      const { status } = error.response
      if (status === 422) {
        const { errors } = error.response.data
        setError(errors)
      }
    }
    throw error
  }
  const nav = useNavigate()
  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    const newError = validate(data, [
      { key: 'kind', type: 'required', message: '标签类型必填' },
      { key: 'name', type: 'required', message: '你没有填写标签名' },
      { key: 'name', type: 'length', max: 4, message: '你的标签名大于四个字' },
      { key: 'sign', type: 'required', message: '你没有选择 Emoji' },
    ])
    setError(newError)
    if (!hasError(newError)) {
      const promise = type === 'create'
        ? post<Resource<Tag>>('/api/v1/tags', data)
        : patch<Resource<Tag>>(`/api/v1/tags/${id}`, data)
      const response = await promise.catch(onSubmitError)
      setData(response.data.resource)
      nav(`/items/new?kind=${encodeURIComponent(kind)}`, { replace: true })
    }
  }

  return (
    <form onSubmit={onSubmit} px-16px flex flex-col gap-y-8px>
      <div flex justify-center items-center pt-16px >
        <div flex justify-center items-center w-64px h-64px text-40px rounded="50%" bg="#00000009">
          {data.sign}
        </div>
      </div>
      <Input type='text' placeholder="请输入标签名" error={error.name?.[0]} value={data.name}
        onChange={name => setData({ name })} />
      <Input type="emoji" error={error.sign?.[0]} value={data.sign} onChange={sign => setData({ sign })} />
      <p text-center text="#999">记账时长按标签，即可进行编辑</p>
      <button m-btn mt-24px>确定</button>
    </form>
  )
}
