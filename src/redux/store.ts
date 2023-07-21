import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSlice } from "./api/auth/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/reducers/authSlice";
import langReducer from "../features/reducers/langSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        lang: langReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
setupListeners(store.dispatch)