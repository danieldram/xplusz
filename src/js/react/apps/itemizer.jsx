var React             = require('react');
var _render           = require('./lifecycle-hooks/render.jsx');
var _getInitialState   = require('./lifecycle-hooks/get-initial-state.js');

var App = React.createClass({
  getInitialState(){return _getInitialState(this)},
  render(){ return _render(this)}
});


var elem = React.createElement(App);
module.exports = {elem: elem, target:document.body};
