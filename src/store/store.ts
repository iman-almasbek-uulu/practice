"use client"


import { configureStore } from "@reduxjs/toolkit";
import universityPage from "./universitySlice"





export const store = configureStore({
    reducer: {
        universities: universityPage
    }
})

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch