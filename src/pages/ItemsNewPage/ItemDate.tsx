import { useState } from "react";
import { Datepicker } from "../../components/Datepicker";
import { Icon } from "../../components/Icon"
import { time } from "../../lib/time";
import { usePopup } from "../../hooks/usePopup";

export const ItemDate: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const { toggle, popup, hide } = usePopup({
    children: <Datepicker
      onConfirm={d => { setDate(d); hide() }}
      onCancel={() => hide()} />
  })

  return (
    <>
      {popup}
      <span flex items-center gap-x-8px onClick={toggle} >
        <Icon name="calendar" className="w-20px h-20px grow-0 shrink-0" />
        <span grow-0 shrink-0>{time(date).format()}</span>
      </span>
    </>
  )
}
