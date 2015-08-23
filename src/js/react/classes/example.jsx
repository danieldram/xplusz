
var React = require('react');

var MyView = React.createClass({
  render:               Example,

});



function Example () {

return(
        <div>
            <button onClick={this.props.whenClicked}> Show Example Text </button>
            <p className={(this.props.state) ? "show": "hide"}>{this.props.title}</p>
        </div>
    );
}





module.exports = MyView;
