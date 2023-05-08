import React, { useState } from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {AiOutlineCheck} from 'react-icons/ai';


const Information = () => {
    const [userName, setUserName] = useState("Johnny Appleseed")
    const [input, setInput] = useState("Johnny Appleseed")
    function updateName() {
        setUserName(input);
    }
    
    function onInputChange(e) {
        setInput(e.target.value);
    }
    const [phoneNum, setPhoneNum] = useState("23493484894")
    const [num, setNum] = useState()
    function updateNum() {
        setPhoneNum(num);
    }
    
    function onNumChange(e) {
        setNum(e.target.value);
    }

    const [address, setAddress] = useState({
        houseNum: "25",
        street: "25",
        city: "Phnom Penh",
        country: "Cambodia",
    })

    function onAddressSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setAddress(data)
        console.log(data);
    }

  return (<>
    <h1 className='font-bold text-red-500 text-4xl mb-10'>Personal Information</h1>

        <div className='w-full flex bg-gray-100 rounded-xl p-6 justify-evenly'>
            <div className='text-black space-y-5'>
                <h1 id="infoName" className="text-6xl text-red-500">{userName}</h1>
                <div className='ml-5'>
                    <h1><AiOutlineMail className='inline mr-1'/><span className='font-bold'>Email:</span> &nbsp;Johnny.Apple@gmail.com</h1>
                    <h1><AiOutlinePhone className='inline mr-1'/><span className='font-bold'>Contact:</span> &nbsp;+{phoneNum}</h1>
                    <h1><GoLocation className='inline mr-1'/><span className='font-bold'>Location:</span> &nbsp;{address.houseNum}, {address.street}, {address.city}, {address.country}</h1>
                </div>
            </div>
            <div className="">
                <img className="rounded-full d-block w-[150px] " src="/face.png"></img>
            </div>
        </div>
        <div className='bg-gray-100 space-y-10 rounded-xl pb-5'>
            <div className='text-2xl w-[600px] mx-auto space-y-4 mt-4'>
                <div className='flex flex-col space-y-3'>
                    <label className="p-5 text-red-500 font-bold">Change your name</label>
                    <input maxlength="27" id="txtName" onChange={onInputChange} className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='New name...'/>
                    <button id="nameBtn" role='button' onClick={updateName} className='border p-2 rounded ml-5 bg-red-500 hover:bg-red-800 transition-all text-white'>Change</button>
                </div>
                <form className='flex flex-col space-y-3'>
                    <label className="p-5 text-red-500 font-bold">Change your password</label>
                    <input className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='New Password...'/>
                    <input className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='Old Password...'/>
                    <button className='border p-2 rounded ml-5 bg-red-500 hover:bg-red-800 transition-all text-white'>Change </button>
                </form>
                <form onSubmit={onAddressSubmit} className='flex flex-col space-y-3'>
                    <label className="p-5 text-red-500 font-bold">Change your address</label>
                    <input maxlength="6" name="houseNum" className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='House Number...'/>
                    <input maxlength="16" name="street" className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='Street...'/>
                    <input maxlength="16" name="city" className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='City...'/>
                    <input maxlength="16" name="country" className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='Country...'/>
                    <button className='border p-2 rounded ml-5 bg-red-500 hover:bg-red-800 transition-all text-white'>Change</button>
                </form>
                <div className='flex flex-col space-y-3'>
                    <label className="p-5 text-red-500 font-bold">Change your phone number</label>
                    <input maxlength="27" onChange={onNumChange} className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='New Number...'/>
                    <button id="nameBtn" role='button' onClick={updateNum} className='border p-2 rounded ml-5 bg-red-500 hover:bg-red-800 transition-all text-white'>Change</button>
                </div>
            </div>
        </div>

        </>
  )
}

export default Information