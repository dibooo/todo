import React, { useState } from 'react'
import { getValueItemFromLocalStorage, removeItemFromLocalStorage } from '../../helpers'
import { NavBarLogoStyled, NavBarProfileStyled, NavbarStyled } from '../../styles/Home'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { removeUserToken } from '../../services/auth.service';
function Index() {
  const [user, setUser] = useState(JSON.parse( getValueItemFromLocalStorage('user')))
  const navigate =useNavigate()
  const logout=()=>{
    removeUserToken()
    removeItemFromLocalStorage('user')
    navigate('/login')
  }
  return (
    <NavbarStyled>
        <NavBarLogoStyled onClick={()=>navigate('/')}/>
        <LogoutIcon onClick={logout} fontSize='medium' sx={{float:'right',position:'relative',right:'5%',top:'20px',cursor:'pointer'}}/>
        <NavBarProfileStyled onClick={()=>navigate('/profile')} src={process.env.REACT_APP_BASE_URL+'/user/'+user._id+'/avatar'}/>
       
    </NavbarStyled>
  )
}

export default Index