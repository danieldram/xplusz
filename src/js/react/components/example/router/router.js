"use strict";

var React           = require('react');
var Router          = require('react-router');

var DefaultRoute    = Router.DefaultRoute;
var Route           = Router.Route;


var routes = (
    <Route name="app" path="/" handler={require('../container.jsx').elm}>
        <DefaultRoute handler={require('../../../classes/example.jsx')} />
    </Route>

);


module.exports = routes;
