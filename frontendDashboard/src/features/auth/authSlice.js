import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import { RootState } from "../../app/store";
import { isRejectedWithValue } from "@reduxjs/toolkit";
//import { isRejected } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    loading: false,
    error: null,
}


//const credentials = ;

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password}) => {
      try {
        const response = await axios.post('/api/auth/login', { email, password});
        return response.data;
      } catch (error) {
        return isRejectedWithValue(error.response.data);
      }
    }
  );
  
  export const refreshAccessToken = createAsyncThunk(
    'auth/refresh',
    async (_, { getState, rejectWithValue }) => {
      try {
        const { auth } = getState();
        const response = await axios.post('/api/auth/refresh', {
          refreshToken: auth.refreshToken,
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          localStorage.setItem('accessToken', action.payload.accessToken);
          localStorage.setItem('refreshToken', action.payload.refreshToken);
          localStorage.setItem('user', JSON.stringify(action.payload.user));
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ;
        })
        .addCase(refreshAccessToken.fulfilled, (state, action) => {
          state.accessToken = action.payload.accessToken;
          localStorage.setItem('accessToken', action.payload.accessToken);
        });
    },
  });
  
  export const { logout } = authSlice.actions;
  export default authSlice.reducer;