import { useEffect, useRef, useState } from 'react'

type CountDown = (second: number) => [number, (seconds: number) => void]
export const useCountDown: CountDown = second => {
  const [seconds, setSeconds] = useState(second)
  const timer = useRef<number>()

  useEffect(() => {
    if (seconds > 0) {
      timer.current = window.setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    }
    return () => window.clearInterval(timer.current)
  }, [seconds])

  return [seconds, setSeconds]
}
