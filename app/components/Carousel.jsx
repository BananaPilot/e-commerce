import React, { useState } from 'react'
import CarouselElement from './CarouselElement'

function Carousel() {

  const [translate, setTranslate] = useState(0)

  return (
      <div className='flex justify-center mt-12'>
        <button onClick={() => {
          if (translate >= 95) {
            setTranslate(-95)
          }
          else{
            setTranslate(translate + 50)
          }
        }} className='z-10 h-[600px] w-40 hover:bg-gray-200'><span className="material-symbols-outlined">&#xe5e0;</span></button>
        <div className='carousel' style={{translate: `${translate}%`}}>
          <CarouselElement/>
        </div>
        <button onClick={() => {
            if (translate <= -95) {
              setTranslate(95)
            }
            else{
              setTranslate(translate - 50)
            }
        }} className='z-10 h-[600px] w-40 hover:bg-gray-200'><span className="material-symbols-outlined">&#xe5e1;</span></button>
      </div>
  )
}

export default Carousel