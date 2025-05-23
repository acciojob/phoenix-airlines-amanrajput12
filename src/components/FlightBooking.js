import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {
  const userdata = useSelector((data)=>data);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const navigate = useNavigate()


  const booking = ()=>{
    if(!(firstName && lastName && email && mobile)){
      alert("All field requird");
      return
    }
    else {
       navigate("/confirmation")
    }

  }
  return (
    <div>
      <h1>Booking Confirmation for Flight {userdata.location.FlightName} (AI-275)</h1>
      <form  >
        <label style={{marginTop:"10px"}}  htmlFor="firstName">First Name*  </label>
        <br/>
        <input onChange={(e)=>setFirstName(e.target.value)} style={{marginTop:"10px",borderTop:"none",borderLeft:"none",borderRight:"none"}} type='text' id="firstName" placeholder='first' />
        <br/>
        <label  style={{marginTop:"10px"}} htmlFor="lastName">Last Name*  </label>
        <br/>
        <input onChange={(e)=>setLastName(e.target.value)} style={{marginTop:"10px", borderTop:"none",borderLeft:"none",borderRight:"none"   }} type='text' id="lastName" placeholder='last' />
        <br/>

        <label style={{marginTop:"10px"}}  htmlFor="email">Email ID*  </label>
        <br/>
        <input onChange={(e)=>setEmail(e.target.value)} style={{marginTop:"10px" , borderTop:"none",borderLeft:"none",borderRight:"none"}} type='email' id="email" placeholder='email' />
        <br/>

        <label  style={{marginTop:"10px"}} htmlFor="mobile">Mobile Number*  </label>
        <br/>
        <input onChange={(e)=>setMobile(e.target.value)} style={{marginTop:"10px",  borderTop:"none",borderLeft:"none",borderRight:"none"}}  type='tel' id="mobile" placeholder='12343433' />
        <br/>

        <input onClick={()=>booking()} style={{marginTop:"10px",backgroundColor:"blue",padding:"5px",color:"white"}} type='button' value="CONFIRM BOOKING" />
      </form>
    </div>
  )
}

export default FlightBooking