import { useEffect } from "react"

export const useTitle: (title?: string) => void = (title?: string) => {
  useEffect(() => {
    if (!title) return
    document.title = title
  }, [])
}
