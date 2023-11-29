import React from 'react'
import Card from './Card'

export default function Main() {
  var macbook = 'https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg'
  var tablet = 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVeZavlWEyVXSJBRfTb6WQNNoEnO_0aOinK3zjHs3JfW6MBUYERA2rV4j4zoGr4puUETtVZnr1QlbxILJubHsrBKF2YuVCMNmSbENgRX6mrc3l6aHpb4SOtowGroo6Qelaj-LXV7s9HA&usqp=CAc'
  return (
    <div className='flex justify-center items-center flex-col gap-2 min-h-fit'>
      <Card id="1" dest={macbook} title="Macbook" price={70000}/>
      <Card id="2" dest={tablet} title="Lenvo Z pad" price={12000}/>
    </div>
  )
}
