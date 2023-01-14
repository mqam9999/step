import React, { useState } from 'react'
import Footer from './Footer';


export default function Category() {
  const[index,setIndex]=useState(0);
  return (
    <div>

      <section className='Business '>
        <div className="container">
          <h5>CATEGORIES WITH SIMPLE TABS</h5>
          <h1>We Have A Wide Range Of Business Categories For You</h1>
        </div>
      </section>

      <section className='nowback'>
        <div className=" container mx-auto">
          <div className="yupp row2 row mx-auto ">
            <div className={` col-12 col-sm-2 col-md-2 col-lg-2 mx-auto bghover m-0 bghover p-2 ${index===0?'active':null}`} onClick={()=>setIndex(0)}>
                <div className=' d-flex mx-auto'>
                  <i class="secticon icon fa-solid fa-house-user mx-auto"></i>
                  <h6 className='mt-5 mx-auto'>Apartment</h6>
                </div>
            </div>
            <div className={`col-12 col-sm-2 col-md-2 col-lg-2 mx-auto bghover p-2 ${index===1?'active':null}`} onClick={()=>setIndex(1)}>
                <div className='d-flex mx-auto'>
                  <i class="secticon icon fa-solid fa-burger mx-auto"></i>
                  <h6 className='mt-5 mx-auto'>Food & Life</h6>
                </div>
            </div>
            <div className={`col-12 col-sm-2 col-md-2 col-lg-2 mx-auto bghover p-2 ${index===2?'active':null}`} onClick={()=>setIndex(2)}>
                <div className='d-flex mx-auto'>
                  <i class="secticon icon fa-solid fa-car-side mx-auto"></i>
                  <h6 className='mt-5 mx-auto'>Car</h6> 
                </div>
            </div>
            <div className={`col-12 col-sm-2 col-md-2 col-lg-2 mx-auto bghover p-2 ${index===3?'active':null}`} onClick={()=>setIndex(3)}>
                <div className='d-flex mx-auto'>
                  <i class="secticon icon fa-solid fa-cart-shopping mx-auto"></i>
                  <h6 className='mt-5 mx-auto'>Shopping</h6>
                </div>
            </div>
            <div className={`col-12 col-sm-2 col-md-2 col-lg-2 mx-auto bghover p-2 ${index===4?'active':null}`} onClick={()=>setIndex(4)}>
                <div className='d-flex mx-auto'>
                  <i class="secticon icon fa-solid fa-earth-americas mx-auto"></i>
                  <h6 className='mt-5 mx-auto'>Traveling</h6> 
                </div>
            </div>
          </div>

          <div className=" row mx-auto mt-5 mb-3 " hidden={index !== 0}>
            <div className="butn col-12 col-sm-12 col-md-12 col-lg-3 row2 row3">
                <div className=' now d-flex justify-content-center'>
                  <i class="secticon icon fa-solid fa-house-user "></i>
                  <h6 className='mt-5'><b> Apartment</b></h6>
                </div>
            </div>
            <div className="Lorembg col-12 col-sm-12 col-md-12 col-lg-6 row2 row3 bg-white text-dark">
              <p className='mt-2'>An apartment, or flat, is a self-contained housing unit that occupies part of a building, generally on a single story. There are many names for these overall buildings.</p>
            </div>
           
            <div className=" my-auto col-12 col-sm-12 col-md-12 col-lg-3 mt-4">
            <button type="button" style={{width:"100%"}} class="butn btn btn-dark text-white p-2"><span><i class="pluslogo fa-solid fa-plus"></i></span><b>Check Your Listing</b> </button>
            </div>
          </div>


          <div className="row mx-auto mt-5 mb-3 " hidden={index !== 1}>
            <div className="butn col-12 col-sm-12 col-md-12 col-lg-3 row2 row3">
                <div className='d-flex justify-content-center'>
                  <i class="secticon icon fa-solid fa-house-user "></i>
                  <h6 className='mt-5'><b>Food & Life</b> </h6>
                </div>
            </div>
            <div className="Lorembg col-12 col-sm-12 col-md-12 col-lg-6 row2 row3 bg-white text-dark">
              <p className='mt-2'>Food for Life Global is a non-profit vegan food relief organization founded in 1995 to serve as the headquarters for Food for Life projects.</p>
            </div>
            <div className="my-auto col-12 col-sm-12 col-md-12 col-lg-3 mt-4" >
            <button type="button" style={{width:"100%"}} class="butn btn btn-dark text-white p-2"><span><i class="pluslogo fa-solid fa-plus"></i></span><b>Check Your Listing</b> </button>
            </div>
          </div>

          <div className="row mx-auto mt-5 mb-3 " hidden={index !== 2}>
            <div className="butn col-12 col-sm-12 col-md-12 col-lg-3 row2 row3">
                <div className='d-flex justify-content-center'>
                  <i class="secticon icon fa-solid fa-house-user "></i>
                  <h6 className='mt-5'><b>Car</b></h6>
                </div>
            </div>
            <div className="Lorembg col-12 col-sm-12 col-md-12 col-lg-6 row2 row3 bg-white text-dark">
              <p className='mt-2'>A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people.</p>
            </div>
            <div className="my-auto  col-12 col-sm-12 col-md-12 col-lg-3 mt-4" >
            <button type="button" style={{width:"100%"}} class="butn btn btn-dark text-white p-2"><span><i class="pluslogo fa-solid fa-plus"></i></span><b>Check Your Listing</b></button>
            </div>
          </div>

          <div className="row mx-auto mt-5 mb-3 " hidden={index !== 3}>
            <div className="butn col-12 col-sm-12 col-md-12 col-lg-3 row2 row3">
                <div className='d-flex justify-content-center'>
                  <i class="secticon icon fa-solid fa-house-user "></i>
                  <h6 className='mt-5'><b>Shopping</b></h6>
                </div>
            </div>
            <div className="Lorembg col-12 col-sm-12 col-md-12 col-lg-6 row2 row3 bg-white text-dark">
              <p className='mt-2'>Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential.</p>
            </div>
            <div className="my-auto  col-12 col-sm-12 col-md-12 col-lg-3 mt-4" >
            <button type="button" style={{width:"100%"}} class="butn btn btn-dark text-white p-2"><span><i class="pluslogo fa-solid fa-plus"></i></span><b>Check Your Listing</b></button>
            </div>
          </div>

          <div className="row mx-auto mt-5 mb-3 " hidden={index !== 4}>
            <div className="butn col-12 col-sm-12 col-md-12 col-lg-3 row2 row3">
                <div className='d-flex justify-content-center'>
                  <i class="secticon icon fa-solid fa-house-user "></i>
                  <h6 className='mt-5'><b>Traveling</b></h6>
                </div>
            </div>
            <div className="Lorembg col-12 col-sm-12 col-md-12 col-lg-6 row2 row3 bg-white text-dark">
              <p className='mt-2'>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane.</p>
            </div>
            <div className="my-auto  col-12 col-sm-12 col-md-12 col-lg-3 mt-4" >
            <button type="button" style={{width:"100%"}} class="butn btn btn-dark text-white p-2"><span><i class="pluslogo fa-solid fa-plus"></i></span><b>Check Your Listing</b></button>
            </div>
          </div>

          <hr className='mt-5 mb-5'/>

        </div>
      </section>


      <section>
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 mt-2">
              <h3>Description for Apartments</h3>
              <p>You are allowed to use this template for your commercial websites. Sodales, tempor justo vel, porta felis. Praesent at lorem sollicitudin, efficitur mi non ante.Sit amet malesuada sapien tellus vel ipsum. Pellentesque in ipsum ut orci vehicula sagittis et in. Cras gravida, leo quis lobortis tristique, sem dui nunc</p>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-3 mt-2">
              <h4 className='mb-4'><span><i class="fa-regular fa-rectangle-list me-2"></i></span>Total Listings</h4>
              <p className='text-secondary'>This Week: 200 Listings & 150 Sales</p>
              <p className='text-secondary'>This Month: 1,800 Listings & 1,560 Sales</p> 
              <p className='text-secondary'>This Year: 16,000 Listings & 14,000 Sales</p>
            </div>
          </div>
          <hr className='mt-5 mb-5'/>
        </div>
      </section>

      

      <section>
        <div className="container">
          <h3>General Info. about Apartments</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ak incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidat doerski. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

          <p>* Listing should have all the proper documents before being checked in. </p>
          <p>** Listing will be checked by our team members. </p>
          <p>*** After being sold, it should imediately be removed from our site and properly monitored.</p>
        </div>
      </section>

      <hr className='mt-5 mb-5'/>

      <Footer/>

    </div>
  )
}
