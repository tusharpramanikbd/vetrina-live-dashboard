import { combineReducers } from '@reduxjs/toolkit'
import menuDrawerReducer from '../features/menuDrawer/menuDrawerSlice'

const rootReducer = combineReducers({
  menuDrawer: menuDrawerReducer,
})

export default rootReducer
