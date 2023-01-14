import React from 'react';
import Apartment from '../IMAGES/Apartment.jpg';

export default function Apartments() {
  return (
<div className='row '>
    <div className='col-12 col-sm-12 col-md-6 mx-auto my-auto'>
      <h1>One Of The Most Trending Stuffs Right Now!</h1>
      <p className='text-white mt-4'>Plot Listing is a responsive Bootstrap website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.</p>
      <div className="btn btn-info mt-4"><span><i class="fa-solid fa-eye me-2"></i></span>Discover More</div>
    </div>

    <div className='col-12 col-sm-12 col-md-6'>
        <img src={Apartment} alt='Apartment'className='p-5' style={{width:"100%",borderRadius:60}}/>
    </div>
</div>
  )
}
