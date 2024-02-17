import React from 'react'

export default function Coursel() {


  return (
    <div>
      {/* <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id='caursol'>
    <div className="carousel-item active " data-bs-interval="10000">
      <img src="https://source.unsplash.com/random/900x700/?ice-cream" className="d-block w-100" alt="..."//>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."//>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."//>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" id='caursol'>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src="https://source.unsplash.com/random/900x700/?ice-cream" className=" object-fit-cover w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
