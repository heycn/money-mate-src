type Props = {
  value?: string
  onChange?: (v: string) => void
  placeholder?: string
}
export const DateInput: React.FC<Props> = (props) => {
  const { value, onChange, placeholder } = props
  return (
    <input className=" focus:bg-#00000004 focus:b-1 focus:b-solid focus:b-#73b19f placeholder-color-#0003"
      bg="#00000009" text-center b-1 b-transparent p-y-4px p-x-12px min-h-48px leading-24px text-16px font-bold
      type="text" readOnly data-xxxx w-full rounded-8px color="#303133" placeholder={placeholder} value={value}
    />
  )
}