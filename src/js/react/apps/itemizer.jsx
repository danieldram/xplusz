var React             = require('react');
var MarvelousHeader   = require('./components/marvelous-header.jsx');
var CreateItem        = require('./components/create-item.jsx');


var App = React.createClass({
  render(){
    return (
    <div className="container c_app">
        <MarvelousHeader/>
        <CreateItem/>
      </div>
    );
  }

});

var elem = React.createElement(App);
module.exports = {elem: elem, target:document.body};
