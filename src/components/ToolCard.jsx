import React from 'react';
import './ToolCard.css'; // Import the CSS file
import { Link } from "react-router-dom";

function ToolCard({ tool }) {
    console.log(tool.available);
    return (

        <div key={tool.id} className="tool-card">
            <h2>{tool.tool_name} --
                <span style={{ color: tool.available ? 'green' : 'red' }}>
                    {tool.available ? 'Available' : 'Not Available'}
                </span>
            </h2>            <p>Category: {tool.category}</p>
            <p>Description: {tool.description}</p>
            <p>Rental Price: {tool.rental_price}</p>
            <img src={tool.image} alt={tool.tool_name} />
            <Link to={`/tools/${tool.id}`} state={{ tool }} className="btn btn-primary">
                <button className="rent-button">Rent</button>
            </Link>

        </div>
    );
}

export default ToolCard;
