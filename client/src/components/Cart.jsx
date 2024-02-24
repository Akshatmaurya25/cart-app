import React, { useEffect } from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { remove , min, add, fetchItem} from '../redux/cartSlice'

export default function Cart() {
  const cartitems = useSelector(state => state.cart.cart)
  const dispatch= useDispatch()
  useEffect(()=>{
   
  })
  return (
    <div className='flex flex-col justify-center items-center min-h-fit'>
     {
      cartitems.map((i,key)=>{
        console.log(i.quantity)
        return(
          
          <div className='flex gap-2 m-6' key={key+1}>
            <img className='h-36 w-36' src={i.dest} alt="" />
            <div>

            <h2>{i.title}</h2>
            <p>{i.price}</p>

            <div className='flex m-2 flex-row gap-5 justify-center items-center'>
              <button className='h-10 w-10 bg-red-500 rounded-lg'
              onClick={()=>{
                dispatch(min(i))
              }
              }
              >-</button>
              <p>{i.quantity}</p>
              <button className='h-10 w-10 bg-green-500 rounded-lg'
              onClick={()=>{dispatch(add(i))}}
              >+</button>
            </div>

            <button
            className='w-24 h-12 rounded-lg bg-red-700'
            onClick={() =>{
              dispatch(remove(i.id))
            }}
            >Remove</button>
            </div>
          
          </div> 
        
          
        )
        
      })
     }
    </div>
  )
}
