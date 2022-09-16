import {InputLabel } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {loginData} from '../../constants/Login'
import { clientRoutes } from '../../constants/clientRoutes'
import { FormStyled,TextFieldStyled,PrimaryButtonStyled,SecondaryButtonStyled } from '../../styles'

import { TextFieldContainerStyled } from '../../styles/Login'
import { ParagraphErrorStyle } from '../../styles'

function LoginForm({state,handleChange,errors,submit}) {
    console.log(loginData);
    const navigate=useNavigate()
    const navigateToSignUp=()=>{
        navigate(clientRoutes.signup)
    }
  return (
          <FormStyled  noValidate>
            {loginData.map((item,index)=>
                <TextFieldContainerStyled>
              <InputLabel shrink htmlFor={item.id}>
                {item.label}
              </InputLabel>
                <TextFieldStyled
                  key={index}
                  onChange={handleChange}
                  variant="standard"
                  required
                  fullWidth
                  id={item.id}
                  name={item.name}
                  autoFocus
                  value={state[item.name]}
                 type={item.type}
                 
                />
          {errors[item.name]&&<ParagraphErrorStyle >{errors[item.name]}</ParagraphErrorStyle>}

                </TextFieldContainerStyled>
            )}
            
          
            <PrimaryButtonStyled
              type="submit"
              fullWidth
              variant="contained"
              onClick = {submit}
            >
             Login
            </PrimaryButtonStyled>
            <SecondaryButtonStyled
            
              fullWidth
              variant="contained"
              onClick = {navigateToSignUp}
            >
             Signup
            </SecondaryButtonStyled>
           
          </FormStyled>
  
  )
}

export default LoginForm