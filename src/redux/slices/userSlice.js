import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {  loginRoute,signupRoute, uploadImageRoute, userRoute } from '../../server requests/routes';
import { deletes, get, post, put } from '../../services/apiServices';
import { getUserToken, removeUserToken, setUserToken } from '../../services/auth.service';
import { removeItemFromLocalStorage, setItemInLocalStorage } from '../../helpers';


export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password   }, thunkAPI) => {
    try {
       
       let res=await post(loginRoute,{email,password},{},'notification')
       if(res.status===200)
       return res;
       else
       throw new Error("response was not ok")
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const signupUser = createAsyncThunk(
    'users/signup',
    async ({ name,email, password,age}, thunkAPI) => {
      try {
         let res=await post(signupRoute,{name,email,password,age},{},'notification')
         if(res.status===201)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  export const uploadImage = createAsyncThunk(
    'users/uploadImage',
    async ({image}, thunkAPI) => {
      try {
            let imageFormData=new FormData()
            imageFormData.append('avatar',image)
         let res=await post(uploadImageRoute,imageFormData, { headers: {"Authorization" : `Bearer ${getUserToken()}`}},'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  export const getUser = createAsyncThunk(
    'users/user-info',
    async ({image}, thunkAPI) => {
      try {
            
         let res=await get(userRoute, { headers: {"Authorization" : `Bearer ${getUserToken()}`}},'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  export const updateProfile = createAsyncThunk(
    'users/update-profile',
    async ({name,age,newPassword,email}, thunkAPI) => {
      try {
            console.log(age);
         let res=await put(userRoute,{name,age,password:newPassword,email}, { headers: {"Authorization" : `Bearer ${getUserToken()}`}},'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  export const deleteProfile = createAsyncThunk(
    'users/delete-profile',
    async ({}, thunkAPI) => {
      try {
           
         let res=await deletes(userRoute, { headers: {"Authorization" : `Bearer ${getUserToken()}`}},'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  
// export const logoutUser = createAsyncThunk(
//   'users/logout',
//   async () => {
//     try {

//        let res=await post(logoutRoute,{},{ headers: {"Authorization" : `Bearer ${getUserToken()}`} },'notification')
//        console.log(res);
//        if(res.status===200)
//        return res;
//        else
//        throw new Error("response was not ok")
//     } catch (e) {
//       console.log('Error', e.response.data);
      
//     }
//   }
// );


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  
  },
  extraReducers: {

    [loginUser.fulfilled]: (state, {payload} ) => {
   
      setUserToken(payload.data.token)
      setItemInLocalStorage('user',JSON.stringify(payload.data.user)) 
      toast.success('you login successfully')//should send from api
      state.isFetching = false;
      state.isSuccess = true;
      window.location='/'
      return state
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.fulfilled]: (state, {payload} ) => {
   
        setUserToken(payload.data.token)
        setItemInLocalStorage('user',JSON.stringify(payload.data.user))
        toast.success('you create your account successfully')//should send from api
        state.isFetching = false;
        state.isSuccess = true;
        window.location='/'
        return state
      },
      [signupUser.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [signupUser.pending]: (state) => {
        state.isFetching = true;
      },
      [uploadImage.fulfilled]: (state, {payload} ) => {
        // state.isFetching = false;
        state.isSuccess =  !state.isSuccess ;
        return state
      },
      [uploadImage.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [uploadImage.pending]: (state) => {
        state.isFetching = true;
      },
      [getUser.fulfilled]: (state, {payload} ) => {
        console.log(payload);
     
        setItemInLocalStorage('user',JSON.stringify(payload.data))
        state.isFetching = false;
        state.isSuccess =  !state.isSuccess ;
        window.location='/profile'
        return state
      },
      [getUser.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [getUser.pending]: (state) => {
        state.isFetching = true;
      },
      [updateProfile.fulfilled]: (state, {payload} ) => {
        state.isSuccess =  !state.isSuccess ;
        return state
      },
      [updateProfile.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [updateProfile.pending]: (state) => {
        state.isFetching = true;
      },
      [deleteProfile.fulfilled]: (state, {payload} ) => {
        removeUserToken()
        removeItemFromLocalStorage('user')
        window.location='/login'
        state.isSuccess =  !state.isSuccess ;
        return state
      },
      [deleteProfile.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [deleteProfile.pending]: (state) => {
        state.isFetching = true;
      },
    /*
    [logoutUser.fulfilled]: (state, {payload} ) => {
   
      removeUserToken()
      removeUserRole() 
      state.isFetching = false;
      state.isSuccess = true;
      return state
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },
    [logoutUser.pending]: (state) => {
      state.isFetching = true;
    },*/
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
