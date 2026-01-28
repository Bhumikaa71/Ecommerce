import React from 'react'
const CameraProduct = ({img, name, items}) =>{

  return (
    <div>
        <div><img src={img} className='mt-10 px-4 py-3'></img>
        <h1 className='text-bold text-3xl font-bold flex justify-center'>{name}</h1>
        <h2 className='text-gray-500 flex justify-center'>{items}</h2>
        </div>
    </div>
  )
}


export default CameraProduct