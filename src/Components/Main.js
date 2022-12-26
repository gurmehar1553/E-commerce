import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

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
          <div className='row justify-content-around p-5'>
          
              <div className="card card-items shadow m-3 h-100  bg-info bg-opacity-10 main-sections" style={{width : "300px"}}>
                <img className="card-img-top" src={"https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?w=2000"} alt="" width="100%"  />
                <div className="d-flex flex-wrap card-body justify-content-between">
                  <div>
                    <h4 className="card-title"><Link className='text-black text-decoration-none' to='/women'>Women's Section</Link></h4>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
        
          
          <div className="card card-items shadow m-3 h-100 bg-info bg-opacity-10 main-sections" style={{width : "300px"}}>
            <img className="card-img-top" src={"https://burst.shopifycdn.com/photos/man-in-suit-on-stairs.jpg?width=1200&format=pjpg&exif=1&iptc=1"} alt="" />
            <div className="d-flex flex-wrap card-body justify-content-between">
              <div>
                <h4 className="card-title"><Link className='text-black text-decoration-none' to='/men'> Men's Section</Link></h4>
                <p className="card-text"></p>
              </div>
            </div>
        </div>
    
          
          <div className="card card-items shadow m-3 h-100 bg-info bg-opacity-10 main-sections" style={{width : "300px"}}>
            <img className="card-img-top" src={"data:image/jpeg;base64,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"} alt=""  />
            <div className="d-flex flex-wrap card-body justify-content-between">
              <div>
                <h4 className="card-title"><Link className='text-black text-decoration-none' to='/jewellery'>Jewellery Section</Link></h4>
                <p className="card-text"></p>
              </div>
            </div>
        </div>

          <div className="card card-items shadow m-3 h-100 bg-info bg-opacity-10 main-sections" style={{width : "300px"}}>
              <img className="card-img-top" src={"https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg"} alt=""  />
              <div className="d-flex flex-wrap card-body justify-content-between">
                <div>
                  <h4 className="card-title"><Link className='text-black text-decoration-none' to='/electronics'> Electronics Section</Link></h4>
                  <p className="card-text"></p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
