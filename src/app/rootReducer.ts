import { combineReducers } from '@reduxjs/toolkit'
import menuDrawerReducer from '../features/menuDrawer/menuDrawerSlice'
import extensionUsersReducer from '../features/extensionMarketplace/extensionMarketplaceSlice'

const rootReducer = combineReducers({
  menuDrawer: menuDrawerReducer,
  extensionUsers: extensionUsersReducer,
})

export default rootReducer
