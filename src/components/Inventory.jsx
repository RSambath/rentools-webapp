import React, { useState, useEffect } from "react";
import AddForm from './AddForm';

const items = [
    {
        id: 1,
        name: 'Item 1',
        image: 'https://via.placeholder.com/150',
        Status: '',
        Price: ''
    },
    {
        id: 2,
        name: 'Item 2',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Item 3',
        image: 'https://via.placeholder.com/150',
    },
];

const Inventory = () => {
    const [historyData, setHistoryData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const email = localStorage.getItem("email");

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/tools/${email}/history`)
            .then(response => response.json())
            .then(data => {
                setHistoryData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [email]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (<>
        <div className='flex justify-between'>
            <h1 className='font-bold text-red-500 text-4xl w-[40%]'>Inventory</h1>
            <div>
                <button onClick={openModal}>
                    <div className="flex w-full bg-red-500 shadow rounded-lg py-4 px-16">
                        <p className="text-center inset-0 text-xl font-semibold leading-7 text-center text-white">Add Items</p>
                    </div>
                </button>
                <AddForm isOpen={isOpen} closeModal={closeModal} />
            </div>
        </div>

        <table className="min-w-full mt-10">
            <thead className="[&>tr>th]:text-[1em]">
                <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Item
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Image
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Price
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {historyData.map((item) => (
                    <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-gray-900">{item.tool_name}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 flex justify-center">
                            <img src={item.image} alt={item.name} width="200" height="300" />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-green-700 text-center"><span style={{ color: item.available ? 'green' : 'red' }}>
                                    {item.available ? 'Available' : 'Not Available'}
                                </span></div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900 text-center">${item.rental_price}</div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 font-medium">
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
                                    Cancel
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
    )
}

export default Inventory;