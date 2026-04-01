

export default async function getWeatherDetail(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`

    const res = await fetch(url)
    const data = await res.json()
    
    return data
}