export const getWeather = async (city)=>{
    const key='b808b16e50334e44aa2163653240305'
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
    const response= await fetch(url)

    const weather=await response.json()
    // console.log(weather.current.condition.text)
    return weather
}