import { Icon } from "../../components/Icon"

type Props = {
  kind: Item['kind']
}

export const Tags: React.FC<Props> = () => {
  const tags = Array.from({ length: 99 })

  return (
    <ol grid grid-cols="[repeat(auto-fit,48px)]"
      justify-center gap-x-32px gap-y-16px py-16px px-8px
    >
      <li b-2 b-white bg-white rounded='50%' w-56px h-56px
        flex justify-center items-center text-20px color='#77B4A2'
      >
        <Icon name="add" />
      </li>
      {tags.map((item, idx) =>
        <li key={idx} flex justify-center items-center flex-col>
          <div b-2 b='#77B4A2' bg-white rounded='50%'
            w-56px h-56px flex justify-center items-center text-26px
          >
            😀
          </div>
          <div text-12px text='#666' mt-6px max-w-54px>打车</div>
        </li>)}
    </ol>
  )
}
