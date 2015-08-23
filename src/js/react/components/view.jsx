
var React = require('react');

var MyView = React.createClass({
  render: Example,
});


function Example () {

    return(<div> Example </div>);
}


module.exports = {elm: React.createElement(MyView), target: document.getElementById('content')}
