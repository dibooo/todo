import React from 'react'
import Navbar from '../../components/Navbar'
import WeatherBox from '../../components/Home/WeatherBox'
import Tasks from '../../components/Home/Tasks'

function Index() {
  return (
    <div>
   <Navbar/>
  <WeatherBox/>
  <Tasks/>
</div>
  )
}

export default Index