var React               = require('react');
var Example             = require('../../classes/example.jsx');
var GetIntialState      = require('./handlers/get-initial-state.jsx');
var ClickHandler        = require('./handlers/click-handler.jsx');
var Options             = require('./data/options.jsx')

var Container = React.createClass({
  render:           container,
  clickHandler:     ClickHandler,
  getInitialState:  GetIntialState,
  options:          Options,
});




function container () {
return (
    <div className="row">
    <Example state={this.state.visibility} whenClicked={this.clickHandler} title={this.options.title} />
    </div> ) ;

}


module.exports = module.exports = {elm: React.createElement(Container), target: document.body}
