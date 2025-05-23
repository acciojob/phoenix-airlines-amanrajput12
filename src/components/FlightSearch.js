import React, { useRef, useState } from 'react'
import SearchCard from './SearchCard';
import { useDispatch, useSelector } from 'react-redux';
import { addroute } from './LocationSlice';

const city =["Delhi","Mumbai","Kolkata","Kochi","Jaipur"]

const FlightSearch = () => {
  const [source,setSource] = useState("");
  const [destination,setDestination]= useState("");
  const [roundtrip,setRoundtrip] = useState(false);
  const [departDate,setDepartDate] = useState("");
  const [returnDate,setReturnDate] =useState("");
  const dispatch = useDispatch()
  const flightcart = useSelector((data)=>data)


  const formvalidate=()=>{
    if(!(source && destination && departDate)) return false;
      if(roundtrip  && !returnDate) return false;

      return true
  }


  const addlocation =()=>{
    dispatch(addroute({source:source,destination:destination}))
  }
  console.log(new Date().toISOString().split("T")[0])
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <section>
        <input type='radio' onChange={()=>setRoundtrip(false)} name="trip" id='oneway' />
         <label htmlFor='oneway'>One Way</label>
         <input id='roundtrip' type="radio" name="trip" onChange={(e)=>setRoundtrip(true)} />
         <label htmlFor='roundtrip'>Round Trip</label>
      </section>
        <select defaultValue="" onChange={(e)=>setSource(e.target.value)}>
           <option value="" disabled>Select Source</option>
           {city.map((value,i)=>  <option key={i} disabled={destination==value} value={value}>{value}</option>)}
         
          
        </select>

         <select defaultValue="" onChange={(e)=>setDestination(e.target.value)}>
           <option value="" disabled>Select Source</option>
           {city.map((value,i)=>  <option key={i} disabled={source==value} value={value}>{value}</option>)}
        </select>
        <input onChange={(e)=>setDepartDate(e.target.value)} type="date" min={new Date().toISOString().split("T")[0]} />

        {roundtrip && <input type='date' onChange={(e)=>setReturnDate(e.target.value)} min={departDate} disabled={departDate==""} />}
         <button onClick={addlocation} disabled={!formvalidate()}>Search Flight</button>
        { flightcart.location.flight && <SearchCard/> }
    </div>
  )
}

export default FlightSearch