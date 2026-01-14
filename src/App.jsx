import { useState } from 'react'
import './App.css'
import Inventory from './components/Inventory'
import UserRegister from './components/userRegister'
import ToDo from './components/To-DoList'
import UserLogin from './components/userLogin'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'


function App() {

  return (
    <>
      
      <div className="dark:bg-gray-800 grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[220px_1fr] lg:grid-cols-5 lg-grid-rows">
          <div className="lg:row-span-5"> <Sidebar/></div>
          <div className="lg:col-span-4"><UserLogin/></div>
          <div className="bg-[#f8f7f5] dark:bg-[#0c0a05] min-h-screen flex flex-col font-display selection:bg-[#f2a20d] selection:text-[#221c10] overflow-hidden"><UserRegister/></div>
          <div className="lg:row-span-4 lg:col-start-5 lg:row-start-2"><Inventory/></div>
      </div>
          
    </>
  )
}

export default App
