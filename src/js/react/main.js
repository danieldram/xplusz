var React = require('react');


var view = [];
view.push(require('./components/example/container.jsx'));


for(var i = 0; i<view.length; i++){
    React.render(view[i].elm, view[i].target);
}
