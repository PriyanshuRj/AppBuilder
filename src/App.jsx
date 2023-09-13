import React from "react";
import "./App.css";

// You can split your components
import Editor from "./Editor";
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>

    <div className="App">
      {/* Feel free to delete the header */}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload. (Delete me if you
          like!)
        </p>
      </header>
      <Editor />
    </div>
    </Provider>
  );
};

export default App;
