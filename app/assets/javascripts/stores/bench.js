(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});

  var _benches = [];

  var _reset = function (new_benches) {
    _benches = new_benches;
  };

  var _parseDispatch = function (payload) {
    if (payload.actionType === BBB.Constants.ALL_BENCHES_RECD) {
      _reset(payload.benches);
    }
  };

  var CHANGE_EVENT = "CHANGE_EVENT";

  var BenchStore = BBB.BenchStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _benches.slice();
    },

    addChangeHandler: function (callback) {
       this.on(CHANGE_EVENT, callback);
    },

    dispatcherID: BBB.AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BBB.Constants.ALL_BENCHES_RECD:
          _reset(payload.benches);
          BBB.BenchStore.emit(CHANGE_EVENT);
        break;
      }
    })

  });



}(this));
