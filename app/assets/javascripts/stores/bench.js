(function(root) {
  'use strict';
  var BBB = root.BBB = root.BBB || {};

  _benches = [];

  var BenchStore = BBB.BenchStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _benches.slice();
    }
  });



}(this));
