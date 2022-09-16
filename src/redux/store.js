import { configureStore } from '@reduxjs/toolkit';
import { taskSlice, tasksSlice } from './slices/taskSlice';
import { userSlice } from './slices/userSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    tasks:tasksSlice.reducer,
    task: taskSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});