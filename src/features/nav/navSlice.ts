import { createSlice } from "@reduxjs/toolkit"


type NavState = {
  isToggled: boolean
}


const initialState: NavState = {
  isToggled: false
}


const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled
    },
    close: (state) => {
      state.isToggled = false
    }
  }
})


export const {
  toggle,
  close
} = navSlice.actions

export default navSlice.reducer
