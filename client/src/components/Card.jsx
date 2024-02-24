import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function Card({id, title, dest, price, des}) {
   const dispatch = useDispatch();
  const quantity = 0;
  return (
    <div className='flex flex-col h-fit gap-4 w-[300px] border border-gray-700 p-4 min-h-fit'>
        <img className='w-fill h-fill' src={dest} alt="Random" />
        <div className='flex flex-col w-3/4'>
            <h2><strong>{title}</strong></h2>
             Price : {price} <br />
             Description : <p>{des}</p>
             <div className='w-full flex h-fill items-center justify-center'>
              
             <button className='bg-yellow-400 w-full p-3 rounded-lg'
                onClick={()=>{ 
                  dispatch(addToCart({id, title,dest, price, quantity}))}}>
                Add to cart
             </button>
                    </div>
        </div>
    </div>
  )
}
