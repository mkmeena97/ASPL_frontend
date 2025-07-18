// src/features/accounts/accountSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axiosInstance';

// Async thunk: Create account
export const createAccount = createAsyncThunk(
  'account/create',
  async (accountData, { rejectWithValue }) => {
    try {
      const res = await api.post('/accounts/api/create', accountData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data?.statusMsg || err.message);
    }
  }
);

// Async thunk: Fetch account by mobile number
export const fetchAccountByMobile = createAsyncThunk(
  'account/fetchByMobile',
  async (mobileNumber, { rejectWithValue }) => {
    try {
      const res = await api.get('/accounts/api/fetch', {
        params: { mobileNumber },
      });
      // Make sure to only return the account object, not a wrapper
      return res.data.account || res.data;
    } catch (err) {
      return rejectWithValue(err.response.data?.message || err.message);
    }
  }
);

// Initial state
const initialState = {
  account: null,
  loading: false,
  error: null,
  statusMsg: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.statusMsg = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Account
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
        state.statusMsg = '';
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.statusMsg = action.payload.statusMsg || 'Account created successfully';
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Account by Mobile
      .addCase(fetchAccountByMobile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.account = null;
      })
      .addCase(fetchAccountByMobile.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload;
      })
      .addCase(fetchAccountByMobile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.account = null;
      });
  },
});

export const { clearStatus } = accountSlice.actions;
export default accountSlice.reducer;
