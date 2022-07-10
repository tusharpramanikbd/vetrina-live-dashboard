import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export interface DrawerStateModel {
  isDrawerOpened: boolean
}

export const initialState: DrawerStateModel = {
  isDrawerOpened: true,
}

const menuDrawerSlice = createSlice({
  name: 'menuDrawer',
  initialState,
  reducers: {
    setDrawerOpen: (state) => {
      state.isDrawerOpened = true
    },
    setDrawerClose: (state) => {
      state.isDrawerOpened = false
    },
  },
})

export const { setDrawerOpen, setDrawerClose } = menuDrawerSlice.actions

export const menuDrawerSelector = (state: RootState) => state.menuDrawer

export default menuDrawerSlice.reducer
