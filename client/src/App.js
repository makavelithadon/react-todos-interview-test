import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from 'state/store';
import './App.css';
import Todos from 'containers/Todos';
import AddTodo from 'containers/AddTodo';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    );
  }
}

export default App;
