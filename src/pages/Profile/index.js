import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Image from '../../components/Profile/Image'
import Form from '../../components/Profile/Form'
import { getValueItemFromLocalStorage } from '../../helpers'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProfile, getUser, updateProfile, userSelector } from '../../redux/slices/userSlice'


function Index() {
    const { isFetching, isSuccess } = useSelector(
        userSelector
      );
      const dispatch=useDispatch()
   const user=JSON.parse( getValueItemFromLocalStorage('user'))
    const [profile, setProfile] = useState({
        name:user.name,
        age:user.age,
        newPassword:'',
        confirmNewPassword:'',
        email:user.email
    })
    // const [profile, setProfile] = useState({
    //     name:'',
    //     age:'',
    //     newPassword:'',
    //     confirmNewPassword:'',
    //     email:''
    // })
    const handleChange=(event)=>{
        const {name,value}=event.target
        setProfile(prevState => ({
            ...prevState,
            [name]: value
         }));
    }
    const updateProfileSubmit=()=>{
        dispatch(updateProfile(profile))
        dispatch(getUser({image:''}))
    }
    const deleteProfileSubmit=()=>{
        dispatch(deleteProfile({}))
       
    }
  return (
    <div>
        <Navbar/>
        <Image/>
        <Form deleteSubmit={deleteProfileSubmit} submit={updateProfileSubmit} handleChange={handleChange} state={profile}    user={user} />
     
    </div>
  )
}

export default Index