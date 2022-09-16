import { CssBaseline } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AuthPageContainerStyled,AuthPageStyled } from '../../styles'
import LoginImage from '../../components/Image'
import LoginForm from '../../components/Login/Form'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, loginUser, userSelector } from '../../redux/slices/userSlice'
import LoadingDiallog from '../../components/LoadingDiallog'
import { ToastContainer } from 'react-toastify'

function Index() {
    const { isFetching, isSuccess } = useSelector(
        userSelector
      );
    const [login, setLogin] = useState({
        email:'',
        password:''
    })
    const [errors, seterrors] = useState({
        email:'',
        password:''
    })
  const dispatch = useDispatch();
    useEffect(() => {
        return () => {
          dispatch(clearState());
        };
      }, []);
      useEffect(() => {
        if (isSuccess) {
          dispatch(clearState());
          setLogin({email:'',password:''})
         //TODO navigate('/dashboard')
        }
      }, [ isSuccess]);
    const handleChange=(event)=>{
        const {name,value}=event.target
        setLogin(prevState => ({
            ...prevState,
            [name]: value
         }));
    }
    const loginSubmit=(event)=>{
        event.preventDefault()
        dispatch(loginUser(login)); 
    }
  return (
    <AuthPageStyled container >
     { isFetching&& <LoadingDiallog open={isFetching}/>}
      <ToastContainer />
    <CssBaseline />
    {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
    <AuthPageContainerStyled
      item
      xs={11}
      sm={8}
      md={5}
      lg={3}
    >
        <LoginImage/>
        <LoginForm errors={errors} handleChange={handleChange} state={login} submit={loginSubmit}/>
    </AuthPageContainerStyled>
  </AuthPageStyled>
  )
}

export default Index