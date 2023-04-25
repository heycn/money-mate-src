import { useState } from 'react'
import { emojis } from '../lib/emojis'
import { Gradient } from '../components/Gradient'
import { TopNav } from '../components/TopNav'
import { Input } from '../components/Input'

export const TagsNewPage: React.FC = () => {
  const onSubmit = () => { }
  const [emoji, setEmoji] = useState('🤣')

  return (
    <div>
      <Gradient grow-0 shrink-0>
        <TopNav title="新建标签" icon='back' />
      </Gradient>
      <div flex justify-center items-center pt-16px >
        <div flex justify-center items-center w-64px h-64px text-40px rounded="50%" bg="#00000009">
          {emoji}
        </div>
      </div>
      <form onSubmit={onSubmit} p-16px flex flex-col gap-y-8px>
        <Input placeholder="请输入标签名" error="标签名太长" />
        <Input type="emoji" value={emoji} onChange={setEmoji} />
        <p text-center text="#999">记账时长按标签，即可进行编辑</p>
        <button m-btn mt-24px>确定</button>
      </form>
    </div>
  )
}