import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import men from '../assets/images/men.jpg'
import jewellery from '../assets/images/jewellery.jpg'
import electronics from '../assets/images/electronics.jpg'

const Main = () => {
  return (
    <>
      <Header />

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
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
      </div>
      
      <div className='container p-5'>
          <div className='row justify-content-around p-5 m-5'>
          
              <div className="m-2 shadow main-sections col-md-4">
                <div className='main-section1'></div>
                {/* <img className="card-img-top" src={"https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?w=2000"} alt=""   /> */}

                  <h4><Link className='main-sec-text text-decoration-none' to='/women'>Women's Section</Link></h4>
                    
              </div>
        
          
          <div className="m-2 shadow  main-sections col-md-4">
            {/* <img className="card-img-top" src={men} alt="" /> */}
            <div className='main-section2'></div>
            <div className="d-flex flex-wrap card-body justify-content-between">
                <h4 className=""><Link className='main-sec-text text-decoration-none' to='/men'> Men's Section</Link></h4>
                
            </div>
        </div>
    
          
          <div className="m-2 shadow  main-sections col-md-4">
            {/* <img className="card-img-top" src={jewellery} alt=""  /> */}
            <div className='main-section3'></div>
            <div className="d-flex flex-wrap card-body justify-content-between">
                <h4 className=""><Link className='main-sec-text text-decoration-none' to='/jewellery'>Jewellery Section</Link></h4>
                
            </div>
        </div>

          <div className="m-2 shadow main-sections col-md-4">
              {/* <img className="card-img-top" src={electronics} alt=""  /> */}
              <div className='main-section4'></div>
              <div className="d-flex flex-wrap card-body justify-content-between">
                  <h4 className=""><Link className='main-sec-text text-decoration-none' to='/electronics'> Electronics Section</Link></h4>
                  
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
