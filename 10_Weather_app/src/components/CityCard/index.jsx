import React from 'react'
import { getWeather } from "../../api/WeatherApi"
import { useEffect, useState } from "react"
import CityCardContent from './CityCardContent'
import CityCardPlaceholder from './CityCardPlaceholder'


export const CityCard = ({city}) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const getCityWeather = async () => {
            setWeather(await getWeather(city))
        }

        getCityWeather()
    }, [city])


    return (
        <div className='col-12 card m-2' style={{ width: '18rem' }}>
            {
                weather ?
                <CityCardContent weather={weather}/> :
                <CityCardPlaceholder />
            }
        </div>
    )
}

export default CityCard