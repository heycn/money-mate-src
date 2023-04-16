export const ItemsSummary: React.FC = () => {
  return (
    <ol bg='#ffffff' flex justify-between items-center m-16px rounded-10px py-16px px-26px
      text-center color='#999' shadow-lg shadow-light-7>
      <li>
        <div color-blue font-600 text-22px>
          <span text-12px pr-2px font-mono>¥</span>
          1000
        </div>
        <div>收入</div>
      </li>
      <span>|</span>
      <li>
        <div color-red font-600 text-22px>
          <span text-12px pr-2px font-mono>¥</span>
          1000
        </div>
        <div>支出</div>
      </li>
      <span>|</span>
      <li>
        <div color='#666' font-600 text-22px>
          <span text-12px pr-2px font-mono>¥</span>
          1000
        </div>
        <div>结余</div>
      </li>
    </ol>
  )
}
