var React = require('react');

var search = React.createClass({
  render:render,
  style:style,

});

function render(){
  return(
    <div className="col-sm-12 col-md-12 c_createItem" style={this.style()}>
      <div className="col-sm-8 col-md-8">
        <input id="searchItem__input" type="text" className="form-control" placeholder="Search for items by name" />
      </div>
      <div className="col-sm-4 col-md-4">
        <button className="form-control btn-xplusz btn-xplusz__search">SEARCH</button>
      </div>
    </div>

  );
}

function style(){
  return (this.props.state) ? {display:'none'} : {display:'block'};
}


module.exports = search;
