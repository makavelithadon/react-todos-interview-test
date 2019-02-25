import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import configureStore from "state/store";
import Navbar from "components/Navbar";
import Home from "views/Home";
import TodosLists from "views/TodosLists";
import Todos from "views/Todos";
import "./App.css";

const StyledLayout = styled.main`
  padding-top: 60px;
`;

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todoslists">Mes Listes</NavLink>
          </Navbar>
          <StyledLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todoslists" component={TodosLists} />
              <Route path="/todos" component={Todos} />
            </Switch>
          </StyledLayout>
        </>
      </Router>
    </Provider>
  );
}
