import React, { useEffect, useState } from 'react'

function PreviewProducts() {

  const index = 1

  const [data, setData] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch ('/api/products')
    const data = await response.json()
    setData(data)
  }

  return (
    <>
      <div className='border rounded-xl w-96 p-3 bg-white drop-shadow-2xl'>
        <img src={data[index]?.image}/>
        <div className='flex justify-between mt-3'>
          <h3 className='font-semibold text-base'>{data[index]?.title}</h3>
          <div className='flex gap-10 mr-4'>
            <button><span className="material-symbols-outlined">&#xe87d;</span></button>
            <button><span className="material-symbols-outlined">&#xe8cc;</span></button>
          </div>
        </div>
        <div>
          <p>{data[0]?.price + " €"}</p>
        </div>
      </div>
    </>
  )
}

export default PreviewProducts