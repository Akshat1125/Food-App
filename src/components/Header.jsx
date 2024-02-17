import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Model';
import Cart from '../screens/Cart';
import { UseCart } from './ContextReducer';
export default function Header() {
  let data = UseCart();
const [cartView,setCartView] = useState(false);
const loadCart = () => {
  setCartView(true)
}
 const navigate = useNavigate();
const handleLogout =()=>{
  localStorage.removeItem("authToken")
  navigate("/swiggy-clone/login")
}

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic text-danger" to="/">Fooding</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/swiggy-clone">Home</Link>
            </li>
            {(localStorage.getItem("authToken")) ? <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/swiggy-clone/myOrder">My Orders</Link>
            </li>
              : ""
            }
          </ul>
          {(!localStorage.getItem("authToken")) ?
            <div className='d-flex'>
              <Link className="btn bg-white text-primary mx-1" to="/swiggy-clone/Login">Login</Link>
              <Link className="btn bg-white text-primary mx-1" to="/swiggy-clone/createuser">Signup</Link>
            </div>
            :
            <div>
              <div className='btn bg-white text-primary mx-2' onClick={loadCart}> My Cart{" "}
              <Badge pill bg="danger">{data.length}</Badge>
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart/></Modal> : ""}
              <div className='btn bg-white text-danger mx-2' onClick={handleLogout} > Logout</div>
            </div>
          }
        </div>
      </div>
    </nav>
  </>
  )
}
