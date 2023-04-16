import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='w-[40%] bg-red-200 shadow-lg shadow-red-300/40 border-current px-[5em] py-[3em]'>
            <h1 className='text-center font-bold text-[2.5em]'>Booking Summary</h1>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />

            <div className='[&>div]:mb-3 [&>div>p]:text-[1.5em] [&>div]:flex [&>div]:justify-between'>
                <div>
                    <p className='font-bold'>Item Name: </p>
                    <p className='w-[70%] text-end'>Power Drill</p>
                </div>
                <div>
                    <p className='font-bold'>Location: </p>
                    <p>Kansas</p>
                </div>
                <div>
                    <p className='font-bold'>Start Date: </p>
                    <p>1/10/2023</p>
                </div>
                <div>
                    <p className='font-bold'>End Date: </p>
                    <p>5/10/2023</p>
                </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />

            <div className=' [&>div>p]:text-[1.5em] [&>div]:flex [&>div]:justify-between'>
                <div>
                    <p>Subtotal:</p>
                    <p>20$</p>
                </div>
                <div>
                    <p>Discount:</p>
                    <p>5%</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <h2 className='text-[2em] font-bold mt-10'>Total: </h2>
                <h2 className='text-[2em] font-bold mt-10'>18$</h2>
            </div>

        </div>
    );
}

export default Menu;