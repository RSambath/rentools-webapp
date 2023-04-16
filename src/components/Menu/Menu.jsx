import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const foods = [
    {
        name: "Power Drill: Model X 301",
        price: "$10/day",
        image: "https://via.placeholder.com/150",
        category: "Power Tools",
        Rating: "5.0",
        Status: "Available",
    },
    {
        name: "Item 2",
        price: "$15/day",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Item 3",
        price: "$20/day",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Item 4",
        price: "$20/day",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Item 5",
        price: "$20/day",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Item 6",
        price: "$20/day",
        image: "https://via.placeholder.com/150",
    },
];

function Menu() {

    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/tools')
            .then(response => response.json())
            .then(data => setTools(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className='flex flex-wrap place-content-around w-full'>
            {tools.map((item, index) => (

                <div key={index} className='border shadow-md rounded-md w-[25em] mx-3 mb-10 hover:scale-105 duration-300 relative'>
                    <Link to={`/item`}
                        state={{
                            item,
                        }}>
                        <img src={item.image} alt={item.tool_name} className='w-full rounded-lg object-cover' />
                        <div className='p-5'>
                            <div className='flex justify-between mb-2'>
                                <span>Rating: {item.rating}/ 5.0</span>
                                <span className='text-green-500' style={{ color: item.available ? 'green' : 'red' }}> {item.available ? 'Available' : 'Not Available'}
                                </span>
                            </div>
                            <p className='mb-2'>Category: <span className='underline text-blue-500'>{item.category}</span></p>
                            <p className='font-bold text-[1.3em]'>{item.tool_name}</p>
                        </div>
                        <p>
                            <span className='bg-red-500 text-white text-[1.5em] font-bold p-3 absolute top-0 right-0'>${item.rental_price}/day</span>
                        </p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default Menu;