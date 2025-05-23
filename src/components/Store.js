import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice"
import LocationSlice from "./LocationSlice"

export const Store = configureStore({

    reducer:{
        couter:CounterSlice,
        location:LocationSlice
    }
})