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

module.exports = create;
