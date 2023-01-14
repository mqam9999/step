import React from 'react';
import card3 from './IMAGES/card3.jpg';
import card9 from './IMAGES/card9.jpg';

export default function ListingCard8() {
  return (
    <div className='mt-4'>
      <div id="demo7" className="carousel slide " data-bs-ride="carousel">

  
<div className="carousel-indicators ">
  <button type="button" data-bs-target="#demo7" data-bs-slide-to="0" className="active" ></button>
  <button type="button" data-bs-target="#demo7" data-bs-slide-to="1" ></button>
</div>


<div className="carousel-inner rounded-4" >
  <div className="carousel-item active" >
  <div className='row bg-light rounded'>
          <img src={card3} alt="card3" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(18) Reviews</span>
             <h3 className='margin'>Traveling Item 2</h3>
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
  <div className="carousel-item">
  <div className='row bg-light rounded'>
          <img src={card9} alt="card9" className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 ' />
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto my-auto p-5">
             <span className='me-2 cursor'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             <span>(24) Reviews</span>
             <h3 className='margin'>Traveling Item 5</h3>
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
 </div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo7" data-bs-slide="prev" >
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo7" data-bs-slide="next" >
  <span className="carousel-control-next-icon"></span>
</button>
</div>
    </div>
  )
}
