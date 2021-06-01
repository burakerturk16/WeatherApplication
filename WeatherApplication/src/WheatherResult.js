import React from 'react'
import './Wheather.css'

function WheatherResult({date,minTemp,maxTemp,condition,icon}) {
    return (
        <div>
            <div className="result">
         
            
            <h2>{date}</h2>
            <ul>
                <li><img src={icon} alt=""/></li>
                <li>{condition}</li>
                <li>{minTemp} C / {maxTemp} C </li>
            </ul>
        </div>
        </div>
    )
}

export default WheatherResult
