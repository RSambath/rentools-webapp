import React, { useState } from 'react';
function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryMonthError, setExpiryMonthError] = useState('');
  const [expiryYearError, setExpiryYearError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const handleCardNumber = (event) => {
    setCardNumber(event.target.value);
    if (event.target.value.length !== 16) {
      setCardNumberError("The card number must be 16 digits long");
    } else {
      setCardNumberError('');
    }
  };

  const handleExpiryMonth = (event) => {
    setExpiryMonth(event.target.value);
    validateExpiryDate(event.target.value, expiryYear);
  };

  const handleExpiryYear = (event) => {
    setExpiryYear(event.target.value);
    validateExpiryDate(expiryMonth, event.target.value);
  };

  const validateExpiryDate = (month, year) => {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setExpiryMonthError("Invalid expiration month");
      setExpiryYearError("Invalid expiration year");
    } 
    else if(year === currentYear && month === currentMonth){
      setExpiryMonthError("Expiration month must be greater than current month")
      setExpiryYearError(""); 
    }
    else if(month < currentMonth){
      setExpiryMonthError("Invalid expiration month"); 
      setExpiryYearError("");
    }
    else {
      setExpiryMonthError(""); 
      setExpiryYearError(""); 
    }
  };
  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    if (event.target.value.length !== 3) {
      setCvvError('CVV must be 3 digits long');
    } else {
      setCvvError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cardNumber || !expiryMonth || !expiryYear || !cvv) {
      alert("Please fill out all the required fields");
    } else if (cardNumberError || expiryMonthError || expiryYearError || cvvError) {
      alert("Please correct the required error in the form");
    } else {
      alert('Payment Successful!');
      // SUBMIT THE PAYMENT TO THE SERVER 
    }
  };
  const handleCancel = () => {
    setCardNumber(''); 
    setExpiryMonth(''); 
    setExpiryYear(''); 
    setCvv(''); 
    setExpiryMonthError(''); 
    setExpiryYearError(''); 
    setCvvError(''); 
  }
  return (
    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
      <h1 className="text-[2.5em] font-bold mb-8">Checkout</h1>
      <div className="mb-4 flex [&>img]:mr-3">
        <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="Mastercard" width="125" />
        <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_paypal-512.png" alt="PayPal" width="125" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className={`shadow appearance-none border rounded w-full h-[3.5em] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${cardNumberError ? 'border-red-500' : ''}`}
          id="cardNumber"
          type="text"
          placeholder="**** **** **** ****"
          value={cardNumber}
          onChange={handleCardNumber}
        />
        {cardNumberError && <p className="text-red-500 text-[0.8em] mt-2">{cardNumberError}</p>}
      </div>
      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="expirationMonth">
            Expiration Month
          </label>
          <input
            className={`shadow appearance-none border h-[3.5em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${expiryMonthError ? 'border-red-500' : ''}`}
            id="expirationMonth"
            type="text"
            placeholder="MM"
            value={expiryMonth}
            onChange={handleExpiryMonth}
          />
          {expiryMonthError && <p className="text-red-500 text-[0.8em] mt-2">{expiryMonthError}</p>}
        </div>
        <div className="w-1/2 ml-2">
          <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="expirationYear">
            Expiration Year
          </label>
          <input
            className={`shadow appearance-none border h-[3.5em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${expiryYearError ? 'border-red-500' : ''}`}
            id="expirationYear"
            type="text"
            placeholder="YY"
            value={expiryYear}
            onChange={handleExpiryYear}
          />
          {expiryYearError && <p className="text-red-500 text-[0.8em] mt-2">{expiryYearError}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-[1.5em] font-bold mb-2" htmlFor="cvv">
          CVV
        </label>
        <input
          className={`shadow appearance-none border h-[3.5em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${cvvError ? 'border-red-500' : ''}`}
          id="cvv"
          type="text"
          placeholder="***"
          value={cvv}
          onChange={handleCvvChange}
        />
        {cvvError && <p className="text-red-500 text-[0.8em] mt-2">{cvvError}</p>}
      </div>
      <div className="flex items-center justify-end mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          type="submit"
        >
          Check Out
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick = {handleCancel}>
          Cancel
            </button>
      </div>
    </form>
  );
}
export default PaymentForm;
