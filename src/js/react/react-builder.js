var React = require('react');


var view = [];
view.push(require('./components/example/container.jsx'));


view.map(function(component){

    React.render(component.elm, component.target);

});
