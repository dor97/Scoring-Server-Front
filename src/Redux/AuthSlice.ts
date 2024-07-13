import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";

function initUser(currentState: UserModel,
    action: PayloadAction<UserModel>): UserModel {

    const user = action.payload;
    const newState = user;
    return newState;
}

function removeUser(currentState: UserModel,
    action: PayloadAction): UserModel {
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