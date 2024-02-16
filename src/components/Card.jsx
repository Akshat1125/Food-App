import React, { useEffect, useState ,useRef} from 'react'
import { UseDispatchCart, UseCart } from './ContextReducer';

export default function Card(props) {
  let data= UseCart()
  const priceRef =useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItem;
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const dispatch = UseDispatchCart();

  const handleAddToCart = async () => {
      let food = []
      for (const item of data) {
        if (item.id === foodItem._id) {
          food = item;

          break;
        }
      }
      if (food != []) {
        if (food.size === size) {
          await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
          return
        }
        else if (food.size !== size) {
          await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
          console.log("Size different so simply ADD one more to the list")
          return
        }
        return
      }

      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })

    }

let finalPrice = qty* parseInt(options[size]);
useEffect(()=>{
  setSize(priceRef.current.value)
},[])

  return (
    <div>
      <div className="card mt-4" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img src={props.foodItem.img} className="card-img-top" style={{ height: "130px", objectFit: "cover",margin:'0' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-warning round" onChange={(e)=>setQty(e.target.value)} >{Array.from(Array(6), (e, i) => { return (<option key={i + 1} value={i + 1}>{i + 1}</option>) })}</select>
            <select className="m-2 h-100 bg-warning round"
            ref={priceRef} onChange={(e)=>setSize(e.target.value)}>{priceOptions.map((data) => {
              return <option key={data} value={data}>{data}</option>
            })}</select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <div className='btn btn-primary justify-center ms-2' onClick={handleAddToCart}> Add to Cart</div>
        </div>
      </div>
    </div>
  )
}
