import { Grid } from '@mui/material'
import React from 'react'
import { data } from '../../../constants/Profile'
import { ProfileButtonsContainerStyled, ProfileDeleteAccountButtonStyled, ProfileHeaderStyled, ProfileSaveButtonStyled, TextFieldContainerStyled, TextFieldLabelStyled, TextFieldStyled } from '../../../styles/Profile'

function Index({user,state,handleChange,submit,errors,deleteSubmit}) {
    
  return (
   
    <div>
        <ProfileHeaderStyled>{user.name}</ProfileHeaderStyled>
        <Grid sx={{margin:'auto',width:'80%'}} container>
            {data.map((item,index)=>(
                <Grid key={index} item lg={item.lg} md={item.md} sm={item.sm} xs={item.xs} >
                    <TextFieldContainerStyled>
                        <TextFieldLabelStyled>
                            {item.label}
                        </TextFieldLabelStyled>
                        <TextFieldStyled   key={index}
                  onChange={handleChange}
                  variant="standard"
                  required
                  fullWidth
                  id={item.id}
                  name={item.name}
                  
                  autoFocus
                  value={state[item.name]}/>
                    </TextFieldContainerStyled>
                </Grid>
            ))
            }
            <ProfileButtonsContainerStyled>
                <ProfileSaveButtonStyled onClick={submit}>
                    Save
                </ProfileSaveButtonStyled>
                <ProfileDeleteAccountButtonStyled onClick={deleteSubmit}>
                Delete Account
                </ProfileDeleteAccountButtonStyled>
            </ProfileButtonsContainerStyled>
        </Grid>
    </div>
  )
}

export default Index