import React from 'react'
import { OptionContainerStyled } from '../../../styles/Home'

function Option({icon,name,submit,itemActive}) {
  return (
    <OptionContainerStyled onClick={()=>submit(name)} name={name} itemActive={itemActive}>
       <img style={{marginLeft:'10%'}} src={icon}/>
       <span style={{marginLeft:'10%'}}>{name} </span> 
    </OptionContainerStyled>
  )
}

export default Option