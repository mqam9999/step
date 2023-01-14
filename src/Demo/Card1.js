import React from 'react';
import card1 from './IMAGES/card1.jpg';
import card4 from './IMAGES/card4.jpg';
import card7 from './IMAGES/card7.jpg';

export default function Card1() {
let a = document.getElementById('demo11');
setInterval(() => {
   return a
}, 1000);


  return (
    <div className='mt-2 mb-4'>
      <div id="demo11" className="carousel slide " data-bs-ride="carousel">

  
<div className="carousel-indicators ">
  <button type="button" data-bs-target="#demo11" data-bs-slide-to="0" className="active" ></button>
  <button type="button" data-bs-target="#demo11" data-bs-slide-to="1" ></button>
  <button type="button" data-bs-target="#demo11" data-bs-slide-to="2" ></button>
</div>


<div className="carousel-inner rounded-4" id='move' >
  <div className="carousel-item active"  >
  <div className='row bg-light rounded'>
          <img src={card1} alt="card1" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(18) Reviews</span>
             <h3 className='margin'>1.First Apartment Unit</h3>
             <p className='margin'style={{color:"grey"}}>by: Sale Agent</p>
             <div >
                <span className='me-2'><i class="fa-solid fa-money-check-dollar"></i></span>
                <span>$450-$950 / month with taxes</span>
             </div>
             <p className='margin'style={{color:"grey"}}>Details: 2760 sq ft</p>
             <div>
                <span><i class="fa-solid fa-bed me-2"></i></span>
                <span>4 Bedrooms</span>
             </div>
             <div className='margin'>
                <span><i class="me-2 fa-solid fa-bath" style={{fontSize:20}}></i></span>
                <span>4 Bathrooms</span>
             </div>
             <button className="btn btn-info margin">
                <span><i class="fa-solid fa-eye me-2"></i></span>
                <span>Contact Now</span>
             </button>
          </div>
       </div>
  </div>
  <div className="carousel-item" >
  <div className='row bg-light rounded'>
          <img src={card4} alt="card4" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(24) Reviews</span>
             <h3 className='margin'>4.Sunshine fourth Apartment</h3>
             <p className='margin'style={{color:"grey"}}>by: Sale Agent</p>
             <div >
                <span className='me-2'><i class="fa-solid fa-money-check-dollar"></i></span>
                <span>$3,600 / month with taxes</span>
             </div>
             <p className='margin'style={{color:"grey"}}>Details: 3660 sq ft</p>
             <div>
                <span><i class="fa-solid fa-bed me-2" ></i></span>
                <span>5 Bedrooms</span>
             </div>
             <div className='margin'>
                <span><i class="me-2 fa-solid fa-bath" style={{fontSize:20}}></i></span>
                <span>3 Bathrooms</span>
             </div>
             <button className="btn btn-info margin">
                <span><i class="fa-solid fa-eye me-2"></i></span>
                <span>Contact Now</span>
             </button>
          </div>
       </div>
  </div>
  <div className="carousel-item" >
  <div className='row bg-light rounded'>
          <img src={card7} alt="card7" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(24) Reviews</span>
             <h3 className='margin'>7.Sunny Aaprtment</h3>
             <p className='margin'style={{color:"grey"}}>by: Sale Agent</p>
             <div >
                <span className='me-2'><i class="fa-solid fa-money-check-dollar"></i></span>
                <span>$450 / month with taxes</span>
             </div>
             <p className='margin'style={{color:"grey"}}>Details: 1640 sq ft</p>
             <div>
                <span><i class="fa-solid fa-bed me-2"></i></span>
                <span>8 Bedrooms</span>
             </div>
             <div className='margin'>
                <span><i class="me-2 fa-solid fa-bath" style={{fontSize:20}}></i></span>
                <span>5 Bathrooms</span>
             </div>
             <button className="btn btn-info margin">
                <span><i class="fa-solid fa-eye me-2"></i></span>
                <span>Contact Now</span>
             </button>
          </div>
       </div>
  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo11" data-bs-slide="prev" >
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo11" data-bs-slide="next" >
  <span className="carousel-control-next-icon"></span>
</button>
</div>
    </div>
  )
}
