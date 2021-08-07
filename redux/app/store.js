import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../features/UserSlice'
import TodoReducer from '../features/todoSlice'

export default configureStore({
  reducer: {
    User: UserReducer,
    Todo: TodoReducer,
  },
})
