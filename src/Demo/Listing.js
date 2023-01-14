import React, { useState } from 'react';
import ListingCard1 from './ListingCard1';
import ListingCard2 from './ListingCard2';
import ListingCard3 from './ListingCard3';
import ListingCard4 from './ListingCard4';
import ListingCard5 from './ListingCard5';
import ListingCard6 from './ListingCard6';
import ListingCard7 from './ListingCard7';
import ListingCard8 from './ListingCard8';
import Footer from './Footer';

export default function Listing() {
  const[ind,setInd]=useState(0);
  return (
    <div>

      <section className='Business'>
        <div className="container">
          <h5>CHECK OUT OUR LISTINGS</h5>
          <h1>Item Listings Of Different Categories</h1>
        </div>
      </section>

      <section className='container'>

            <div className="row mt-5 mb-5">
                <div className="text-center col-12 col-sm-12 col-md-12 col-lg-2">
                <div className= {`did ${ind===0?'active':null}`}onClick={()=>setInd(0)}><i class="icon fa-solid fa-house-user"></i><h6>Apartments</h6> </div>
                <div className={`did mt-2 ${ind===1?'active':null}`} onClick={()=>setInd(1)}><i class="icon fa-solid fa-burger"></i><h6>Food & Life</h6></div>
                <div className={`did mt-2 ${ind===2?'active':null}`} onClick={()=>setInd(2)}><i class="icon fa-solid fa-car-side"></i><h6>Car</h6> </div>
                <div className={`did mt-2 ${ind===3?'active':null}`} onClick={()=>setInd(3)}><i class="icon fa-solid fa-earth-americas"></i><h6>Traveling</h6> </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-12 col-lg-10 mx-auto my-auto">
                  <span hidden={ind!==0}><ListingCard1 /></span>
                  <span hidden={ind!==0}><ListingCard2/></span>

                  <span hidden={ind!==1}><ListingCard3/></span>
                  <span hidden={ind!==1}><ListingCard4/></span>

                  <span hidden={ind!==2}><ListingCard5/></span>
                  <span hidden={ind!==2}><ListingCard6/></span>

                  <span hidden={ind!==3}><ListingCard7/></span>
                  <span hidden={ind!==3}><ListingCard8/></span>
                
                </div>
            </div>

      </section>
      <hr className='mt-5 mb-5'/>
      <Footer/>

    </div>
  )
}
