var React = require('react');

var columns = React.createClass({
  render:render,
  renderCards: renderCards,
  filteredCards: filteredCards,

  });


function renderCards(filterby){
  var catData = this.props.data;
  if(typeof catData === 'string'){
    catData = catData.split(',');
  }

  return catData.map((data, index)=>{

    return(
        <li key={`cat1-${index}`} className="col-sm-12 col-md-12">
          <div className="col-sm-10 col-md-10">
            {data}
          </div>
          <div className="col-sm-2 col-md-2">
            <i onClick={this.props.delete.bind(null, this.props.catName, data)} className="fa fa-close pull-right"></i>
          </div>
        </li>
     );
  });
}

function filteredCards(){
  var catData = this.props.data;
  if(typeof catData === 'string'){
    catData = catData.split(',');
  }

  return catData.map((data, index)=>{

    if(this.props.filter === data)
    return(
        <li key={`cat1-${index}`} className="col-sm-12 col-md-12">
          <div className="col-sm-10 col-md-10">
            {data}
          </div>
          <div className="col-sm-2 col-md-2">
            <i onClick={this.props.delete.bind(null, this.props.catName, data)} className="fa fa-close pull-right"></i>
          </div>
        </li>
     );
  });
}



function render(){
  if(this.props.data)
  var li = (!this.props.toggle) ? this.filteredCards(): this.renderCards();

  return (
    <div className="col-sm-6 col-md-6 c_categoryColumns">
      <h4>{this.props.catName}</h4>
      <ul>
        {li}
      </ul>
    </div>
  );
}

module.exports = columns;
