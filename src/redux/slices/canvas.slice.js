import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedElement: JSON.parse(localStorage.getItem("selected")) || null,
  elements: JSON.parse(localStorage.getItem("elements")) || [],
}

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements = [...state.elements, action.payload]
    },
    selectElement: (state, action) => {
      state.selectedElement = action.payload
    },
    setElement: (state, action) => {
      state.elements = [...action.payload]
    },
    resetElements: (state, action) => {
      state.elements = []
    }
  }
})

export const { addElement, selectElement, setElement, resetElements } = canvasSlice.actions

export default canvasSlice.reducer;