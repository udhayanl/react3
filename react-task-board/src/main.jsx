import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskBoard from './TaskBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskBoard />
  </StrictMode>,
)
