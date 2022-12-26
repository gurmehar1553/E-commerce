import React from 'react'
import fashion1 from '../assets/images/fashion1.jpg'
import fashion2 from '../assets/images/fashion2.jpg'
import fashion3 from '../assets/images/fashion3.jpg'
import fashion4 from '../assets/images/fashion4.jpg'

const NewCollections = () => {
  return (
    <>


<div id="carouselExampleIndicator" className="carousel carousel-dark slides carousel-out my-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button> */}
  </div>
  <div className="carousel-inner carousel-main d-flex justify-content-center">
    <div className="carousel-item active">
      <img src={fashion4} className="d-block w-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={fashion2} className="d-block w-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={fashion3} className="d-block w-50" alt="..." />
    </div>
    {/* <div className="carousel-item">
      <img src={fashion1} className="d-block w-50" alt="..." />
    </div> */}
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={fashion1} className="d-block w-50" alt="..." />
      
    </div>
    <div className="carousel-item">
      <img src={fashion2} className="d-block w-50" alt="..." />
      
    </div>
    <div className="carousel-item">
      <img src={fashion3} className="d-block w-50" alt="..." />
      
    </div>
    <div className="carousel-item">
      <img src={fashion4} className="d-block w-50" alt="..." />
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
    </>
  )
}

export default NewCollections