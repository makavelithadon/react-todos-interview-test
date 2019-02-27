import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import configureStore from "state/store";
import Navbar from "components/Navbar";
import Home from "views/Home";
import TodosLists from "views/TodosLists";
import TodosList from "containers/TodosList";
import Todos from "containers/Todos";
import "./App.css";

const StyledLayout = styled.main`
  padding-top: 60px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  &.active {
    color: #e13fa7;
  }
`;

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar>
            <StyledNavLink exact to="/">
              Home
            </StyledNavLink>
            <StyledNavLink to="/todoslists">Mes listes de courses</StyledNavLink>
          </Navbar>
          <StyledLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todoslists/:id/todos" component={Todos} />
              <Route path="/todoslists/:id" component={TodosList} />
              <Route path="/todoslists" component={TodosLists} />
              <Route render={props => <div>No page for {props.location.pathname}</div>} />
            </Switch>
          </StyledLayout>
        </>
      </Router>
    </Provider>
  );
}
