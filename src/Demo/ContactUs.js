import React, { useState } from 'react'
import Footer from './Footer'

export default function ContactUs() {
  const[input,setInput]=useState({fname:"",lname:"",email:"",Cars:"",Apartment:"",FoodLife:"",Shopping:"",Traveling:"",message:""});
  const[store,setStore]=useState([]);
  const[check,setCheck]=useState("");
  const[fname_show,fname_setShow]=useState();
  const[lname_show,lname_setShow]=useState();
  const[email_show,email_setShow]=useState();
  const[text_show,text_setShow]=useState();
 
  let Update = (e)=>{
    let name=e.target.name;
    let value=e.target.value;

    if(input.fname.length<6){fname_setShow(true)}else{fname_setShow(false)}
    if(input.lname.length<4){lname_setShow(true)}else{lname_setShow(false)}
    if(input.email.length<4){email_setShow(true)}else{email_setShow(false)}
    if(input.message.length<20){text_setShow(true)}else{text_setShow(false)}

    setInput({...input, [name]:value});
  }

  let Tick = (e)=>{
    let name = e.target.name;
    let checked = e.target.checked;
    setCheck({...check,[name]:checked?"true":"false"})
  }

  let Submit = (e)=>{
    e.preventDefault();

    if(input.fname.length<6 || input.lname.length<4 || input.email.length<4 || input.message.length<20){
      alert("Please fill all the field properly")
    }
    else{
      let bond = {...input,...check, id:new Date().getTime().toString()}
      setStore([...store,bond]);
      setInput({fname:"",lname:"",email:"",Cars:"",Apartment:"",FoodLife:"",Shopping:"",Traveling:"",message:""});
      document.getElementById("myForm").reset();
    }
    
  }
 
  return (
    <>


      <section className='Business mb-5 '>
        <div className="container">
          <h5>KEEP IN TOUCH WITH US</h5>
          <h1>Feel Free To Send Us A Message About Your Business Needs</h1>
        </div>
      </section>

      <section className='container mb-5 bg-light  mx-auto my-auto' style={{borderRadius:"25px"}}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-0" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0798274930767!2d86.95972241404762!3d23.708843184609908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f154c5557cb%3A0x42f21a1b31ec3f9e!2sWebel%20IT%20Park%20Asansol%20Branch!5e0!3m2!1sen!2sin!4v1673289628025!5m2!1sen!2sin" className='map' title='map' width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <form className='container' id='myForm' onSubmit={Submit}>
    <div className="row mt-3">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
        <input type="text" className="form-control shadow-none" placeholder="Enter First Name" name="fname" value={input.fname} onChange={Update}/>
        {fname_show?<span className='error'>First name should be minimum 6 character</span>:""}
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
        <input type="text" className="form-control shadow-none" placeholder="Enter Last Name" name="lname" value={input.lname} onChange={Update}/>
        {lname_show?<span className='error'>Last name should be minimum 4 character</span>:""}
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-4">
        <input type="email" className="form-control shadow-none" placeholder="Enter Email" name="email" value={input.email} onChange={Update}/>
        {email_show?<span className='error'>Please fill your email with proper syntax.</span>:""}
      </div>
      <div className="input col-6 col-sm-6 col-md-6 col-lg-4 mt-4">
         <input type="checkbox" name="Cars"  onChange={Tick}/>
         <span className='ms-3'>Cars</span>
       </div>
       <div className="input col-6 col-sm-6 col-md-6 col-lg-4 mt-4">
         <input type="checkbox" name="Apartment" value={check.Apartment} onChange={Tick}/>
         <span className='ms-3'>Apartments</span>
       </div>
       <div className="input col-6 col-sm-6 col-md-6 col-lg-4 mt-4">
         <input type="checkbox" name="Shopping" value={check.Shopping} onChange={Tick}/>
         <span className='ms-3'>Shopping</span>
       </div>
       <div className="input col-6 col-sm-6 col-md-6 col-lg-4 mt-4">
         <input type="checkbox" name="FoodLife" value={check.FoodLife} onChange={Tick}/>
         <span className='ms-3'>Food & Life</span>
       </div>
       <div className="input col-6 col-sm-6 col-md-6 col-lg-4 mt-4">
         <input type="checkbox" name="Traveling" value={check.Traveling} onChange={Tick}/>
         <span className='ms-3'>Traveling</span>
       </div>
       <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-4">
        <textarea className='form-control shadow-none'  rows="4" name="message" value={input.message} onChange={Update}></textarea>
        {text_show?<span className='error'>Please type minimum 20 characters.</span>:""}
      </div>
      <button className="btn btn-info col-11 col-11 col-sm-5 col-md-6 col-lg-4 mt-4  mx-auto mb-4" type="submit">
        <span><i className="fa-solid fa-envelope me-2"></i></span>
        <span>Send Message</span>
      </button>
    </div>
  </form>
          </div>

        </div>
      </section>

      <hr className='mb-5 mt-5'/>
      <Footer/>


    </>
  )
}
