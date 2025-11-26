import { useState } from 'react'
import './App.css'
import Test from './components/test'
import Fruits from './components/arrayFrutas'
import Inventory from './components/Inventory'
import UserRegister from './components/userRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserRegister />
      </div>
      
      <div className="card">
        
      <Inventory />
      
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
