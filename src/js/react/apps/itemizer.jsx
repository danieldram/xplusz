var React             = require('react');
var lifecycle         = require('./lifecycle-hooks')
var methods           = require('./methods');

var App = React.createClass({
  getInitialState(){
    return lifecycle.getInitialState(this);
  },

  setUI(bool){
    this.setState({toggleUI:bool});
  },

  setLocalStorage(catName, value){
    return methods.setLocalStorage(catName, value);
  },

  setCategoryData({catName, value}){
    console.log('running');
    return methods.setCategoryData(this, catName, value);
  },

  filter(value){
    methods.setFilter(this, value);
  },

  delete(catName, index){
    methods.deleteItem(this, catName, index);
  },

  render(){
    return lifecycle.render(this);
  }
});


var elem = React.createElement(App);
module.exports = {elem: elem, target:document.body};
