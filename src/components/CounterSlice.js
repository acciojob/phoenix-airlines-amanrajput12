import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:1
}
const  CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            console.log("state",state.value)
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementbyvalue:(state,action)=>{
            console.log(state,action)
            state.value+=Number(action.payload)
        }
    }
})

export const {increment,decrement,incrementbyvalue} = CounterSlice.actions

export default CounterSlice.reducer