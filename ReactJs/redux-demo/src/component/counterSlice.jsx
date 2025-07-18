// src/counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk example (optional)
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(amount), 1000)
    )
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload
    })
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer
