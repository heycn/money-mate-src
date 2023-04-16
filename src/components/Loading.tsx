interface Props {
  message?: string;
}

const unocss = `animate-spin animate-count-infinite transform-origin-center
 animate-duration-1.2s stroke-width-2 stroke-cap-round stroke-#76b6a3`

export const Loading: React.FC<Props> = ({ message }) => {
  return (
    <div h-screen flex flex-col justify-center items-center>
      <svg h-112px fill-none viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className={unocss} strokeDasharray={0.7} animate-reverse cx="60" cy="60" r="20" pathLength="1" />
        <circle className={unocss} strokeDasharray={0.7} cx="60" cy="60" r="30" pathLength="1" />
        <circle fill='#76b6a3' cx="60" cy="60" r="10" />
      </svg>
      <p color='#76b6a3' mt--2>{message || '正在加载'}</p>
    </div>
  )
}
