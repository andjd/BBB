(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});

  var _filters = {};

  var _setFilters = function(things) {
    Object.keys(things).forEach( function (thing) {
      _filters[thing] = things[thing];
    });
  };


  const UPDATE_EVENT = "UPDATE_EVENT";

  var FilterStore = BBB.FilterStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      _filters.slice();
    },

    capacityRange: function () {
      return {max: _filters.max, min: _filters.min};
    },

    bounds: function () {
      return {north: _filters.north, east: _filters.east, south: _filters.south, west: _filters.west};
    },


   addUpdateHandler: function (callback) {
     this.on(UPDATE_EVENT, callback);
   },

     dispatcherID: BBB.AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BBB.Constants.UPDATE_BOUNDS:
          _setFilters(payload.bounds);
          BBB.FilterStore.emit(UPDATE_EVENT);
        break;

        case BBB.Constants.UPDATE_CAPACITY_RANGE:
          _setFilters(payload.capacityRange);
          BBB.FilterStore.emit(UPDATE_EVENT)
        break;


      }
    })

  });




}(this));
