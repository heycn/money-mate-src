import { useState } from 'react'
import { emojis } from '../lib/emojis'
import { Gradient } from '../components/Gradient'
import { TopNav } from '../components/TopNav'
import { Icon } from '../components/Icon'
import s from './TagsNewPage.module.scss'

export const TagsNewPage: React.FC = () => {
  const onSubmit = () => { }
  const [emojiKind, setEmojiKind] = useState('表情')
  return (
    <div>
      <Gradient grow-0 shrink-0>
        <TopNav title="新建标签" icon='back' />
      </Gradient>
      <form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
        <div flex flex-col gap-y-8px>
          <input className=" bg-#00000009 focus:bg-#00000004 focus:b-1 focus:b-solid focus:b-#73b19f placeholder-color-#0003"
            text-center b-1 b-transparent p-y-4px p-l-12px min-h-48px leading-24px text-16px font-bold w-full rounded-8px
            type="text" placeholder="请输入标签名" color="#303133"
          />
          <span text-red text-12px>标签名太长</span>
        </div>
        <div flex flex-col gap-y-8px>
          <div b-1 b="#73b19f" rounded-8px>
            <div flex p-8px gap-x-16px overflow-auto text="#999">
              {emojis.map(emoji =>
                <span whitespace-nowrap key={emoji.name}
                  className={emoji.name === emojiKind ? s.selectedTag : ''}
                  onClick={() => setEmojiKind(emoji.name)}>{emoji.name}</span>
              )}
            </div>
            <div text-24px p-t-8px p-b-16px h-400px overflow-auto text-center>
              {emojis.map(emoji =>
                <div key={emoji.name} style={{ display: emoji.name === emojiKind ? '' : 'none' }}
                  grid grid-cols="[repeat(auto-fit,34px)]" grid-rows="[repeat(auto-fit,34px)]"
                  justify-center>
                  {emoji.chars.map(char => <span>{char}</span>)}
                </div>)}
            </div>
          </div>
        </div>
        <p text-center py-24px>记账时长按标签，即可进行编辑</p>
        <div>
          <button m-btn>确定</button>
        </div>
      </form>
    </div>
  )
}