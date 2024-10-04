import React from 'react'
import { cardData } from '../../utils'
import Card from './Card'

const CardContainer = () => {
  return (
    <>
  <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
    {
      cardData.map((card, id) => {
        return (
          <div key={id} className='w-full'>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })
    }
  </div>
</>

  )
}

export default CardContainer