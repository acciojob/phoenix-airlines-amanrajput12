
import React, { useRef } from "react";
import './../styles/App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementbyvalue } from "./CounterSlice.js";
import { Link } from "react-router-dom";


const App = () => {

  const dispatch =useDispatch()
  const count = useSelector((data)=>data)
  const incrementval = useRef(0);
  console.log(incrementval.current)

  console.log(count.couter.value)
  return (
    <div>
        {/* Do not remove the main div */}

        <h1>Welcome to Flight Booking App</h1>
        <button><Link style={{textDecoration:"none"}} to="/flight-search">Search Flights Here</Link></button>


          {/* <p>{count.couter.value}</p>
           <button onClick={()=>dispatch(increment())}>Increment</button>
           <button onClick={()=>dispatch(decrement())}>Decrement</button>
           <input type="number" onChange={(e)=>incrementval.current=e.target.value} ref={incrementval}  ></input>
           <button onClick={()=>dispatch(incrementbyvalue(incrementval.current))}>Incrementbyval</button> */}
    </div>
  )
}

export default App


