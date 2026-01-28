import React from 'react'

function CellPhoneProductsCart({img,name,stock}) {
  return (
        <div className='flex p-8 space-x-4'>

           <div><h1>{name}</h1>
           <p>{stock}</p></div>

          <div><img src={img}></img></div>


        </div>
  )
}

export default CellPhoneProductsCart