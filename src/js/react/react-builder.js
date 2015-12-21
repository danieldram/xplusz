var React = require('react');


var view = [];
view.push(require('./components/marvelous-header.jsx'));
view.push(require('./components/create-item.jsx'));

view.map(function(component){
    if(component)
    React.render(component.elm, component.target);
});
