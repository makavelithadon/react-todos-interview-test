import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import configureStore from "state/store";
import "./App.css";
import Todos from "containers/Todos";
import AddTodo from "containers/AddTodo";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 960px;
  padding-top: 40px;
  margin: 0 auto 40px auto;
`;

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path="/"
              render={() => (
                <AppContainer>
                  <AddTodo />
                  <Todos />
                </AppContainer>
              )}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
