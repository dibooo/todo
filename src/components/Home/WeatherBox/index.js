import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { weatherLeftSideText } from '../../../constants/Home'
import { getValueItemFromLocalStorage } from '../../../helpers'
import {WeatherBoxLeftSideStyled,WeatherBoxRightSideImageStyled,WeatherBoxRightSideStyled,WeatherBoxRightSideWeatherTextStyled,WeatherBoxStyled} from '../../../styles/Home'
function Index() {
    const [weather, setWeather] = useState({})
  useEffect(() => {
    const location = window.navigator && window.navigator.geolocation

  }, [ ])
  useEffect( () => {
    const location = window.navigator && window.navigator.geolocation
    if (location) {
        location.getCurrentPosition(async(position) => {
            const result = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`,
              );
              setWeather(result.data)
        }, (error) => {
         console.log(error);
        })
      }  
 
 
  }, []);
  
    const user=JSON.parse( getValueItemFromLocalStorage('user'))
    console.log(weather);
  return (
    <WeatherBoxStyled>
        <Grid container>
        <Grid Item lg={7} md={6} sm={12} xs={12}>
            <WeatherBoxLeftSideStyled>
                {weatherLeftSideText}
                <p>{user.name+'!'}</p>
            </WeatherBoxLeftSideStyled>
           
        </Grid>
        <Grid Item lg={5} md={6} sm={12} xs={12}>
            <WeatherBoxRightSideStyled>
                <div style={{display:'inline-block'}}>
               <p> {weather&&weather.weather&&weather.weather[0].main},</p>
                <WeatherBoxRightSideWeatherTextStyled>
                {weather&&weather.main&&weather.main.temp}C
                </WeatherBoxRightSideWeatherTextStyled>
                </div>
                <WeatherBoxRightSideImageStyled/>
            </WeatherBoxRightSideStyled>
        </Grid>
        </Grid>
    </WeatherBoxStyled>
  )
}

export default Index