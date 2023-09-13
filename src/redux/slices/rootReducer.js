import { combineReducers } from '@reduxjs/toolkit';
import componentsReducer from './componentsSlice';

const rootReducer = combineReducers({
  components: componentsReducer,
});

export default rootReducer;