import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const TodoReducer = createSlice({
  name: 'Todo',
  initialState: {
    todo: [],
  },
  reducers: {
    SetTodo: (state, action) => {
      state.todo = [...action.payload].reverse()
    },
  },
})

export const { SetTodo } = TodoReducer.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodo = state => state.Todo.todo

export default TodoReducer.reducer
