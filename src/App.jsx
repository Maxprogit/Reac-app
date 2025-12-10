import { useState } from 'react'
import './App.css'
import Inventory from './components/Inventory'
import UserRegister from './components/userRegister'
import ToDo from './components/To-DoList'

function App() {

  return (
    <>
      <div>
        <UserRegister />
      </div>
      
      <div className="card">
        
      <Inventory />
      
      </div>

      <div>
        <ToDo />
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
