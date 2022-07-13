import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import UserType from '../../@types/UserType'
import { RootState } from '../../app/store'

interface InitialState {
  isLoading: boolean
  users: UserType[] | null
  error: string
}

const initialState: InitialState = {
  isLoading: false,
  users: [],
  error: '',
}

export const fetchUsers = createAsyncThunk(
  'extensionUsers/fetchUsers',
  async () => {
    const res = await axios.get('https://randomuser.me/api/?results=20')
    return res.data.results
  }
)

const extensionUsersSlice = createSlice({
  name: 'extensionUsers',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserType[]>) => {
        state.isLoading = false
        state.error = ''
        state.users = action.payload
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.users = null
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const ExtensionUsersSelector = (state: RootState) => state.extensionUsers

export default extensionUsersSlice.reducer
