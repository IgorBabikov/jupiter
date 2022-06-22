import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slices/dataSlice'
import sortSlice from './slices/sortSlice'


const store = configureStore({
  reducer: {
    dataSlice,
    sortSlice
  }
})

export default store