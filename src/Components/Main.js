import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import men from '../assets/images/men.jpg'
import jewellery from '../assets/images/jewellery.jpg'
import electronics from '../assets/images/electronics.jpg'
import Footer from './Footer'
import NewCollections from './NewCollections'

const Main = () => {
  return (
    <>
      
      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=1060&t=st=1670823102~exp=1670823702~hmac=6330db03d56bc0cdbf02941832d08e619f94fc36fea43d854af7c97cdc83d7bf" className="d-block" width="100%" height="600px"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://burst.shopifycdn.com/photos/man-in-suit-on-stairs.jpg?width=1200&format=pjpg&exif=1&iptc=1" className="d-block" width="100%" height="600px"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/girl-purple-blouse-black-pants-is-sitting-chair-looking-into-camera-holding-folder-against-background-hangers-with-bright-dresses_197531-17617.jpg?w=996&t=st=1670824045~exp=1670824645~hmac=4f1af3131864ce42581c27b12a92ca9330df9e467b02b256e6e4382382e21326" className="d-block" width="100%" height="600px"  alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

        <Header />
      <div className='hero-section m-sm-5 p-md-3 m-md-3 m-xl-5 p-xl-5 '>
        <div className='col-lg-6 col-sm-12 m-sm-5 p-md-3 m-md-3 p-xl-5 m-xl-5 '>
          <h1 className='mx-5'>Shop-With-Ease</h1><p>Welcome to our online store! Here you'll find a wide selection of products at great prices</p>
          <p>Find the perfect products for any occasion at our online store. Shop now and enjoy fast, convenient shipping</p>
          <p>Experience the best in online shopping with our user-friendly e-commerce store. Browse our selection of products today.</p>
          <button className='btn btn-warning mx-5 btn-main'>Get Started</button> <button className='btn btn-dark mx-5 btn-main'>Recently Added</button>
        </div>
      </div>
      
      <div className=' m-0 p-0 p-lg-5 m-lg-5'>
          <div className='row justify-content-around shadow bg-dark bg-opacity-10 m-sm-3 p-sm-1 p-md-5 m-md-5'>
              <div className="m-md-2 shadow main-sections col-sm-12 col-md-6 col-xl-4">
                <div className='main-section1'></div>
                  <h4><Link className='main-sec-text text-decoration-none' to='/women'>Women's Section</Link></h4>                  
          </div>
          <div className="m-md-2 shadow  main-sections col-sm-12 col-md-6 col-xl-4">
            <div className='main-section2'></div>
                <h4 className=""><Link className='main-sec-text text-decoration-none' to='/men'> Men's Section</Link></h4>      
          </div>
          <div className="m-md-2 shadow  main-sections col-sm-12 col-md-6 col-xl-4">
            <div className='main-section3'></div>
                <h4 className=""><Link className='main-sec-text text-decoration-none' to='/jewellery'>Jewellery Section</Link></h4>           
        </div>
          <div className="m-md-2 shadow main-sections col-sm-12 col-md-6 col-xl-4">
              <div className='main-section4'></div>
                  <h4 className=""><Link className='main-sec-text text-decoration-none' to='/electronics'> Electronics Section</Link></h4>                  
          </div>
        </div>
      </div>

      <NewCollections />
      <Footer />
    </>
  )
}

export default Main
