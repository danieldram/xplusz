var React = require('react');

var marvelous = React.createClass({
  render(){
    return(
      <h1>Marvelous Itemizer</h1>
    );
  }

});

var element = React.createElement(marvelous, {});
var component ={elm:element, target:document.getElementsByClassName('c_header')[0]}

module.exports = component;
