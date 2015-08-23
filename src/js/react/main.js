var React = require('react');

var view = [];

//view.push(require('./components/view.jsx')); // need to specify the jsx extension
view.push(require('./components/example/container.jsx')); // need to specify the jsx extension


for(var i = 0; i<view.length; i++){
    React.render(view[i].elm, view[i].target);
}
