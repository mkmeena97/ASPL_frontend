import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axiosInstance';

export const fetchAccounts = createAsyncThunk('account/fetchAccounts', async () => {
  const response = await api.get('/account-service/accounts');
  return response.data;
});

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default accountSlice.reducer;
