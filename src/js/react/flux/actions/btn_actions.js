"use strict";

var Dispatcher      = require('../dispatcher/dispatcher.js');
var ActionTypes     = require('../action_constants/action_constants.js');

var btn_actions = {

    btn_clicked: function(data){
        var res = "you have new data";
        Dispatcher.dispatch({actionType:ActionTypes.btn_clicked, data:res });
    }

};

module.exports = btn_actions;
