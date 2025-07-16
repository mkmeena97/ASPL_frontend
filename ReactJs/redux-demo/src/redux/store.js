// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../component/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
