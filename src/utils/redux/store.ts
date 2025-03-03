import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./sidebar";
import Login from "./login";
export const store = configureStore({
    reducer: {
        Menu: MenuSlice,
        Login:Login,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;