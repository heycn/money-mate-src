import { useState } from 'react'
import { emojis } from '../lib/emojis'
import { Gradient } from '../components/Gradient'
import { TopNav } from '../components/TopNav'
import { Input } from '../components/Input'

export const TagsNewPage: React.FC = () => {
  const onSubmit = () => { }
  const [emojiKind, setEmojiKind] = useState('表情')
  return (
    <div>
      <Gradient grow-0 shrink-0>
        <TopNav title="新建标签" icon='back' />
      </Gradient>
      <form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
        <Input placeholder="请输入标签名" error="标签名太长" />
        <Input type="emoji" />
        <p text-center py-24px>记账时长按标签，即可进行编辑</p>
        <button m-btn>确定</button>
      </form>
    </div>
  )
}