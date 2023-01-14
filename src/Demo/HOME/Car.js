import React from 'react';
import Cars from '../IMAGES/Cars.jpg';

export default function Car() {
  return (
    <div className='row'>
    <div className='col-12 col-sm-12 col-md-6 mx-auto my-auto'>
      <h1>Best car rentals for your trips!</h1>
      <p className='text-white mt-4'>Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates.</p>
      <div className=" btn btn-info mt-4"><span><i class="fa-solid fa-eye me-2"></i></span> More Listing</div>
    </div>

    <div className='col-12 col-sm-12 col-md-6'>
        <img src={Cars} alt='Cars' className='p-5' style={{width:"100%",borderRadius:60}}/>
    </div>
</div>
  )
}
