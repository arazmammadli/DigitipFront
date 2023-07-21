import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import jwt_decode from "jwt-decode";

interface IAuthReducerState {
    token: string | null,
};

interface IToken {
    name: string;
    exp: number;
}

const state: IAuthReducerState = {
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: state,
    reducers: {
        login: (state: IAuthReducerState, action: { payload: { accessToken: string } }) => {
            if (action.payload !== undefined) {
                localStorage.setItem("token", action.payload.accessToken);
                state.token = action.payload.accessToken;
            }
        },
        checkToken: (state: IAuthReducerState, action: { payload: { accessToken: string } }) => {
            if (action.payload.accessToken !== undefined) {
                const token = jwt_decode<IToken>(action.payload.accessToken);
                const deadline: any = new Date(0);
                deadline.setUTCSeconds(token.exp);
                if (deadline - new Date().getTime() < 0) {
                    localStorage.removeItem("token");
                    state.token = null;
                }
            }
        },
        logout: (state: IAuthReducerState) => {
            localStorage.removeItem("token");
            state.token = null;
        }
    }
});

export const { login, checkToken,logout } = authSlice.actions;

export const selectCurrentToken = (state: RootState) => state.auth;

export default authSlice.reducer;
