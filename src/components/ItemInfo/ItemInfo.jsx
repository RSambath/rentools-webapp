import React, { useState } from 'react'
import DatePicker from 'react-datepicker'; //npm i react-datepicker
import 'react-datepicker/dist/react-datepicker.css';
import Slider from "./ImageSlider";
import { Link } from 'react-router-dom';
import Map from "./Map/Map";

function ItemInfo() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='h-[200em] w-4/5 m-auto'>
            <div className='w-full bg-slate-500 font-bold text-start p-[1.5em] my-10 text-white text-2xl'>
                <h1>Ozito PXC 18V Detail Sander</h1>
            </div>
            <div className='flex'>
                <Slider />
                <div className='p-5 shadow-md ml-4 w-[35%]'>
                    <h2 className='text-[3em] font-bold mb-5'>$15 <span className='text-gray-400'>per day</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Rating: <span className='text-yellow-500'>4.5/5.0</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Email: <span className='text-blue-500 underline'>username@gmail.com</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Location: <span className='text-blue-500 underline'>California</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Status <span className='text-green-500'>Available</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Category: <span className='text-blue-500 underline'>Tool, Bike</span></h2>
                    
                    <div className='mb-5 w-full'>
                        <div className='text-[1.5em] mb-5 w-full'>
                            <label className='label' id='sdate'>Start Date:</label>
                        </div>
                        <div className='w-full'>
                            <DatePicker 
                                className='h-[2em] w-[100%] m-auto p-8 text-xl border border-red-600 rounded-lg' 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                            />
                        </div>
                    </div>

                    <div className='mb-5 w-full'>
                        <div className='text-[1.5em] mb-5 w-full'>
                            <label className='label' id='sdate'>End Date:</label>
                        </div>
                        <div className='w-full'>
                            <DatePicker 
                                className='h-[2em] w-[100%] m-auto p-8 text-xl border border-red-600 rounded-lg' 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                            />
                        </div>
                    </div>

                    <Link to="/Payment">
                        <button className="w-full">
                            <div className="flex-1 h-full m-auto w-[90%] my-[1em]">
                                <div className="flex w-full bg-red-500 shadow rounded-lg py-4 px-16">
                                    <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white">Book Now</p>
                                </div>
                            </div>
                        </button>
                    </Link>

                    <p className='text-[1em] text-center text-gray-600 underline'>Sign Up for Discounts</p>


                </div>

            </div>

            <div className='flex'>
                <div className="w-[65%]">

                    <h1 className='text-5xl font-bold my-10'>Description</h1>

                    <p className=' text-2xl leading-[2em] text-justify space-y-20'>
                    Craving an electric bike but short on space? Want to take your bike on the TTC at rush hour, on the train for a jaunt to Montreal, or fit two of them in the trunk of your car for a weekend away? Looking for a little boost to get up the hill (or into the wind) on your way home after a long day at work? Fitting an electric bike into your life can be a bit of a mystery. That’s why we’re proud to announce the newest members of the Happy Fleet - famed mystery-solvers Ohms and Wattson.
                    Wattson and Ohms are electric Brompton folding bikes, the pedal-assist version of the premium folding bike. Building on over 40 years of painstaking engineering, gorgeous design, and a penchant for fun, the Brompton Electric is a versatile, efficient, beautiful folding bike - with a secret superpower. When the going gets tough, the electric assist helps you to keep going.
                    The 300Wh 36V motor gives you an assisted range of up to 60km on a single charge. The battery can be fully recharged in just four hours, or simply topped up during a lunch break to extend your range. The bike weighs just 35lbs (16kg), so no range anxiety required - it can be pedalled without assistance quite easily, extending your range for longer rides. The battery even has a USB port so you can keep your phone charged as you go!
                    Your rental includes the bike, battery, charging cable, and ABUS mini U-lock for those rare cases when you can’t bring the bike inside with you. Your choice of a small or large front bag holds the battery and any extras you wish to bring with you, and the integrated rear rack can carry extra gear for longer trips (the rack must be empty for the bike to fold). <br/>
                    See the full specs for the Brompton Electric bike here: https://ca.brompton.com/shop/bikes/electric-c-line-explore?color=turkish-green&handlebar=mid#specs<br className='mx-10'/>
                    Like all of our rentals, Wattson and Ohms are delivered and picked up free within Toronto. Wattson has a classic mid-height handlebar, offering a moderate riding position for mid-height riders, an upright one for shorter riders, and a sporty one for tall riders. Ohms has a high handlebar, giving a bolt-upright ride to mid-height riders and a moderate position to tall riders. It may be too tall for shorter riders!<br/>
                    </p>

                </div>

                <div>
                    {/* <Map /> */}

                </div>

            </div>

            <h1 className='text-5xl my-10 font-bold'> Review</h1>

            <div className='mt-10 flex justify-between'>
                <article className=' bg-gray-600 rounded-lg p-5 w-[24%]'>
                    <div className="flex items-center mb-4 space-x-4">
                        <img className="w-10 h-10 rounded-full" src="" alt="" />
                        <div className="space-y-1 font-medium dark:text-white">
                            <p>Jese Leos</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>                    
                    <p className="mb-2 text-gray-500 text-justify dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                    <p className="mb-3 text-gray-500 text-justify dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                    <aside>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                        </div>
                    </aside>
                </article>
                <article className=' bg-red-600 rounded-lg p-5 w-[24%]'>
                    <div className="flex items-center mb-4 space-x-4">
                        <img className="w-10 h-10 rounded-full" src="" alt="" />
                        <div className="space-y-1 font-medium dark:text-white">
                            <p>Jese Leos</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>                    
                    <p className="mb-2 text-justify dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                    <p className="mb-3 text-justify dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                    <aside>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                        </div>
                    </aside>
                </article>
                <article className=' shadow-2xl rounded-lg p-5 w-[24%]'>
                    <div className="flex items-center mb-4 space-x-4">
                        <img className="w-10 h-10 rounded-full" src="" alt="" />
                        <div className="space-y-1 font-medium ">
                            <p>Jese Leos</p>
                        </div>
                    </div>
                    <div className="mb-1 bg-yellow-400 text-white w-20 text-center p-2 rounded-lg font-bold">
                        <h1>5.0 / 5.0</h1>
                    </div>                    
                    <p className="mb-2 text-justify">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                    <p className="mb-2 text-justify">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                    <aside className='mt-10'>
                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                        </div>
                    </aside>
                </article>
                <article className='shadow-2xl rounded-lg p-5 w-[24%]'>
                    <div className="flex items-center mb-4 space-x-4">
                        <img className="w-10 h-10 rounded-full" src="" alt="" />
                        <div className="space-y-1 font-medium ">
                            <p>Jese Leos</p>
                        </div>
                    </div>
                    <div className="mb-1 bg-yellow-400 text-white w-20 text-center p-2 rounded-lg font-bold">
                        <h1>5.0 / 5.0</h1>
                    </div>                    
                    <p className="mb-2 text-justify">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                    <p className="mb-2 text-justify">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                    <aside className='mt-10'>
                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                        </div>
                    </aside>
                </article>
            </div>

        </div>
    );
}

export default ItemInfo;