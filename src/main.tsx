import ReactDOM from 'react-dom/client'
import { App } from './App'
import { setup } from './lib/ajax'

setup()
const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(<App />)
export { div as rootDiv }
