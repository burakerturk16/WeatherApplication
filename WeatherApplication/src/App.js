import React, { useState } from 'react';
import Wheather from './WheatherResult'
import './App.css';



function App() {
  const APP_KEY = "6ddfd1077f764ecfa31172921211203"
  let cityInput = ""
  const [wheatherData, setWheatherData] = useState([])
  function CityText() {
    document.querySelector("input").addEventListener("input", (event) => {
      event.preventDefault(); // refresh yapmadan çalışacak
      cityInput = event.target.value;
      console.log(cityInput);

    })
  }
  async function GetData(value) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`)
    const response = await data.json();
    setWheatherData(response.forecast.forecastday)
    console.log(response.forecast.forecastday)
  }
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a city" onChange={CityText} />
        <button onClick={() => GetData(cityInput)}>Search</button>
      </div>
      {wheatherData.map(item => (<Wheather key={item.date} date={item.date} minTemp={item.day.mintemp_c}
        maxTemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>
        ))};
    </div>

  );
}

export default App;
