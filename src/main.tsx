import ReactDOM from 'react-dom/client'
import { App } from './App'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(<App />)
export { div as rootDiv }
