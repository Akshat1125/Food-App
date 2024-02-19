import React, { useState, useEffect, useId } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Coursel from '../components/Coursel'
// import { Height } from '@material-ui/icons'
// import { v4 as uuidv4 } from 'uuid';
import "../App.css"

export default function Home() {
  // const foodId = uuidv4();
  const [foodCat, setfoodCat] = useState(undefined);
  const [foodItems, setfoodItems] = useState([]);
  const [search, setSearch] = useState("");
  const ph =[1,2,3,4,5,6,7,8]

  const loadData = async () => {
    let response = await fetch("https://food-app-backend-2ds1.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      }
    });
    response = await response.json();
    setfoodItems(response[0]);
    setfoodCat(response[1]);
    // console.log(response[0],response[1])
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <>{(foodCat)?<>
    <Header />
      <Coursel />
      <input className="form-control me-2 text-center" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      <d className='container'>
        {
          (foodCat) ? foodCat.map((data) => {
            return (
              <div className='row mb-3' key={data._id}>
                <div className='fs-3 m-3' >{data.CategoryName}</div>
                <hr />
                {foodItems != [] ? foodItems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems => {
                  return (
                    <div key={filterItems.id} className='col-12 col-md-6 col-lg-3' style={{ display: "flex", justifyContent: "center" }}>
                      <Card foodItem={filterItems}
                        options={filterItems.options[0]}
                      />
                    </div>
                  )
                })
                  : <div>No such data found</div>}
              </div>
            )
          })
            : <div style={{ display: "flex", justifyContent: "center" }}>{
            ph.map(()=>{return(<div className="card">
            <img src='' alt="" />

              <button disabled className='bg-primary'>Click Me</button>
          </div>)})}
          </div>
        }
      </d>
      <Footer /></>:
      <div style={{ display:'grid',placeItems:'center',  height:'100vh',width:'100vw' }}>
        <h1 style={{margin:'auto',color:'red'}}>Fooding</h1>
      </div>
      }
    </>
  )
}
