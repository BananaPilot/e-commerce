"use client"

import React, {useState } from 'react'
let data = require('@/images.json')

function Carousel() {

  const [translate, setTransalte] = useState(0)
  let variable = 1108

  return (
    <>
    <div className='flex justify-center'>
      <button onClick={() => {
        if (translate <= 3324) {
          setTransalte(translate + variable) 
        }
        else{
          setTransalte(-4432)
        }
        console.log(translate);
      }} className='bg-white absolute left-0 z-10 h-[600px] w-24 hover:bg-gray-200'><span className="material-symbols-outlined">&#xe5e0;</span></button>
      {
         <div style={{translate: `${translate}px`}} className='carousel flex justify-center w-5/6 h-[600px] drop-shadow-2xl gap-10'>
          {data.map((element, index) => (
            <img className='aspect-video' src={element.image} key={index}/>
          ))}
        </div>
      }
      <button onClick={() => {
        if (translate >= -3324) {
          setTransalte(translate - variable) 
        }
        else{
          setTransalte(4432)
        }
      }} className='z-10 absolute right-0 bg-white h-[600px] w-24 hover:bg-gray-200'><span className="material-symbols-outlined">&#xe5e1;</span></button>
    </div>
    </>
  )
}

export default Carousel