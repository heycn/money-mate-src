export const ItemsSummary: React.FC = () => {
  return (
    <ol bg='#ffffff' flex justify-between items-center m-16px rounded-10px py-12px px-24px
      text-center color='#798196' shadow-lg shadow='light-7'>
      <li>
        <div color='#33c659' font-900 text-22px>
          <span text-12px pr-1>¥</span>
          1000
        </div>
        <div>收入</div>
      </li>
      <span font-900>|</span>
      <li >
        <div color='#fe3b30' font-900 text-22px>
          <span text-12px pr-1>¥</span>
          1000
        </div>
        <div>支出</div>
      </li>
      <span font-900>|</span>
      <li>
        <div color='#5d5d5d' font-900 text-22px>
          <span text-12px pr-1>¥</span>
          1000
        </div>
        <div>结余</div>
      </li>
    </ol>
  )
}