import React from 'react';

const categories = {
  "Availability": [
    { id: 1, name: 'Available' },
    { id: 2, name: 'Not Available' }
  ],
  "Price": [
    { id: 1, name: 'Low' },
    { id: 2, name: 'High' }
  ],
  "Category": [
    { id: 1, name: 'Power Tools' },
    { id: 2, name: 'Hand Tools' },
    { id: 1, name: 'Gardening Tool' },
    { id: 2, name: 'Electronics' },
    { id: 1, name: 'Art & Craft' },
    { id: 2, name: 'Toy & Model' },
    { id: 3, name: 'Other' }
  ]
};
  
  function Checkbox(){
    return (
      <div className='bg-rose-700 p-8 w-[25%] h-1/2'>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <h3 className='mb-4 font-bold text-[1.5em] text-gray-900 dark:text-white'>{category}</h3>
            <hr className='mb-10'/> 
            <ul className='mb-10'>
              {categories[category].map((item) => (
                <li key={item.id} className='mb-3 flex justify-left align-middle ml-5'>
                  <input type="checkbox" id={item.id} name={item.name} className='w-[1.4em] h-[1.4em] mt-1'/>
                  <label htmlFor={item.id} className='ml-3 text-white text-[1.2em]' >{item.name}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className='flex justify-center'>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-sm mr-2">
              Set and Change
          </button>
        </div>
      </div>
    );
  }

export default Checkbox;