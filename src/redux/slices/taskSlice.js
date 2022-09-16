import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {taskRoute  } from '../../server requests/routes';
import { deletes, get, post, put } from '../../services/apiServices';
import { getUserToken } from '../../services/auth.service';
import { setItemInLocalStorage } from '../../helpers';


export const addTask = createAsyncThunk(
  'add-task',
  async ({description,completed}, thunkAPI) => {
    try {
       
       let res=await post(taskRoute,{description,completed},

        { headers: {"Authorization" : `Bearer ${getUserToken()}`} },'notification')
       if(res.status===201)
       return res;
       else
       throw new Error("response was not ok")
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const updateTask = createAsyncThunk(
    'update-task',
    async ({id,task}, thunkAPI) => {
      try {
         
         let res=await put(taskRoute+'/'+id,{description:task.description,completed:task.completed},
  
          { headers: {"Authorization" : `Bearer ${getUserToken()}`} },'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
export const getTasks = createAsyncThunk(
    'get-tasks',
    async ({completed}, thunkAPI) => {
      try {
        console.log(completed);
         
         let res=await get(taskRoute,
  
          { headers: {"Authorization" : `Bearer ${getUserToken()}`},
          
          params:{
            completed:completed!==undefined&&completed,
          } },'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  export const deleteTask = createAsyncThunk(
    'delete-task',
    async ({id}, thunkAPI) => {
      try {
  
         console.log(id);
         let res=await deletes(taskRoute+'/'+id,
  
          { headers: {"Authorization" : `Bearer ${getUserToken()}`},
          
           },'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  export const getTask = createAsyncThunk(
    'get-task',
    async ({id}, thunkAPI) => {
      try {
  
         console.log(id);
         let res=await get(taskRoute+'/'+id,
  
          { headers: {"Authorization" : `Bearer ${getUserToken()}`},
          
           },'notification')
         if(res.status===200)
         return res;
         else
         throw new Error("response was not ok")
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );




export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    data:{},
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearTaskState: (state) => {
       state.data={}
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  
  },
  extraReducers: {

    [getTask.fulfilled]: (state, {payload} ) => {
      state.data=payload.data.data
      state.isFetching = false;
      state.isSuccess = true;
      return state
    },
    [getTask.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },
    [getTask.pending]: (state) => {
      state.isFetching = true;
    },
   
  
  },
});
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
      data:[],
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: '',
    },
    reducers: {
      clearTasksState: (state) => {
         state.data=[]
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
        return state;
      },
    
    },
    extraReducers: {
  
      [addTask.fulfilled]: (state, {payload} ) => {
    
        toast.success('you add task successfully')//should send from api
        state.isFetching = false;
        state.isSuccess = true;
        return state
      },
      [addTask.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [addTask.pending]: (state) => {
        state.isFetching = true;
      },
      [getTasks.fulfilled]: (state, {payload} ) => {
        console.log(payload);
        state.data=payload.data.data
        state.isFetching = false;
        // state.isSuccess = !state.isSuccess; 
        return state
      },
      [getTasks.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [getTasks.pending]: (state) => {
        state.isFetching = true;
      },
      [deleteTask.fulfilled]: (state, {payload} ) => {
        
        state.isFetching = false;
         state.isSuccess = !state.isSuccess;
        return state
      },
      [deleteTask.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [deleteTask.pending]: (state) => {
        state.isFetching = true;
      },
      [updateTask.fulfilled]: (state, {payload} ) => {
        
        // state.isFetching = false;
         state.isSuccess = !state.isSuccess;
        return state
      },
      [updateTask.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
      },
      [updateTask.pending]: (state) => {
        state.isFetching = true;
      },
    },
  });

export const { clearTasksState } = tasksSlice.actions;

export const tasksSelector = (state) => state.tasks;
export const taskSelector = (state) => state.task;

