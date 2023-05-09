import React from 'react'
import {Routes,Route} from "react-router-dom";
import Information from './Information';
import Inventory from './Inventory'
import Help from './Help'
import History from './History'
import PaymentForm from "../components/Payment/PaymentForm.jsx"; 
const ProfileRight = () => {
  return (
  <div className="p-4 w-2/3 border ">
    <Routes>
        <Route path="/" element={<Information />}>
        </Route>
        <Route path="/Payment" element={<PaymentForm/>}>
        </Route>
        <Route path="/History" element={<History />}>
        </Route>
        <Route path="/Inventory" element={<Inventory />}>
        </Route>
        <Route path="/Help" element={<Help />}>
        </Route>
    </Routes>
  </div>
  )

}

export default ProfileRight