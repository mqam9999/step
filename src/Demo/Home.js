import React, {useState} from 'react';
import Apartments from './HOME/Apartments';
import Car from './HOME/Car';
import FoodLife from './HOME/FoodLife';
import Shopping from './HOME/Shopping';
import Traveling from './HOME/Traveling';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Footer from './Footer'




export default function Home() {
const[index,setIndex]=useState(0);


  return (
    <div>
      
      <section className="find text-white pb-1" >
        <div className="container text-center pt-5">
        <p >OVER 36,500+ ACTIVE LISTINGS</p>
        <h1 className='mb-5'>Find Nearby Places & Things</h1>

        <div className='borderR row p-4 bg-white text-dark mx-auto'>
      
        <div className="input-group mb-3 mx-auto">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mx-auto mt-1">
            <span>
              <select className='form-select border-0  shadow-none'>
              <option>All Areas</option>
              <option>New Village</option>
              <option>Old Town</option>
              <option>Modern City</option>
             </select>
            </span>
        </div>
        <div className='line mt-2'>|</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mx-auto mt-1">
            <span>
               <input type="text" className="form-control border-0  shadow-none" placeholder="Enter a location"/>
            </span>
        </div>
        <div className='line mt-2'>|</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mx-auto mt-1">
             <span>
             <select className='form-select border-0  shadow-none'>
              <option>Price Range</option>
              <option>$100 - $250</option>
              <option>$250 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000 or more</option>
             </select>
             </span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-1">
             <span >
                <button className=' btn btn-secondary text-white border-0  shadow-none'style={{width:"100%"}}><i class="fa-solid fa-magnifying-glass"></i> <span>Search Now</span></button>
             </span>
        </div>
        </div>
        </div>
        </div>

        <div className='row Icons text-center m-5 '>

          <div className=" col-12 col-sm-2 col-md-2 col-lg-2 mx-auto">
         <i class="cursor icon fa-solid fa-house-user"></i>
             <p className='cursor'>Apartments</p>
          </div>
          <div className="col-12 col-sm-2 col-md-2 col-lg-2 mx-auto">
          <i class="cursor icon fa-solid fa-burger"></i>
             <p className='cursor'>Food & Life</p>
          </div>
          <div className="col-12 col-sm-2 col-md-2 col-lg-2 mx-auto">
          <i class="cursor icon fa-solid fa-car-side"></i>
             <p className='cursor'>Cars</p>
          </div>
          <div className="col-12 col-sm-2 col-md-2 col-lg-2 mx-auto">
          <i class="cursor icon fa-solid fa-cart-shopping"></i>
             <p className='cursor'>Shopping</p>
          </div>
          <div className="col-12 col-sm-2 col-md-2 col-lg-2 mx-auto">
          <i class=" cursor icon fa-solid fa-earth-americas"></i>
             <p className='cursor'>Traveling</p>
          </div>

         </div>
        
      </section>



      <section className='container text-center mt-5'>
        <h1><b>Popular Categories</b> </h1>
        <h6 className='mt-3 mb-4 text-muted'>CHECK THEM OUT</h6>

        <div className='components'>
            <div className="row">
                <div className=" col-12 col-sm-12 col-md-2">
                <div className={`do ${index===0?'active':null}`} onClick={()=>setIndex(0)}><i class="mx-auto icon fa-solid fa-house-user"></i></div>
                <div className={`do ${index===1?'active':null}`} onClick={()=>setIndex(1)}><i class="mx-auto icon fa-solid fa-burger"></i></div>
                <div className={`do ${index===2?'active':null}`} onClick={()=>setIndex(2)}><i class="mx-auto icon fa-solid fa-car-side"></i> </div>
                <div className={`do ${index===3?'active':null}`} onClick={()=>setIndex(3)}><i class="mx-auto icon fa-solid fa-cart-shopping"></i> </div>
                <div className={`do ${index===4?'active':null}`} onClick={()=>setIndex(4)}><i class="mx-auto icon fa-solid fa-earth-americas"></i> </div>
                </div>
                <div className="col-12 col-sm-10 col-md-10 mx-auto my-auto">
                  <div hidden={index !== 0}><Apartments/></div>
                  <div hidden={index !== 1}><Car/></div>
                  <div hidden={index !== 2}><FoodLife/></div>
                  <div hidden={index !== 3}><Shopping/></div>
                  <div hidden={index !== 4}><Traveling/></div>
                </div>
            </div>
        </div>

      </section>
      <hr style={{marginTop:70,marginBottom:60}}/>

      <section className='container'>
         <h1 className='text-center'>Recent Listing</h1>
         <p className='text-center mt-3'>CHECK THEM OUT</p>

         <span><Card1/></span>
         <span><Card2/></span>
         <span><Card3/></span>
         
      </section>
      <hr className='mt-5 mb-4'/>

      <Footer/>
    </div>
  )
}
