import React from 'react'
import Navbar from '../components/Navbar'
import ProfileMenu from '../components/ProfileMenu'
import ProfileRight from '../components/ProfileRight'
const Profile = () => {
  return (
    <div>
        <div className="flex w-[1640px] mx-auto">
            <ProfileMenu/>
            <ProfileRight/>
        </div>
    </div>

  )
}

export default Profile