import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function Card({id, title, dest, price}) {
   const dispatch = useDispatch();
  return (
    <div className='flex gap-4 w-3/6 border border-2 border-gray-700 p-4 min-h-fit'>
        <img className='h-64 w-64' src={dest} alt="Random" />
        <div className='flex flex-col'>
            <h2>{title}</h2>
             Price : {price} <br />
             Description : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio incidunt a rem architecto reprehenderit alias omnis harum doloremque suscipit laudantium amet, ullam, cupiditate, reiciendis nobis asperiores. Vel, quae laborum voluptatem minus nihil voluptatum!</p>
             <button className='bg-yellow-400 w-1/2 p-3 rounded-lg'
                onClick={()=>{dispatch(addToCart({id, title,dest, price}))}}>
                Add to cart
             </button>
        </div>
    </div>
  )
}
