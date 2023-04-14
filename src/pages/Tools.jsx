import React, { useState, useEffect } from 'react';
import './ToolCard.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ToolCard from "../components/ToolCard";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Checkbox from "../components/Checkbox";

function Tools() {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/tools')
            .then(response => response.json())
            .then(data => setTools(data))
            .catch(error => console.error(error));
    }, []);

    return (

        <div>
            <Navbar />

            <div className="flex justify-center m-auto w-4/5 py-10">
                <Checkbox />
                <Menu />
            </div>


        </div>

    );
}
export default Tools;