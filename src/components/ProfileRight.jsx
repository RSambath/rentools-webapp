import React from 'react'
import {Routes,Route} from "react-router-dom";
import Information from './Information';
const ProfileRight = () => {
  return (
  <div className="p-4 w-2/3 border ">
    <Routes>
        <Route path="/" element={<Information />}>
        </Route>
        <Route path="/Payment" element={<h1>Payment</h1>}>
        </Route>
        <Route path="/History" element={<h1>History</h1>}>
        </Route>
        <Route path="/Inventory" element={<h1>Inventory</h1>}>
        </Route>
        <Route path="/Bookmarks" element={<h1>Bookmarks</h1>}>
        </Route>
        <Route path="/Settings" element={<h1>Settings</h1>}>
        </Route>
        <Route path="/Help" element={<h1>Help</h1>}>
        </Route>
    </Routes>
  </div>
  )

}

export default ProfileRight