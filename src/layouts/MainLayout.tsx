import { Navigate, Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const watched = localStorage.getItem('watched')
  return watched === 'yes'
    ? <Navigate to="/home" replace />
    : <div><Outlet /></div>
}
