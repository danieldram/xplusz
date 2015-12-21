var React = require('react');

var create = React.createClass({

  render(){
    return (
      <div className="col-sm-12 col-md-12">
        <input type="text" className="form-control" placeholder="Enter Item Name" />
      </div>
    );
  }

});

var element = React.createElement(create, {});
module.exports =  {elm:element, target:document.getElementsByClassName('c_createItem')[0]};
