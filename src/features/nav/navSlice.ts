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
    toggleNav: (state) => {
      state.isToggled = !state.isToggled
    },
    closeNav: (state) => {
      state.isToggled = false
    }
  }
})


export const {
  toggleNav,
  closeNav
} = navSlice.actions

export default navSlice.reducer
