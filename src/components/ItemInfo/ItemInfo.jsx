import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'; //npm i react-datepicker
import 'react-datepicker/dist/react-datepicker.css';
import Slider from "./ImageSlider";

import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ItemInfo() {
    var [startDate, setStartDate] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state.item;
    var [endDate, setEndDate] = useState(null); // Set initial value for startDate to null
    const toolId = item.toolId; // Replace with dynamic value from item object
    const userEmail = localStorage.getItem("email");
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/api/v1/reviews/4')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error));
    }, []);


    const handleRent = () => {


        if (!userEmail) {
            window.location.href = "/";
        }
        startDate = startDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        endDate = endDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        //Make an HTTP request to the server with the parameters
        fetch(`http://localhost:8080/api/v1/tools/${item.toolId}/availability`, {
            method: 'PUT'
        })
            .then(response => {
                if (response.ok) {
                    // Display a confirmation popup if the response is successful
                    console.log("FETCHING >>> " + `http://localhost:8080/api/v1/tools/${toolId}/start?startDate=${startDate}&endDate=${endDate}&toolId=${toolId}&user=${userEmail}`);
                    fetch(`http://localhost:8080/api/v1/tools/${toolId}/start?startDate=${startDate}&endDate=${endDate}&toolId=${toolId}&user=${userEmail}`, {
                        method: 'POST'
                    })
                        .then(response => {
                            if (response.ok) {
                                // Display a confirmation popup if the response is successful
                                const confirmed = window.confirm("Start tool request successful! Do you want to continue?");
                                if (confirmed) {
                                    // Add code here to continue with the desired action
                                }
                            } else {
                                // Handle the error response here
                                console.error("Error:", response.statusText);
                            }
                        })
                        .catch(error => console.error(error));

                } else {
                    // Handle the error response here
                    console.error("Error:", response.statusText);
                }
            })
            .catch(error => console.error(error));
    };
    return (
        <div className='h-[200em] w-4/5 m-auto'>
            <div className='w-full bg-slate-500 font-bold text-start p-[1.5em] my-10 text-white text-2xl'>
                <h1>Ozito PXC 18V Detail Sander</h1>
            </div>
            <div className='flex'>

                <Slider images={item.image} />

                <div className='p-5 shadow-md ml-10 w-[35%]'>
                    <h2 className='text-[3em] font-bold mb-5'>${item.rental_price} <span className='text-gray-400'>per day</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Rating: <span className='text-yellow-500'>{item.rating}/5.0</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Email: <span className='text-blue-500 underline'>{item.email}</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Location: <span className='text-blue-500 underline'>{item.location}</span></h2>
                    <h2 className='text-[1.5em] mb-5'>Status: <span className='text-green-500' style={{ color: item.available ? 'green' : 'red' }}> {item.available ? 'Available' : 'Not Available'}</span>
                    </h2>
                    <h2 className='text-[1.5em] mb-5'>Category: <span className='text-blue-500 underline'>{item.category}</span></h2>

                    <div className='mb-5 w-full'>
                        <div className='text-[1.5em] mb-5 w-full'>
                            <label className='label' id='sdate'>Start Date:</label>
                        </div>
                        <div className='w-full'>
                            <DatePicker
                                className='h-[2em] w-[100%] m-auto p-8 text-xl border border-red-600 rounded-lg'
                                selected={startDate}
                                dateFormat="MM/dd/yyyy" // Set the date format
                                onChange={(date) => setStartDate(date)
                                }
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
                                selected={endDate}
                                dateFormat="MM/dd/yyyy" // Set the date format
                                onChange={(date) => setEndDate(date)
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex-1 h-full m-auto w-[90%] my-[1em]">

                            <button className="flex w-full bg-red-500 shadow rounded-lg py-4 px-16">
                                <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white" onClick={handleRent}>Book Now</p>
                            </button>
                        </div>
                    </div>

                    <p className='text-[1em] text-center text-gray-600 underline'>Sign Up for Discounts</p>


                </div>

            </div>

            <div className='flex'>
                <div className="w-[65%]">

                    <h1 className='text-5xl font-bold my-10'>Description</h1>
                    <p className=' text-2xl leading-[2em] text-justify space-y-20'>
                        {item.description}<br />
                    </p>

                </div>

                <div className='w-[35%] ml-10'>
                    {/* <Map /> */}
                    <div className='mt-10 p-10 border border-gray-300 rounded-lg shadow-md'>
                        <div className="flex justify-left space-x-4">
                            <img className="w-18 h-18 rounded-full object-cover" src="" alt="profile" />
                            <div className="space-y-1 flex justify-between w-full">
                                <p className='font-bold text-[1.4em]'>Jese Leos</p>
                                <a href="#" className='text-blue-500 underline'>Browse more list</a>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-[1.5em] font-bold mb-5'>About</h1>
                            <p>Hello Renter, Thank you for using my product. Hope you have a great day.</p>
                            <button className='w-full flex justify-end mt-5 align-middle'>
                                <div className="flex bg-gray-300 hover:bg-gray-400 shadow rounded-lg p-5">
                                    <p className="text-xl font-semibold text-center text-gray-500">Contact</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            <h1 className='text-5xl my-10 font-bold'> Review</h1>

            <div className='mt-10 flex flex-row space-x-4 overflow-x-scroll overflow-hidden p-2 border border-gray-300 rounded-md'>
                {reviews.map((review) => (
                    <article className=' bg-gray-600 rounded-lg p-5 flex-shrink-0 max-w-[24%]'>
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
                        <p className="mb-2 text-gray-300 text-justify" key={review.id}>{review.comment}</p>
                        <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                        <aside>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                            <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                            </div>
                        </aside>
                    </article>))}





            </div>

        </div>
    );
}

export default ItemInfo;