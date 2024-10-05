import React from 'react'
import { TiChartLine } from "react-icons/ti";
import { menuItems } from '../../utils';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from 'react';


const Sidebar = ({toggleIsSidebar}) => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active index

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked item as active
  };
  return (
    <>
    <div className='sidebar relative pt-8 '>
        <div className="logo  flex justify-center items-center gap-2">
            <TiChartLine size={52} className='text-pink'/>
           <span className='font-bold text-pink hidden md:block md:text-3xl leading-loose underline '>DynamiX</span> 
           {/*<button className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-200  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  ' onClick={toggleIsSidebar}>
                        <RiMenu2Line className=' md:hidden text-3xl text-pink'/>
                        
  </button> */ }
        </div> 

        
    
    
    {/*Menu*/}
    <div className="menu my-10">
        <div className="menuItem ">   
         <ul>
           {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`rounded-2xl mt-10 px-2 py-2 hover:bg-activeItem ${activeIndex === index ? 'bg-activeItem' : ''}`} 
              onClick={() => handleClick(index)} // Handle click event
             >                
             <a href={item.href} className="menu-link flex items-center  gap-4 text-xl ml-4 ">
               <item.icon className="menu-icon  h-10 w-6 ml-2" /> {/* Render the icon */}
               <span className='hidden md:block '>{item.text}</span> {/* Render the text */}
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