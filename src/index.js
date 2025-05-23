import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux'
import { Store } from "./components/Store";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlightConfirm from "./components/FlightConfirm";
import FlightSearch from "./components/FlightSearch";
import FlightBooking from "./components/FlightBooking";


const router = createBrowserRouter([
    {
     path:'/',
     element:<Main/>,
     children:[
        {
            path:"",
            element:<App/>
        },{
            path:"flight-search",
            element:<FlightSearch/>
        },
        {
            path:"flight-booking",
            element:<FlightBooking/>
        },
        {
            path:"confirmation",
            element:<FlightConfirm/>
        }
     ]
    }
])


ReactDOM.render(<>
<Provider store={Store}>

<RouterProvider router={router} />
{/* <Main/> */}
</Provider>
</>
, document.getElementById("root"));
