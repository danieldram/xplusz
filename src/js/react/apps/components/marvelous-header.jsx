var React = require('react');

var marvel = React.createClass({
  render: render,
  style:style,
});

function style(ui){
  if(ui=="create")
  return (this.props.state) ? {color:'#fff'} : {};

  if(ui=="search")
  return (!this.props.state) ? {color:'#fff'} : {};

}

function render(){
  console.log(this.props);
  return(
    <div className="col-sm-12 col-md-12 c_header">
      <div className="col-sm-2 col-md-2 icon-search">
        <i className="fa fa-pencil-square-o"
          onClick={this.props.setUI.bind(null, true)}
          style={this.style('create')}
          ></i>
      </div>
      <div className="col-sm-8 col-md-8">
        <h1>Marvelous Itemizer</h1>
      </div>
      <div className="col-sm-2 col-md-2 icon-new">
        <i className="fa fa-search"
          onClick={this.props.setUI.bind(null, false)}
          style={this.style('search')}></i>
      </div>
    </div>
  );
}

module.exports = marvel;
