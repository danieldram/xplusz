var React               = require('react');
var Router              = require('react-router');
var RouteHandler        = require('react-router').RouteHandler;
//var Example             = require('../../classes/example.jsx');
var GetIntialState      = require('./handlers/get-initial-state.jsx');
var ClickHandler        = require('./handlers/click-handler.jsx');
var Options             = require('./data/options.jsx');
var routes              = require('./router/router.js');

var Container = React.createClass({
  render:           container,
  clickHandler:     ClickHandler,
  getInitialState:  GetIntialState,
  options:          Options,
});




function container () {
return (
    <div className="row">
        <RouteHandler />
    </div>
    ) ;


}

Router.run(routes, function(Handler){
module.exports = {elm: <Handler />, target: document.body}

});




//<Example state={this.state.visibility} whenClicked={this.clickHandler} title={this.options.title} />
