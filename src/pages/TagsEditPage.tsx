import { Gradient } from "../components/Gradient"
import { TopNav } from "../components/TopNav"
import { TagForm } from "./TagsNewPage/TagForm"

export const TagsEditPage: React.FC = () => {

  return (
    <div>
      <Gradient grow-0 shrink-0>
        <TopNav title="编辑标签" icon='back' />
      </Gradient>
      <TagForm type="edit" />
      <div px-16px mt-24px >
        <button m-btn bg="#0003">删除</button>
      </div>
    </div>
  )
}
