import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { getValueItemFromLocalStorage, removeItemFromLocalStorage } from '../helpers'

function ServerError() {
    useEffect(() => {
        removeItemFromLocalStorage('serverError')
    }, [])
    
  return (
    <div style={{width:'100%',padding:'2%',}}>
        <h1 style={{textAlign:'center'}}>Server Error</h1>
        <h2 style={{padding:'2%'}}>{getValueItemFromLocalStorage('serverError')}</h2>
        <Button sx={{width:'10%',marginLeft:'45%',padding: '12px'}} onClick={()=>{window.location=window.location.pathname}} >try again</Button>
    </div>
  )
}

export default ServerError