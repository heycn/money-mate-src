import { useState } from "react"
import { emojis } from "../../lib/emojis"
import s from '../../pages/TagsNewPage.module.scss'

export const EmojiInput: React.FC = () => {
  const [emojiKind, setEmojiKind] = useState('表情')

  return (
    <div b-1 b="#73b19f" rounded-8px>
      <div flex p-8px gap-x-16px overflow-auto text="#999">
        {emojis.map(({ name }) =>
          <span
            whitespace-nowrap key={name}
            className={name === emojiKind ? s.selectedTag : ''}
            onClick={() => setEmojiKind(name)}
          >
            {name}
          </span>
        )}
      </div>
      <div text-24px p-t-8px p-b-16px h-400px overflow-auto text-center>
        {emojis.map(({ name, chars }) =>
          <div
            grid grid-cols="[repeat(auto-fit,34px)]" grid-rows="[repeat(auto-fit,34px)]"
            key={name}
            style={{ display: name === emojiKind ? '' : 'none' }}
            justify-center
          >
            {chars.map(char => <span>{char}</span>)}
          </div>)}
      </div>
    </div>
  )
}
