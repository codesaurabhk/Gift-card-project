import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GiftCard from './components/GiftCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GiftCard/>
    </>
  )
}

export default App
