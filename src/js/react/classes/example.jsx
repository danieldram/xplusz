
var React = require('react');

var MyView = React.createClass({
  render: Example,
});


function Example () {

return(<div> {this.props.title} </div>);
}





module.exports = MyView;
