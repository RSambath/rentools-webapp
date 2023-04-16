import React from "react";
import History from "../components/Payment/OrderHistory";
import Form from "../components/Payment/PaymentForm";

const Payment = () => {
  return (
    <div>
      <div className="flex justify-center m-auto w-4/5 py-10">
        <History/> 
        <Form />
      </div>

    </div>
  );
};

export default Payment;
