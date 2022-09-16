import { CssBaseline } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AuthPageContainerStyled,AuthPageStyled } from '../../styles'
import SignupImage from '../../components/Image'
import SignupForm from '../../components/Signup/Form'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, signupUser, userSelector } from '../../redux/slices/userSlice'
import LoadingDiallog from '../../components/LoadingDiallog'
import { ToastContainer } from 'react-toastify'
function Index() {
    const { isFetching, isSuccess } = useSelector(
        userSelector
      );
    const [signup, setSignup] = useState({
        name:'',
        email:'',
        password:'',
        age:''
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
      setSignup({ name:'',
      email:'',
      password:'',
      age:''})
      // TODO navigate('/dashboard')
    }
  }, [ isSuccess]);
    const handleChange=(event)=>{
        const {name,value}=event.target
        setSignup(prevState => ({
            ...prevState,
            [name]: value
         }));
    }
    const signupSubmit=(event)=>{
        event.preventDefault()
        dispatch(signupUser(signup)); 
        
    }
  return (
    <AuthPageStyled container >
      { isFetching&& <LoadingDiallog open={isFetching}/>}
      <ToastContainer />
    <CssBaseline />
    {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
    <AuthPageContainerStyled
      item
      xs={10}
      sm={8}
      md={5}
      lg={3}
    >
        <SignupImage/>
        <SignupForm errors={errors} handleChange={handleChange} state={signup} submit={signupSubmit}/>
    </AuthPageContainerStyled>
  </AuthPageStyled>
  )
}

export default Index