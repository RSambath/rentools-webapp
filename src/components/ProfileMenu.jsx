import React from 'react'
import {HiOutlineInformationCircle} from "react-icons/hi";
import { AiOutlineHistory } from 'react-icons/ai';
import {MdPayment} from 'react-icons/md';
import { MdInventory2 } from 'react-icons/md';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {FiHelpCircle} from 'react-icons/fi'
import {Link} from "react-router-dom";
const MenuButton = ({text,to,logo}) => {
    return (
            <>
            <Link to={to} className="flex items-center p-4 bg-red-500 text-white font-bold text-xl rounded-xl space-x-[50px] hover:bg-red-800 transition-all">
                {logo}
                <span>{text}</span>
            </Link>
            </>
    )
}
const ProfileMenu = () => {
  return (
    <div className='border-black w-1/3'>
        <div className=' h-[900px] flex flex-col items-left p-5 rounded-1 space-y-2'>
            <MenuButton logo={<HiOutlineInformationCircle size={40}/>} text="Information" to="/Profile"/>
            <MenuButton logo={<MdPayment size={40}/>} text="Payment" to="/Profile/Payment"/>
            <MenuButton logo={<MdInventory2 size={40}/>} text="Inventory" to="/Profile/Inventory"/>
            <MenuButton logo={<AiOutlineHistory size={40}/>} text="History" to="/Profile/History"/>
            <MenuButton logo={<FiHelpCircle size={40}/>} text="Help" to="/Profile/Help"/>

        </div>
    </div>
  )
}

export default ProfileMenu