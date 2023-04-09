import React from 'react';

function PaymentForm() {
  return (
    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8">
        <h1 className='text-[2.5em] font-bold mb-8'>Checkout</h1>
        <div className="mb-4 flex [&>img]:mr-3">
            <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="Mastercard" width="125" />
            <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="Visa" width="125" />
            <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_paypal-512.png" alt="PayPal" width="125" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="cardNumber">
            Card Number
            </label>
            <input
            className="shadow appearance-none border rounded w-full h-[3.5em] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="**** **** **** ****"
            />
        </div>
        <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
            <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="expirationMonth">
                Expiration Month
            </label>
            <input
                className="shadow appearance-none border h-[3.5em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expirationMonth"
                type="text"
                placeholder="MM"
            />
            </div>
            <div className="w-1/2 ml-2">
            <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="expirationYear">
                Expiration Year
            </label>
            <input
                className="shadow appearance-none border h-[3.5em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expirationYear"
                type="text"
                placeholder="YY"
            />
            </div>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="cvv">
                CVV
            </label>
            <input
                className="shadow appearance-none border h-[3.5em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="text"
                placeholder="***"
            />
        </div>
        <div className="flex items-center justify-end mt-10">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="button"
            >
                Confirm
            </button>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                Cancel
            </button>
        </div>
    </form>
  );
}

export default PaymentForm;