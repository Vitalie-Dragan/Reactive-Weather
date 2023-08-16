import React from "react";
import sunny from "../assets/Sunny.svg";
// import cities from "../data";


function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.cities.city}</h3>
            <h5 className="card-text">{props.cities.temperature}</h5>
            <h5 className="card-text">{props.cities.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard