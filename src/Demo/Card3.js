import React from 'react';
import card3 from './IMAGES/card3.jpg';
import card6 from './IMAGES/card6.jpg';
import card9 from './IMAGES/card9.jpg';

export default function Card3() {
  return (
    <div className='mt-2 mb-4'>
      <div id="demo13" className="carousel slide " data-bs-ride="carousel">

  
<div className="carousel-indicators ">
  <button type="button" data-bs-target="#demo13" data-bs-slide-to="0" className="active" ></button>
  <button type="button" data-bs-target="#demo13" data-bs-slide-to="1" ></button>
  <button type="button" data-bs-target="#demo13" data-bs-slide-to="2" ></button>
</div>


<div className="carousel-inner rounded-4" >
  <div className="carousel-item active" >
  <div className='row bg-light rounded'>
          <img src={card3} alt="card1" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(36) Reviews</span>
             <h3 className='margin'>3.Secret Place Hidden House</h3>
             <p className='margin'style={{color:"grey"}}>by: Best Property</p>
             <div >
                <span className='me-2'><i class="fa-solid fa-money-check-dollar"></i></span>
                <span>$1,500-$3,600 / month with taxes</span>
             </div>
             <p className='margin'style={{color:"grey"}}>Details: 5500 sq ft</p>
             <div>
                <span><i class="fa-solid fa-bed me-2"></i></span>
                <span>4 Bedrooms</span>
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
  <div className="carousel-item">
  <div className='row bg-light rounded'>
          <img src={card6} alt="card4" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(40) Reviews</span>
             <h3 className='margin'>6.Amazing Pool Party Villa</h3>
             <p className='margin'style={{color:"grey"}}>by: Sale Agent</p>
             <div >
                <span className='me-2'><i class="fa-solid fa-money-check-dollar"></i></span>
                <span>$3,850 / month with taxes</span>
             </div>
             <p className='margin'style={{color:"grey"}}>Details: 3660 sq ft</p>
             <div>
                <span><i class="fa-solid fa-bed me-2" ></i></span>
                <span>4 Bedrooms</span>
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
          <img src={card9} alt="card7" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(20) Reviews</span>
             <h3 className='margin'>9.Relaxing BBQ Party Villa</h3>
             <p className='margin'style={{color:"grey"}}>by: Sale Agent</p>
             <div >
                <span className='me-2'><i class="fa-solid fa-money-check-dollar"></i></span>
                <span>$4,760 / month with taxes</span>
             </div>
             <p className='margin'style={{color:"grey"}}>Details: 2880 sq ft</p>
             <div>
                <span><i class="fa-solid fa-bed me-2"></i></span>
                <span>6 Bedrooms</span>
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
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo13" data-bs-slide="prev" >
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo13" data-bs-slide="next" >
  <span className="carousel-control-next-icon"></span>
</button>
</div>
    </div>
  )
}
