import { ReactNode, useState } from 'react'
import { Icon } from '../../components/Icon';
import styled from 'styled-components';

type Props = {
  className?: string
  itemDate: ReactNode
  value?: number
  onChange?: (amount: number) => void
  onSubmit?: () => void
}
type KeyboardKeys =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0'
  | '.'
  | 'backspace'

const keysMap: { k: KeyboardKeys; v: ReactNode; area: string }[] = [
  { k: '1', v: '1', area: '1 / 1 / 2 / 2' },
  { k: '2', v: '2', area: '1 / 2 / 2 / 3' },
  { k: '3', v: '3', area: '1 / 3 / 2 / 4' },
  { k: '4', v: '4', area: '2 / 1 / 3 / 2' },
  { k: '5', v: '5', area: '2 / 2 / 3 / 3' },
  { k: '6', v: '6', area: '2 / 3 / 3 / 4' },
  { k: '7', v: '7', area: '3 / 1 / 4 / 2' },
  { k: '8', v: '8', area: '3 / 2 / 4 / 3' },
  { k: '9', v: '9', area: '3 / 3 / 4 / 4' },
  { k: '0', v: '0', area: '4 / 1 / 5 / 3' },
  { k: '.', v: '.', area: '4 / 3 / 5 / 4' },
  {
    k: 'backspace',
    v: <Icon name='delete' className="text-28px font-606266" />,
    area: '1 / 4 / 2 / 5',
  }
]

export const ItemAmount: React.FC<Props> = (props) => {
  const { value, onChange, onSubmit } = props
  const [output, _setOutput] = useState(() => value ? (value / 100).toString() : '0')
  // 拦截器
  const setOutput = (str: string) => {
    const dotIndex = str.indexOf('.')
    if (dotIndex >= 0 && str.length - dotIndex > 3) { return }
    if (str.length > 16) { return }
    _setOutput(str)
    onChange?.(parseFloat(str) * 100)
  }
  const { className } = props

  const append = (char: string) => {
    switch (char) {
      case '0':
        if (output !== '0') { setOutput(output + char) }
        break
      case '.':
        if (!output.includes('.')) { setOutput(output + char) }
        break
      case 'backspace':
        setOutput(output.slice(0, -1))
        break
      default:
        if (output === '0') { setOutput(char) }
        else { setOutput(output + char) }
        break
    }
  }

  return (
    <>
      <div className={className}>
        <div flex p-t-15px p-b-16px px-16px border-t-1px b-t-solid border-t="#ddd" items-center>
          {props.itemDate}
          <code grow-1 shrink-1 text-right text-20px color-black>{output}</code>
        </div>
        <div grid grid-rows='[repeat(4,56px)]' grid-cols-4 gap-1px bg='#00000006'> {keysMap.map(({ k, v, area }) => (
          <Button
            type='button'
            key={k}
            area={area}
            onClick={() => append(k)}
          >
            {v}
          </Button>
        ))}
          <Button type='submit' area='2 / 4 / 5 / 5' font='18px' primary onClick={onSubmit}>
            提交
          </Button>
        </div>
      </div>
    </>
  )
}

const Button = styled.button<{
  area: string;
  font?: string;
  primary?: boolean;
}>`
  grid-area: ${({ area }) => area};
  font-size: ${({ font }) => font ?? '24px'};
  background: ${({ primary }) => (primary ? '#73b19f' : '#fff')};
  color: ${({ primary }) => (primary ? '#fffe' : '#404244')};
  font-weight: bold;
  border: none;
  font-family: 'Heebo', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background: ${({ primary }) => (!primary ? '#e9ecef' : '#addcd4')};
  }
`;
