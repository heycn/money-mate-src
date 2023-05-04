import s from './Tabs.module.scss'

type Props<T> = {
  tabItems: {
    key: T
    text: string
  }[]
  value: T
  onChange: (key: T) => void
  className?: string
}

const compareKey = <T extends (string | { name: string })>(a: T, c: T) => {
  if (typeof a === 'string' && typeof c === 'string') {
    return a === c
  } else if (a instanceof Object && c instanceof Object) {
    return a.name === c.name
  } else {
    return false
  }
}

export const Tabs = <T extends string | { name: string }>(props: Props<T>) => {
  const { tabItems, value, onChange, className } = props

  return (
    <ol flex text='#798196' children-p-12px text-16px
      gap-8px overflow-scroll className={className}>
      {tabItems.map(({ key, text }) => (
        <li
          key={typeof key === 'string' ? key : key.name}
          onClick={() => onChange(key)}
          className={key === value ? s.selected : ''}
        >
          {text}
        </li>
      ))}
    </ol>
  )
}
