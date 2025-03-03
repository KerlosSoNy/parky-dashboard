import { createSlice } from "@reduxjs/toolkit";



const MenuSlice = createSlice({
    name: "Menu",
    initialState: {
        menu: false,
    },
    reducers: {
        setMenu: (state, action) => {
            state.menu = !action.payload;
        },
    },
});

export default MenuSlice.reducer;
export const { setMenu } = MenuSlice.actions;