var React = require('react');
var MarvelousHeader   = require('../../components/marvelous-header.jsx');
var CreateItem        = require('../../components/create-item.jsx');


module.exports = (app) =>{
  console.log(app);
    return (
    <div className="container c_app">
        <MarvelousHeader state = {app.state.toggleUI} setUI = {app.setUI}/>
        <CreateItem
          state = {app.state.toggleUI}
          setLocalStorage = {app.setLocalStorage}
          setCategoryData = {app.setCategoryData}/>
      </div>
    );

}
