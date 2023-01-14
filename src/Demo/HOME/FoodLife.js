import React from 'react';
import FoodLifes from '../IMAGES/FoodLifes.jpg';

export default function FoodLife() {
  return (
    <div className='row'>
    <div className='col-12 col-sm-12 col-md-6  mx-auto my-auto'>
      <h1>Food and Lifestyle category is here</h1>
      <p className='text-white mt-4'>You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.</p>
      <div className="btn btn-info mt-4"><span><i class="fa-solid fa-eye me-2"></i></span>Explore More</div>
    </div>

    <div className='col-12 col-sm-12 col-md-6'>
    <img src={FoodLifes} alt='FoodLifes' className='p-5' style={{width:"100%",borderRadius:60}}/>
    </div>
</div>
  )
}
