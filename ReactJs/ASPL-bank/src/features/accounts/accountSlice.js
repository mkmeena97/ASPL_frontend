// src/features/accounts/accountSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/axiosInstance';

// ---- Async Thunks ----

export const createAccount = createAsyncThunk(
  'account/create',
  async (accountData, { rejectWithValue }) => {
    try {
      const res = await api.post('/accounts/api/create', accountData);
      return res.data;  // Expect { statusMsg: "...", ... }
    } catch (err) {
      return rejectWithValue(err.response?.data?.statusMsg || err.message);
    }
  }
);

export const fetchAccountByMobile = createAsyncThunk(
  'account/fetchByMobile',
  async (mobileNumber, { rejectWithValue }) => {
    try {
      const res = await api.get('/accounts/api/fetch', {
        params: { mobileNumber },
      });
      return res.data.account || res.data;  // Adjust to your backend!
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getContactInfo = createAsyncThunk(
  'account/getContactInfo',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/accounts/api/contact-info');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getBuildVersion = createAsyncThunk(
  'account/getBuildVersion',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/accounts/api/build-info');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getJavaVersion = createAsyncThunk(
  'account/getJavaVersion',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/accounts/api/java-version');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCustomerDetails = createAsyncThunk(
  'account/fetchCustomerDetails',
  async ({ mobileNumber, correlationId }, { rejectWithValue }) => {
    try {
      const res = await api.get('/accounts/api/fetchCustomerDetails', {
        params: { mobileNumber },
        headers: { 'aspl-correlation-id': correlationId || 'frontend-demo' }
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ---- Slice ----

const initialState = {
  account: null,
  loading: false,
  error: null,
  statusMsg: '',

  contactInfo: null,
  buildVersion: '',
  javaVersion: '',
  metaLoading: false,
  metaError: null,

  customer: null,
  customerLoading: false,
  customerError: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.statusMsg = '';
      state.error = null;
    },
    clearAccount: (state) => {
      state.account = null;
    },
    clearCustomer: (state) => {
      state.customer = null;
      state.customerError = null;
      state.customerLoading = false;
    }
  },
  extraReducers: (builder) => {
    // ---- CREATE ACCOUNT ----
    builder
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

      // ---- FETCH ACCOUNT ----
      .addCase(fetchAccountByMobile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.statusMsg = '';
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
      })

      // ---- GET CONTACT INFO ----
      .addCase(getContactInfo.pending, (state) => {
        state.metaLoading = true;
        state.metaError = null;
      })
      .addCase(getContactInfo.fulfilled, (state, action) => {
        state.metaLoading = false;
        state.contactInfo = action.payload;
      })
      .addCase(getContactInfo.rejected, (state, action) => {
        state.metaLoading = false;
        state.metaError = action.payload;
        state.contactInfo = null;
      })

      // ---- GET BUILD VERSION ----
      .addCase(getBuildVersion.fulfilled, (state, action) => {
        state.buildVersion = action.payload;
      })

      // ---- GET JAVA VERSION ----
      .addCase(getJavaVersion.fulfilled, (state, action) => {
        state.javaVersion = action.payload;
      })
      
      // ---- FETCH CUSTOMER DETAILS ----
      .addCase(fetchCustomerDetails.pending, (state) => {
        state.customerLoading = true;
        state.customerError = null;
        state.customer = null;
      })
      .addCase(fetchCustomerDetails.fulfilled, (state, action) => {
        state.customerLoading = false;
        state.customer = action.payload;
      })
      .addCase(fetchCustomerDetails.rejected, (state, action) => {
        state.customerLoading = false;
        state.customerError = action.payload;
        state.customer = null;
      });
  }
});

export const { clearStatus, clearAccount, clearCustomer } = accountSlice.actions;
export default accountSlice.reducer;
