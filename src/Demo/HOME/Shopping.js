import React from 'react';
import Shoppings from '../IMAGES/Shoppings.jpg';

export default function Shopping() {
  return (
    <div className='row'>
    <div className='col-12 col-sm-12 col-md-6 mx-auto my-auto'>
      <h1>Shopping List: Images from Unsplash</h1>
      <p className='text-white mt-4'>Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.</p>
      <div className="btn btn-info mt-4"><span><i class="fa-solid fa-eye me-2"></i></span>Discover More</div>
    </div>

    <div className='col-12 col-sm-12 col-md-6'>
    <img src={Shoppings} alt='Shoppings' className='p-5' style={{width:"100%",borderRadius:60}}/>
    </div>
</div>
  )
}
