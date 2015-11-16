(function(root) {
  'use strict';

  var _raiseFailAlert = function (source) {
    return (function(_,__,error){ alert(source + "returned an error:" + error);});
  };
  var BBB = root.BBB = (root.BBB || {});

    BBB.fetchBenches = function (bounds, capacity_range, callback) {

      $.ajax("/benches", {
        method: "get",
        dataType: "json",
        data: {bounds: bounds, capacity_range: capacity_range},
        contentType: 'json',
        success: callback,
        error: _raiseFailAlert("fetch benches")

      });
    };




}(this));
