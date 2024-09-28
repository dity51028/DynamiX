import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='app bg-custom-gradient h-screen flex items-center justify-center'>
      <div className="appGlass grid grid-cols-[11rem_auto_20rem] h-[97%] w-[97%] bg-glass border border-transparent rounded-3xl overflow-hidden ">
          <Sidebar/>
      </div>
    </div>
  )
}

export default App