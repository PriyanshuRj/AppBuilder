import { createSlice } from '@reduxjs/toolkit';

const componentsSlice = createSlice({
  name: 'components',
  initialState: [],
  reducers: {
    addComponent: (state, action) => {
      state.push(action.payload);
    },
    updateComponentPositions: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removedComponent] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removedComponent);
    },
  },
});

export const { addComponent, updateComponentPositions } = componentsSlice.actions;

export default componentsSlice.reducer;