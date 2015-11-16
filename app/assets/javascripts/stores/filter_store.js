(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});

  var _filters = {};

  var FilterStore = BBB.FilterStore = $.extend({}, EventEmitter.prototype, {

  const UPDATE_BOUNDS_EVENT = "UPDATE_BOUNDS_EVENT"


  setBounds: function(bounds) {


  };

  dispatcherID: BBB.AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case BBB.Constants.UPDATE_BOUNDS:
        _setBounds(payload.bounds);
        BBB.FilterStore.emit(UPDATE_BOUNDS_EVENT);
      break;


    }
  });

  })




}(this));
