import React from 'react'
import { useNavigate } from 'react-router-dom'

const FlightConfirm = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Thank you for  the Booking. Click the below button to return to home page</p>
      <button onClick={()=>navigate("/")} style={{backgroundColor:"transparent",border:"1px solid blue",color:"blue",padding:"5px"}}>Back To Home</button>
    </div>
  )
}

export default FlightConfirm