import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
  },
  reducers: {
    Add: (state, action) => {
      state.user = action.payload
      const fetch = async () => {
        await axios
          .post(`${process.env.NEXT_PUBLIC_HOST}/api/createUser`, {
            email: action.payload.email,
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
      fetch()
    },
    Remove: (state, action) => {
      state.user = null
    },
    Check: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { Add, Remove, Check } = UserSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.User.user

export default UserSlice.reducer
