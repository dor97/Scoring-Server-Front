import { configureStore } from "@reduxjs/toolkit"
import { AppState } from "./AppState"
import { sampleImageReducers } from "./SampleImageSlice";
import { authReducers } from "./AuthSlice";

//Create the app store which manage redux operations:
export const appStore = configureStore<AppState>({
    reducer: {
        sampleImages: sampleImageReducers,
        user: authReducers
    }
});