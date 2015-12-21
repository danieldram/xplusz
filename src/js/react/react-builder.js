var React    = require('react');
var itemizer = require('./apps/itemizer.jsx');

var apps = [];
apps.push(itemizer);

apps.map((app)=>{
  React.render(app.elem, app.target);
})
