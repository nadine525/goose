import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { register, login, logout, refreshUser } from "./authOperations";

const initialAuth = {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialAuth,
    extraReducers: builder => builder

        .addCase(register.fulfilled, (state) => {

            state.error = false;
        })
        .addCase(register.pending, (state) => {
            state.error = false;
        })
        .addCase(register.rejected, (state) => {
            state.error = true;
        })

        .addCase(login.pending, state => state)
        .addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.data;
            state.token = payload.data.token;
            state.isLoggedIn = true;
            state.error = false;
        })
        .addCase(login.rejected, state => state.error = true)

        .addCase(logout.fulfilled, state => {
            state.user = { email: null, name: null };
            state.token = null;
            state.isLoggedIn = false
        })
        .addCase(refreshUser.pending, (state, action) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload.data;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
            state.isRefreshing = false;
        })

})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer)