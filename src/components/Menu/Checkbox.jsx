import React from 'react';

const categories = {
    "Equipment Type": [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' }
    ],
    "Equipment Type 2": [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' }
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
                <li key={item.id} className='mb-3 flex justify-center align-middle'>
                  <input type="checkbox" id={item.id} name={item.name} className='w-[1.4em] h-[1.4em] mt-1'/>
                  <label htmlFor={item.id} className='ml-3 text-white text-[1.2em]' >{item.name}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

export default Checkbox;