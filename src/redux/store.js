import {configureStore} from '@reduxjs/toolkit'
import canvasSlice from './slices/canvas.slice';
const store = configureStore({
  reducer: {
    canvas: canvasSlice,
  }
})

export default store;