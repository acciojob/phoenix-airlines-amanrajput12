import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchCard = () => {
  const array = new Array(2).fill(null);
  console.log("array",array)
    const [date,setDate] = useState(Math.floor(Math.random()*12));
    const userdata = useSelector((data)=>data);
    console.log("data",userdata);

    const navigate = useNavigate();
  return (
    <div>
      { array.map((_,i)=>  <div onClick={()=>navigate("/flight-booking")} key={i} style={{marginTop:"50px",display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid black",backgroundColor:"whitesmoke",padding:"5px"}}>
        <span style={{backgroundColor:"gray",padding:"15px",borderRadius:"50%",color:"white"}}>A</span>
        <span>
            <p >{date}:00</p>
            <p>{userdata.location.source}</p>
        </span>
        <span>
          <p>{userdata.location.FlightName}</p>
          <p>AI-275</p>
          <p>No Stop</p>
        </span>
        <span>
          <p >{date+5}:00</p>
            <p>{userdata.location.destination}</p>
        </span>
        <span>
          <button style={{backgroundColor:"blue",padding:"10px 20px",borderRadius:"5px",color:"white"}}>RS 3,600</button>
        </span>
    </div>
      )
}
    </div>
  )
}

export default SearchCard