import { useState } from 'react'
import './App.css'
import UserHome from './components/home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserHome />
    </>
  )
}

export default App
