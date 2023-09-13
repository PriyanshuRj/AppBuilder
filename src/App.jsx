import React from "react";
import "./App.css";

// You can split your components
import Editor from "./Editor";
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>

    <div className="App h-full">
      
      <Editor />
    </div>
    </Provider>
  );
};

export default App;
