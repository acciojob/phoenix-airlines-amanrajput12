import { createSlice } from "@reduxjs/toolkit";

const name =["Air India","Indigo","Spicejet","Vistara","Air India Express"]
const initialState ={
    source:"",
    destination:"",
    flight:false,
    FlightName:""
}

const LocationSlice =createSlice({
     name:"location",
     initialState,
     reducers:{
        addroute:(state,action)=>{
            console.log("location added ",action.payload);
            console.log("state ",state)
            state.source=action.payload.source,
             state.destination=action.payload.destination,
             state.flight=true,
             state.FlightName=name[Math.floor(Math.random()*4)]
        }
     }
})

export const {addroute} =  LocationSlice.actions

export default LocationSlice.reducer