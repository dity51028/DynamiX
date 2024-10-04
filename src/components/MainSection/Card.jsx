import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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
            <ExpandedCard params={props} />
          </motion.div>
        ) : (
          <motion.div
            key="compact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CompactCard params={props} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  )
};

 


function CompactCard ({params}){

    const Png = params.png;

    return(
        <div className="CompactCard flex flex-1  !h-[10rem] w-[20rem] border-white rounded-lg relative cursor-pointer !hover:shadow-none p-4" 
        style={{
            background:params.color.backGround,
            boxShadow:params.color.boxShadow

        }}
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
        </div>
    )

}

function ExpandedCard ({params}){
    return(
        <div>hi</div>
    )
}

export default Card