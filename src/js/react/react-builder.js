var React = require('react');


var view = [];
view.push(require('./components/marvelous-header.jsx'));

view.map(function(component){
    if(component)
    React.render(component.elm, component.target);
});
