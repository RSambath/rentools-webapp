import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {AiOutlineCheck} from 'react-icons/ai';
const Information = () => {
  return (<>
    <h1 className='font-bold text-red-500 text-4xl mb-10'>Personal Information</h1>

        <div className='w-full flex bg-gray-100 rounded-xl p-6 justify-evenly'>
            <div className='text-black space-y-5'>
                <h1 className="text-6xl text-red-500">Johnny Appleseed</h1>
                <div className='ml-5'>
                    <h1><AiOutlineMail className='inline mr-1'/><span className='font-bold'>Email:</span> &nbsp;Johnny.Apple@gmail.com</h1>
                    <h1><AiOutlinePhone className='inline mr-1'/><span className='font-bold'>Contact:</span> &nbsp;+230948239048</h1>
                    <h1><GoLocation className='inline mr-1'/><span className='font-bold'>Location:</span> &nbsp;Canada</h1>
                </div>
            </div>
            <div className="">
                <img className="rounded-full d-block w-[150px] " src="/face.png"></img>
            </div>
        </div>
        <div className='bg-gray-100 space-y-10 rounded-xl pb-5'>
            <div className='text-2xl w-[600px] mx-auto space-y-4 mt-4'>
                <form className='flex flex-col space-y-3'>
                    <label className="p-5 text-red-500 font-bold">Change your name</label>
                    <input className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='New name...'/>
                    <button className='border p-2 rounded ml-5 bg-red-500 hover:bg-red-800 transition-all text-white'>Change</button>
                </form>
                <form className='flex flex-col space-y-3'>
                    <label className="p-5 text-red-500 font-bold">Change your password</label>
                    <input className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='New Password...'/>
                    <input className="border outline-none rounded p-2 ml-5 caret-red-500"type="text" placeholder='Old Password...'/>
                    <button className='border p-2 rounded ml-5 bg-red-500 hover:bg-red-800 transition-all text-white'>Change </button>
                </form>
            </div>
        </div>
        </>
  )
}

export default Information