import React from 'react';
import Travelings from '../IMAGES/Travelings.jpg';

export default function Traveling() {
  return (
    <div className='row'>
    <div className='col-12 col-sm-12 col-md-6 mx-auto my-auto'>
      <h1>Information and Safety Tips for Traveling</h1>
      <p className='text-white mt-4'>You are allowed to use this template for your commercial websites. Sit amet malesuada sapien tellus vel ipsum. Pellentesque in ipsum ut orci vehicula sagittis et in.</p>
      <div className="btn btn-info mt-4"><span><i class="fa-solid fa-eye me-2"></i></span>Read More</div>
    </div>

    <div className='col-12 col-sm-12 col-md-6'>
    <img src={Travelings} alt='Travelings' className='p-5' style={{width:"100%",borderRadius:60}}/>
    </div>
</div>
  )
}
