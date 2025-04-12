import React, { useEffect } from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
const App=()=>{

  const [changeCityName,setChangeCityName]=useState("");
  const [city,setCity]=useState();
  const getWeatherData=async(cityName)=>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c0f554d29d13578fa51b964b313dd162`;
   const data= await fetch(url);
   const res= await data.json();
   console.log(res);
   console.log(res.main.temp);
   console.log(res.name);
   setCity(res);


    }catch(err){
      alert("Enter valid city name");
      // console.log(err);
    }
    

  }
  const searchData=()=>{
    getWeatherData(changeCityName);

  }
  const changeInput=(e)=>{
    console.log(e.target.value);
    setChangeCityName(e.target.value);


  }
  useEffect(()=>{
    getWeatherData("Delhi");
  },[]);





  return(
    <>
    
    <div className="col-md-12 main">
      <div className="weatherBg">
      <div className="heading">
      <h1>Weather App</h1>
      </div>
      <div className="input1">
      <input type="text" className="form-control" placeholder="enter city name" onChange={changeInput}> 
      </input>
      <button className="btn btn-primary" type="button" onClick={searchData}>Search</button>
      </div>
      <div className=" shadow rounded weatherResult" >
      <i className="fa-solid fa-sun icon" ></i>
      {
        !city?(alert("Invalid City")):(
          <div>
          <h4 className="weatherCity">{city?.name}</h4>
      <h5 className="weatherTemperature">{((city?.main?.temp)-273.15).toFixed(2)}Celcius</h5>
          </div>

        )
      }
      
     
       
      </div>
      </div>   
    </div>

    </>
  )

}
export default App;
