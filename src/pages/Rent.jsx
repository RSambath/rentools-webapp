import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import ToolCard from "../components/ToolCard";
import DatePicker from "react-datepicker";
import Navbar from "../components/Navbar";



function Rent() {

    const location = useLocation()
    const { tool } = location.state
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [deliveryMethod, setDeliveryMethod] = useState("pickup");

    const handleRent = () => {
        console.log(startDate);
        console.log(endDate);
        console.log(deliveryMethod);
        console.log(tool.toolId);

        //Make an HTTP request to the server with the parameters
        fetch(`http://localhost:8080/api/v1/tools/${tool.toolId}/availability`, {
            method: 'PUT'
        })
            .then(response => {
                if (response.ok) {
                    // Display a confirmation popup if the response is successful
                    const confirmed = window.confirm("Rent request successful! Do you want to continue?");
                    if (confirmed) {
                        // Add code here to continue with the desired action
                    }
                } else {
                    // Handle the error response here
                    console.error("Error:", response.statusText);
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <Navbar />

            <div className="tool-details">
                <ToolCard key={tool.id} tool={tool} />
                <div className="date-picker-container">
                    <div className="date-picker">
                        <label htmlFor="start-date">Start Date:</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="start-date" />
                    </div>
                    <div className="date-picker">
                        <label htmlFor="end-date">End Date:</label>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} id="end-date" />
                    </div>
                </div>
                <div className="delivery-method">
                    <label htmlFor="delivery-method">Delivery Method:</label>
                    <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} id="delivery-method">
                        <option value="pickup">Pickup</option>
                        <option value="delivery">Delivery</option>
                    </select>
                </div>
                <button className="rent-button" onClick={handleRent}>Rent</button>
            </div>

        </div>

    );
}

export default Rent;
