import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoCloseCircleOutline } from "react-icons/io5";

import Chart from 'react-apexcharts';


const Card = (props) => {

    const[expanded,setExpanded] = useState(false)

  return (
    <>
    
    <div onClick={() => setExpanded(!expanded)}>
      <AnimatePresence>
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ExpandedCard params={props} setExpanded={()=>setExpanded(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="compact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CompactCard params={props} setExpanded={()=>setExpanded(true)}/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  )
};

 


function CompactCard ({params,setExpanded}){

    const Png = params.png;

    return(
        <motion.div 
        className="CompactCard flex flex-1 z-0 !h-[10rem] w-[20rem] border-white rounded-lg  cursor-pointer !hover:shadow-none p-4" 
        style={{
            background:params.color.backGround,
            boxShadow:params.color.boxShadow

        }}

        onClick={setExpanded}
        layoutId='expandableCard'
        >
        
            
            <div className="radialBar flex flex-1 flex-col gap-4 justify-end">
                <CircularProgressbar
                styles={{
                    path:{
                        stroke:'white',
                        strokeWidth:'12px',
                        filter:'drop-shadow(2px 4px 6px white)'
                    },
                    trail:{
                        display:'none'
                    },
                    text:{
                        fill:'white'
                    }
                }}
                value={params.barValue}
                text={`${params.barValue}%`}
                className='w-[7rem]'
                />
                <span className='text-white font-bold ml-[1.5rem]'>{params.title}</span>
            </div>
           
            

           <div className='details flex flex-1 flex-col justify-between items-center text-white '>
                <Png/>
                <span className='size-[22px] font-bold '>${params.value}</span>
                <span className=''>Last 24 hours</span>
           </div>
        </motion.div>
    )

}

function ExpandedCard ({params,setExpanded}){
  
  const data = {
   
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, ],
    options: {
      chart: {
        height: 350,
        type: 'area'
        
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors:['white'],

        
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  
  
  };
    return(
        <div className="ExpandedCard font-bold absolute  w-[40%] h-[50vh]  border rounded-lg flex flex-col items-center justify-between "
        style={{
          background:params.color.backGround,
          boxShadow:params.color.boxShadow,
          zIndex:9999,
        }}
       layoutId='expandableCard'
       onClick={setExpanded}
      // Add `position: fixed` to ensure it breaks out of the stacking context
      // and is positioned relative to the viewport
      position="fixed"
      top="10rem"
      left="25rem"
        
        >
          <div className='text-2xl'
          onClick={setExpanded}
          >
            <IoCloseCircleOutline/>
          </div>
          
          <span>{params.title}</span>
          <div className='chartContainer'>
          <Chart series={data.series} options={data.options} type='area' height={350} />
          </div>
          
          <span>Last 24 hours</span>

        </div>
    )
}

export default Card