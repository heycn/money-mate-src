export const ItemsSummary: React.FC = () => {
  return (
    <ol bg-white flex justify-between items-center mx-16px my-24px rounded-10px py-5 px-8
      text-center color='#999' shadow-lg shadow-light-7>
      <li>
        <div color-blue font-500 text-22px>
          <span text-12px pr-2px font-mono>¥</span>
          1000
        </div>
        <div>收入</div>
      </li>
      <span font-300>|</span>
      <li>
        <div color-red font-500 text-22px>
          <span text-12px pr-2px font-mono>¥</span>
          1000
        </div>
        <div>支出</div>
      </li>
      <span font-300>|</span>
      <li>
        <div color='#666' font-500 text-22px>
          <span text-12px pr-2px font-mono>¥</span>
          1000
        </div>
        <div>结余</div>
      </li>
    </ol>
  )
}
