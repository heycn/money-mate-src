import s from './Tabs.module.scss'

type Props<T> = {
  tabItems: {
    key: T
    text: string
  }[]
  value: T
  onChange: (key: T) => void
}

export const Tabs = <T extends string>(props: Props<T>) => {
  const { tabItems, value, onChange } = props

  return (
    <ol flex text='#798196' children-p-12px text-16px cursor-pointer gap-8px overflow-scroll>
      {tabItems.map(({ key, text }) => (
        <li
          key={key}
          onClick={() => onChange(key)}
          className={key === value ? s.selected : ''}
        >
          {text}
        </li>
      ))}
    </ol>
  )
}
