import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface LangState {
    language: string;
}

const state: LangState = {
    language: 'ru'
}

const langSlice = createSlice({
    name: "lang",
    initialState: state,
    reducers: {
        setLanguage: (state: LangState, action: { payload: { lang: string } }) => {
            if (action.payload !== undefined) {
                state.language = action.payload.lang;
            }
        }
    }
});

export const { setLanguage } = langSlice.actions;

export const selectCurrentLanguage = (state:RootState) => state.lang;

export default langSlice.reducer;
