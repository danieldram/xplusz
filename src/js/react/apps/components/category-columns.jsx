var React = require('react');

var columns = React.createClass({
  render:render,
  renderCards: renderCards,
  });


function renderCards(filterby){
  return this.props.data.map((data, index)=>{
    return(
        <li key={`cat1-${index}`} className="col-sm-12 col-md-12">
          <div className="col-sm-10 col-md-10">
            {data}
          </div>
          <div className="col-sm-2 col-md-2">
            <i className="fa fa-close pull-right"></i>
          </div>
        </li>
    );

  });

}

function render(){
  console.log(this.props.data);
  var li = this.renderCards();

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
