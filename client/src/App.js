import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import configureStore from "state/store";
import Todos from "views/Todos";
import "./App.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Todos} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
