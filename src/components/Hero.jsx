import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div>
        {/* overlay */}
        <div>
          <h1>
            <h1>Rent</h1>
            <Link to='/tools'><h1>Tools</h1></Link>
            <h1>Today</h1>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero