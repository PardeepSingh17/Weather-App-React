import { useState } from "react";
import SearchBox from "./components/SearchBox";
import InfoBox from "./components/infoBox";
import getCoords from './services/getCoords';
import getWeatherDetail from './services/getWeatherDetail';
import CircularProgress from '@mui/material/CircularProgress';
import "./WeatherApp.css"

export default function WeatherApp() {
    let [info, setInfo] = useState(null)
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)

    const handleSearch = async (city) => {
        
        try{
            setLoading(true)
            let coords = await getCoords(city)
            let {lat, lon} = coords
            
            let weatherDetails = await getWeatherDetail(lat, lon)
            let weatherInfo = {
                temp: weatherDetails.main.temp,
                feelslike: weatherDetails.main.feels_like,
                tempMin: weatherDetails.main.temp_min,
                tempMax: weatherDetails.main.temp_max,
                humidity: weatherDetails.main.humidity,
                weather: weatherDetails.weather?.[0]?.description || "Not available",
                city: city
            }

            setInfo(weatherInfo)
            setError("")
        }catch(err) {
            setError(err.message)
            setInfo(null)
        } finally {
            setLoading(false)
        }

        
    }

    return <div>
        <SearchBox handleSearch={handleSearch} error={error} loading={loading}/>
        {loading? (<div className="loader"><CircularProgress className="Loading"/></div>): <InfoBox info={info}/>}
        
        
    </div>
}