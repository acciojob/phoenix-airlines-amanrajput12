import React from 'react'

import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';

import App from './App';
import FlightSearch from './FlightSearch';
import FlightBooking from './FlightBooking';
import FlightConfirm from './FlightConfirm';
import Header from './Header';

const Main = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Main