import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to = "/create" activeClassName = "is-active"> Create</NavLink>
        <NavLink to = "/help" activeClassName = "is-active"> Help</NavLink>
        <NavLink to = "/" activeClassName = "is-active" exact = {true}> Dash Home </NavLink>
    </header>
);

export default Header;