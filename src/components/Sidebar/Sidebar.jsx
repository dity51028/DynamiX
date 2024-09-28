import React from 'react'
import { TiChartLine } from "react-icons/ti";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="logo  flex justify-center items-center">
            <TiChartLine size={52} className='text-pink'/>
           <span className='font-bold text-pink xs:hidden md:text-3xl leading-loose underline '>DynamiX</span> 
        </div> 
        
    </div>
  )
}

export default Sidebar