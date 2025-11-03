import { createSlice } from "@reduxjs/toolkit";



const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: { sidebar: false },
    reducers: {
        toggleSidebar(state) {
            if (state.sidebar === false) {
                state.sidebar = true
            }
            else {
                state.sidebar = false
            }

        }
    }
})

export const sidebarActions = sidebarSlice.actions
export default sidebarSlice.reducer

