import React from 'react'
const Information = () => {
  return (
    <>
    <h1 className='font-bold text-red-500 text-4xl mb-10'>Transaction History</h1>
    <table class="table-auto w-full">
        <thead>
            <tr className='text-gray-500'>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Receipt No.</th>
              <th class="px-4 py-2">Item Name</th>
              <th class="px-4 py-2">Owner Email</th>
              <th class="px-4 py-2">Amount</th>
              <th class="px-4 py-2">Print</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-center text-[1.2em]'>
                <td class="border px-5 py-5">2023-04-11</td>
                <td class="border px-5 py-5">D13NF82BD</td>
                <td class="border px-5 py-5">Power Drill</td>
                <td class="border px-5 py-5">username@gmail.com</td>
                <td class="border px-5 py-5">$12.00</td>
                <td class="border px-5 py-5">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                      Print Reciept
                  </button>
                </td>
            </tr>
        </tbody>
    </table>        
    </>
  )
}

export default Information;
