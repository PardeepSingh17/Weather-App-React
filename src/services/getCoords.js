
export default async function getCoords(city) {

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`

    const res = await fetch(url)
    const data = await res.json()

    if(!data.length){
        throw new Error("City not found.")
    }

    return data[0]

}