import { Navigate } from 'react-router-dom'

export const App: React.FC = () => {
  const watched = localStorage.getItem('watched')
  return watched === 'yes'
    ? <Navigate to="/home" replace />
    : <Navigate to="/welcome/1" replace />
}
