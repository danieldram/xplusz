var React       = require('react');
var header      = require('./components/marvelous-header.jsx');
var createItem  = require('./components/create-item.jsx');


var app = React.createClass({
  render(){
    return (
      <div className="col-md-12">
        <h1>render</h1>
        <header />
      </div>
    );
  }

});

var elem = React.createElement(app, {})
React.render(elem, document.getElementsByClassName('c_app')[0]);
