import { ReactNode, useState } from 'react'
import { Icon } from '../../components/Icon';
import styled from 'styled-components';
import { usePopup } from '../../hooks/usePopup';

type Props = {
  className?: string
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

export const DateAndAmount: React.FC<Props> = (props) => {
  const { className } = props
  const [isTouching, setIsTouching] = useState(false)
  const [lastY, setLastY] = useState(-1)
  const [translateY, setTranslateY] = useState(0)
  const { toggle, popup } = usePopup(true, <div h="50vh" overflow-hidden relative
    onTouchStart={(e) => {
      setIsTouching(true)
      setLastY(e.touches[0].clientY)
    }}
    onTouchMove={(e) => {
      if (isTouching) {
        const y = e.touches[0].clientY
        const dy = y - lastY
        setTranslateY(translateY + dy)
        setLastY(y)
      }
    }}
    onTouchEnd={() => {
      setIsTouching(false)
    }}
  >
    <div b-1 b-red h-36px absolute top="[calc(50%-18px)]" w-full />
    <div b-1 b-red h-36px absolute top="[calc(50%-18px)]" w-full>
      <ol style={{ transform: `translateY(${translateY}px)` }}
        children-h-36px text-center children-leading-36px>
        <li>2000</li>
        <li>2001</li>
        <li>2002</li>
        <li>2003</li>
        <li>2004</li>
        <li>2005</li>
        <li>2006</li>
        <li>2007</li>
        <li>2008</li>
        <li>2009</li>
        <li>2010</li>
        <li>2000</li>
        <li>2001</li>
        <li>2002</li>
        <li>2003</li>
        <li>2004</li>
        <li>2005</li>
        <li>2006</li>
        <li>2007</li>
        <li>2008</li>
        <li>2009</li>
        <li>2010</li>
      </ol>
    </div>
  </div>)

  return (
    <>
      {popup}
      <div className={className}>
        <div flex p-t-15px p-b-16px px-16px border-t-1px border-t="#ddd" items-center>
          <span flex items-center gap-x-8px onClick={toggle} >
            <Icon name="calendar" className="w-20px h-20px grow-0 shrink-0" />
            <span grow-0 shrink-0 text-14px>2001-02-03</span>
          </span>
          <code grow-1 shrink-1 text-right text-20px color-black>123456789.01</code>
        </div>
        <div grid grid-rows='[repeat(4,56px)]' grid-cols-4 gap-1px bg='#00000006'> {keysMap.map(({ k, v, area }) => (
          <Button
            type='button'
            key={k}
            area={area}
            onClick={() => { }}
          >
            {v}
          </Button>
        ))}
          <Button type='submit' area='2 / 4 / 5 / 5' font='18px' primary>
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
