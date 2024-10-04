import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/MainSection/Main'

const App = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  const toggleIsSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen)

  }
  return (
    <div className='app bg-custom-gradient h-screen flex items-center justify-center'>
      <div className="appGlass grid grid-cols-[11rem_auto_20rem] h-[97%] w-[97%] bg-glass border border-transparent rounded-3xl overflow-hidden ">
          <Sidebar toggleIsSidebar={toggleIsSidebar}/>
          <Main/>
      </div>
    </div>
  )
}

export default App