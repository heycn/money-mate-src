import { Navigate } from 'react-router-dom'
import { useLocalStore } from '../stores/useLocalStore'

export const Root: React.FC = () => {
  const { hasReadFeatures } = useLocalStore()
  if (hasReadFeatures) {
    return <Navigate to="/home" replace />
  } else {
    return <Navigate to="/welcome/1" replace />
  }
}
