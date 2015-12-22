var React = require('react');

var create = React.createClass({

  render:render,
  style:style,
  getValues: getValues,

});

function render(){
  return (
    <div className="col-sm-12 col-md-12 c_createItem" style={this.style()}>
      <input id="createItem__input" type="text" className="form-control" placeholder="Enter Item Name" />

      <div className="col-sm-6 col-md-6">
        <select id="createItem__select" className="form-control">
          <option defaultValue disabled>choose a category</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
      </div>

      <div className="col-sm-6 col-md-6 btn-container">
      <button
        className="btn btn-xplusz col-sm-12 col-md-12"
        onClick={this.getValues}>ADD ITEM</button>
      </div>
  </div>

  );
}

function style(){
  return (this.props.state) ? {display:'block'} : {display:'none'};
}

function getValues(){
    var value = document.getElementById('createItem__input').value;
    var catName = document.getElementById('createItem__select').value;
    var data = this.props.setLocalStorage(catName, value);

    this.props.setCategoryData(data);
}


module.exports = create;
