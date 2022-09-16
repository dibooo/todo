import React, { useEffect, useState } from 'react'
import { ProfileImageEditIconStyled, ProfileImageStyled } from '../../../styles/Profile'
import edit from '../../../assets/edit2.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getValueItemFromLocalStorage } from '../../../helpers'
import { getUser, uploadImage, userSelector } from '../../../redux/slices/userSlice'
import { ToastContainer } from 'react-toastify'
import LoadingDiallog from '../../LoadingDiallog'
function Index() {
    const { isFetching, isSuccess } = useSelector(
        userSelector
      );
      const [user, setUser] = useState(JSON.parse( getValueItemFromLocalStorage('user')))
      
    const dispatch=useDispatch()
   const handleChangeImage=(event)=>{
    const image=event.target.files[0]
    console.log(image);
    dispatch(uploadImage({image}))
    dispatch(getUser({image:''}))

   }
  
   
  return (
    <div>
        { isFetching&& <LoadingDiallog open={isFetching}/>}
      <ToastContainer />
        {user&&<ProfileImageStyled  src={process.env.REACT_APP_BASE_URL+'/user/'+user._id+'/avatar'} />}
       
        <ProfileImageEditIconStyled for='avatar' >
            <img style={{position:'relative',left:'20%',bottom:'2px'}} width='60%' height='60%' src={edit}/>
        </ProfileImageEditIconStyled>
           
        <input hidden  type="file"
       id="avatar" name="avatar"
       onChange={handleChangeImage}
       accept="image/png, image/jpeg"></input>
    </div>
  )
}

export default Index