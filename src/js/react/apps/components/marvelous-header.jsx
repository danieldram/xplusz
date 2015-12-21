var React = require('react');

var marvel = React.createClass({
  render: render,

});

function render(){
  console.log('wtf');
  return(
    <div className="col-sm-12 col-md-12 c_header">
      <div className="col-sm-2 col-md-2 icon-search">
        <i className="fa fa-pencil-square-o"></i>
      </div>
      <div className="col-sm-8 col-md-8">
        <h1>Marvelous Itemizer</h1>
      </div>
      <div className="col-sm-2 col-md-2 icon-new">
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

module.exports = marvel;
