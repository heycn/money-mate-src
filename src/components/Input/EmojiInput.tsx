import { useState } from "react"
import { emojis } from "../../lib/emojis"
import s from './EmojiInput.module.scss'

type Props = {
  value?: string
  onChange?: (value: string) => void
}

export const EmojiInput: React.FC<Props> = ({ value, onChange }) => {
  const [emojiKind, setEmojiKind] = useState('表情')

  return (
    <div b-1 b-solid b="[var(--primary-color)]" rounded-8px className={s.wrapper}>
      <div flex px-8px gap-x-16px overflow-auto text="#999" b-b-1 b="#0001" b-solid>
        {emojis.map(({ name }) =>
          <span
            whitespace-nowrap key={name}
            className={name === emojiKind ? s.selectedTag : ''}
            py-8px
            onClick={() => setEmojiKind(name)}
          >
            {name}
          </span>
        )}
      </div>
      <div text-24px p-t-8px p-b-16px h-300px overflow-auto text-center>
        {emojis.map(({ name, chars }) =>
          <div
            text-24px gap-4px grid grid-cols="[repeat(auto-fit,35px)]"
            key={name}
            style={{ display: name === emojiKind ? '' : 'none' }}
            justify-center
          >
            {chars.map(char =>
              <span
                key={char} className={char === value ? s.selected : ''}
                b-1 b-transparent rounded-8px
                onClick={() => value !== char && onChange?.(char)}
              >
                {char}
              </span>
            )}
          </div>)}
      </div>
    </div>
  )
}
