import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TokenDataModel } from "../Models/TokenDataModel";


function initUser(currentState: TokenDataModel,
    action: PayloadAction<TokenDataModel>): TokenDataModel {

    const user = action.payload;
    const newState = user;
    return newState;
}

function removeUser(currentState: TokenDataModel,
    action: PayloadAction): TokenDataModel {
    return null;
}

//Creating the slice:
const authSlice = createSlice({
    name: "auth",
    initialState: null,
    reducers: {initUser, removeUser}
});

//Create actions:
export const authActions = authSlice.actions;

//Create reducers:
export const authReducers = authSlice.reducer;