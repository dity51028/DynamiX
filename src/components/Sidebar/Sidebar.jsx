import React from 'react'
import { TiChartLine } from "react-icons/ti";
import { menuItems } from '../../utils';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";


const Sidebar = ({toggleIsSidebar}) => {
  return (
    <>
    <div className='sidebar relative pt-8 '>
        <div className="logo  flex justify-center items-center gap-2">
            <TiChartLine size={52} className='text-pink'/>
           <span className='font-bold text-pink hidden md:block md:text-3xl leading-loose underline '>DynamiX</span> 
           <button className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-200  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  ' onClick={toggleIsSidebar}>
                        <RiMenu2Line className=' md:hidden text-3xl text-pink'/>
                        
                    </button>  
        </div> 

        
    
    
    {/*Menu*/}
    <div className="menu my-10">
        <div className="menuItem ">   
         <ul>
           {menuItems.map((item, index) => (
            <li key={index} className=''>
              <a href={item.href} className="menu-link flex items-center  gap-4 text-xl space-y-7 ml-4">
               <item.icon className="menu-icon mt-6" /> {/* Render the icon */}
               <span>{item.text}</span> {/* Render the text */}
              </a>
           </li>
          ))}
         </ul>
        </div>
            <FaRegArrowAltCircleRight className='absolute bottom-20 left-12 text-4xl text-black'/>
    </div>
    </div>

    </>
  )
}

export default Sidebar