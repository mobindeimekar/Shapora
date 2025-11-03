import { configureStore } from '@reduxjs/toolkit'

import sidebarSlice from './sidebarSlice.js'


const store = configureStore({
  reducer: {
    sidebarExistance: sidebarSlice , 
  },
})

export default store