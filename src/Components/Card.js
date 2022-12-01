import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="card" style={{width : "300px"}}>
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                {/* <a href="#" class="btn btn-primary">See Profile</a> */}
            </div>
        </div>
    </div>
  )
}

export default Card;