import React from 'react'

export default function Footer() {
  return (
    <div className='container mx-auto'>
      <div className="row footer mb-4 mx-auto">

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto mt-3">
            <span><i class="fa-solid fa-book me-2"style={{fontSize:35}}></i></span>
            <span style={{fontSize:30,fontWeight:"bold"}}>PlotList</span>
            <p className='mt-3'>Risus venenatis, varius nisi eget, accumsan neque. Aenean ac tristique ante, eget tempus felis quisque.</p>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto mt-3">
            <h3>Helpful Links</h3>
            <div className="row mt-3 ">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
               <a href="/">Categories</a><br /> 
               <a href="/">Reviews</a> <br />
               <a href="/">Listing</a> <br />
               <a href="/">Contact Us</a> 
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
               <a href="/">About Us</a> <br />
               <a href="/">Awards</a> <br />
               <a href="/">Useful Sites</a> <br />
               <a href="/">Privacy Policy</a> 
                </div>
            </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto mt-3">
            <h3>Contact Us</h3>
            <p className='mt-3'>27th Street of New Town, Digital Villa</p>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <a href="/">010-020-0340</a>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <a href="/">090-080-0760</a>
                </div>
            </div>
        </div>

      </div>
      <hr className='mt-5 mb-4'/>
      
      <p className='text text-center'>Copyright © 2045 Plot Listing Co., Ltd. All Rights Reserved.</p>
      <p className='textpara text-center mb-4'><span>Design : </span><span><a className='text text-decoration-none' href="/">TemplateMo</a></span></p>
      
    </div>
  )
}
