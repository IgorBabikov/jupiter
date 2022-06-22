import { createSlice} from '@reduxjs/toolkit'

const initialState = {
   limit: 9,
   category: 0
}

const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      setLimit(state, action) {
         state.limit = action.payload
      },
      setSortCategory(state, action) {
         state.category = action.payload
      }
   }
})

export const {
   setLimit,
   setSortCategory
} = sortSlice.actions;

export default sortSlice.reducer