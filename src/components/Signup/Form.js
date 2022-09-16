import {  InputLabel } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {signupData} from '../../constants/Signup'
import { clientRoutes } from '../../constants/clientRoutes'
import { FormStyled,TextFieldStyled,PrimaryButtonStyled,SecondaryButtonStyled} from '../../styles/'

import { TextFieldContainerStyled } from '../../styles/Signup'
import { ParagraphErrorStyle } from '../../styles'

function SignupForm({state,handleChange,errors,submit}) {
    const navigate=useNavigate()
    const navigateToLogin=()=>{
        navigate(clientRoutes.login)
    }
  return (
          <FormStyled  noValidate>
            {signupData.map((item,index)=>
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
             Signup
            </PrimaryButtonStyled>
            <SecondaryButtonStyled
            
              fullWidth
              variant="contained"
              onClick = {navigateToLogin}
            >
             Already have account ? signin
            </SecondaryButtonStyled>
           
          </FormStyled>
  
  )
}

export default SignupForm