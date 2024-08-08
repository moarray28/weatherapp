import React, { useEffect, useState } from "react";
import { debounce, set } from "lodash";
import Toggles from "./Toggles";

export default function Getdata() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Vasai");
  const [errmessage, setErrmessage] = useState("");
  const [forecastData, setForecastData] = useState([]); // []


 const  apiKey = import.meta.env.VITE_API_URL;
    
 
   

  const delayedLocationUpdate = debounce((value) => {
    setLocation(value);
  }, 1500);


  const [forecasttoggle,setForecasttoggle]=useState(false);
  
 
  
  
    useEffect(() => {
      const fetchWeather = async () => {
        let url;

        if (!apiKey) {
          console.error('API URL is not defined');
        }
    
        if (location) {
            url = `${apiKey}/weather?location=${location}`;
            console.log('Request URL:', url);
        } else {
            url = `${apiKey}/weather`;
            console.log('Request URL:', url);
        }
    
        try {
            const response = await fetch(url);
             
            const data = await response.json();
                // Handle the JSON data
                if (data.error && data.error.code === 1006) {
                    setWeatherData(null);
                    setLocation('Vasai');
                } else {
                    setWeatherData(data);
                    if (data && data.forecast && data.forecast.forecastday) {
                        setForecastData(data.forecast.forecastday);
                    }
                }
                setErrmessage("");
          
        } catch (error) {
            console.error('Error fetching data:', error);
            setErrmessage('Location not found. Try searching something similar');
        }
    };
       fetchWeather();
      }, [location]);
  
      
      
  const handleInputChange = (e) => {
    delayedLocationUpdate(e.target.value);
  };

  return (
    <>
      
        <div className="mx-auto transition-4s flex flex-col items-center justify-center p-4">
    
        <input
          type="text"
          className="bg-slate-950 border-2 border-gray-500 rounded-3xl  p-2 px-5 w-full max-w-md mt-4 sm:mt-6"
          placeholder="Enter Location"
          onChange={handleInputChange}
        />

        <p className="text-stone-300 p-2 text-sm">{errmessage}</p>
      </div>


      <div className="mx-auto p-4">


        {weatherData && (
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-6xl md:text-7xl p-2 px-6 mx-auto mb-3 flex flex-col items-center">
              <p>{weatherData.current.temp_c}°C</p>
              <img
                src={weatherData.current.condition.icon}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 m-2 p-2"
                alt="Weather Icon"
              />
             
              <p className="text-2xl">{weatherData.current.condition.text}
                
              </p>
            </div>

            
          

            <p className="text-lg sm:text-xl">
          

            <i className="fa-solid fa-location-dot"/>  
           <span className="mx-1"></span> {weatherData.location.name}, {weatherData.location.region},{" "}
              {weatherData.location.country}
            </p>

       
       

                      
           
           




<div className="mt-4 flex flex-wrap justify-center gap-4">


        <Toggles icondata={<i className="fa-solid fa-droplet"/>} data={"Humidity "+ JSON.stringify( weatherData.current.humidity)+ " %"}/>
 
        <Toggles icondata={<i className="fa-solid fa-weight-scale"/>} data={"Pressure "+ JSON.stringify( weatherData.current.pressure_mb)+ " mb"}/>
 
        <Toggles icondata={<i className="fa-solid fa-wind"/>} data={"Wind "+ JSON.stringify( weatherData.current.wind_kph)+ " kph"}/>
 
 
</div>
      
<div className="m-4 p-2"> 
<button className={`text-center px-4 border-2 border-slate-800 text-slate-950 mx-auto py-2 rounded-lg ${forecasttoggle ? "bg-red-400" : "bg-emerald-300"}`}
 onClick={()=>{setForecasttoggle(!forecasttoggle)}}>{forecasttoggle ?  ("Disable Forecast"): ("Enable Forecast") }</button>

      {forecasttoggle ? (   <div className="m-6 p-4 rounded-2xl border-4 border-gray-500 bg-slate-950">
      {/* Horizontally scrollable container */} 
      <p className="font-bold">6 Days Forecast</p>
      <div className="relative w-[42vw] overflow-x-auto p-4 whitespace-nowrap">
        <div className="flex space-x-6 min-w-max">
          {forecastData.map((dayData, index) => (
            <div
              key={dayData.date}
              className="bg-white border border-gray-300 rounded-xl p-3 shadow-md flex flex-col items-center w-40 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-sm sm:text-lg text-slate-900 font-semibold mb-2">
                {new Date(dayData.date).toLocaleDateString('en-US', {
          
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
              <img
                src={`https:${dayData.day.condition.icon}`}
                alt={dayData.day.condition.text}
                className="mb-2"
              />
              <p className="text-gray-700">{dayData.day.condition.text}</p>
              <p className="text-gray-700">High {dayData.day.maxtemp_c}°C</p>
              <p className="text-gray-700">Low {dayData.day.mintemp_c}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
) : (" ") }
  
  </div>

 
    
          </div>
        )}



 </div>
    </>
  );
}
