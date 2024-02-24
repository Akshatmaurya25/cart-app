import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../redux/cartSlice";

export default function Main() {
  var macbook = "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg";
  var tablet =
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVeZavlWEyVXSJBRfTb6WQNNoEnO_0aOinK3zjHs3JfW6MBUYERA2rV4j4zoGr4puUETtVZnr1QlbxILJubHsrBKF2YuVCMNmSbENgRX6mrc3l6aHpb4SOtowGroo6Qelaj-LXV7s9HA&usqp=CAc";
  const dispatch = useDispatch();
  // fetchedProducts =   fetchedProducts;
  useEffect(() => {
    dispatch(fetchItem());
  }, []);
  let fetchedProducts = useSelector((state) => state.cart.entities);
  console.log(fetchedProducts)

  return (
    <div className="flex flex-wrap justify-center items-center w-full  gap-2 min-h-fit">
      {/* <Card id="1" dest={macbook} title="Macbook" price={70000} />
      <Card id="2" dest={tablet} title="Lenvo Z pad" price={12000} /> */}
      { fetchedProducts.map((data, key=0) => (
        <Card
          key={data.id}
          title={data.title}
          id={data.id}
          dest={data.image}
          des={data.description}
          price={"$"+data.price}
          />
          ))
          
          }
    </div>
  );
}
