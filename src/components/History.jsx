import React, { useState, useEffect } from 'react'
const History = () => {
  const [rentals, setRentals] = useState([]);
  const [tool, setTool] = useState([]);

  const email = localStorage.getItem("email");
  useEffect(() => {
    const fetchRentals = async () => {
      console.log("email > " + email);
      const response = await fetch(`http://localhost:8080/api/v1/tools/rentals?email=${email}`);

      const data = await response.json();
      console.log("data > " + data);
      console.log("data > " + data);

      setRentals(data);
    };

    fetchRentals();
  }, []);
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
          {rentals.map(rental => (
            <tr className='text-center text-[1.2em]' key={rental.id}>
              <td className="border px-5 py-5">{rental.startDate} - {rental.endDate}</td>
              <td className="border px-5 py-5">{rental.toolId}</td>
              <td className="border px-5 py-5">rental.tool.name</td>
              <td className="border px-5 py-5">{rental.user}</td>
              <td className="border px-5 py-5">rental.tool.price</td>
              <td className="border px-5 py-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                  Print Reciept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default History;