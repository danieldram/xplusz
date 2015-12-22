"use strict";

var Dispatcher      = require('../dispatcher/dispatcher.js');
var ActionTypes     = require('../action_constants/action_constants.js');
var EventEmitter    = require('events').EventEmitter;
var assign    = require('object-assign');

var _data [


];

var exampleStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
        this.on('change', callback);
    },


    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    },

    emitChange: function(callback){
        this.emit('change';)
    },

    get: function(){
        return _data;
    },


});

Dispatcher.register(function(action){
   switch(action.actionType){
       case ActionTypes.btn_clicked:
           _data.push(action.data);
           exampleStore.emitChange();
   }

});

module.exports = exampleStore;
