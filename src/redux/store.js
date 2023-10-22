import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './projectSlice.js'
import toolSlice from './toolSlice.js'
import myDataSlice from './myDataSlice.js'

const store = configureStore({
  reducer: {
    projects:projectSlice.reducer,
    tools: toolSlice.reducer,
    myData: myDataSlice.reducer,
  },
})

export default store;