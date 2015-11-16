(function(root) {
  'use strict';

  var _raiseFailAlert = function (source) {
    return (function(_,__,error){ alert(source + "returned an error:" + error);});
  };
  var BBB = root.BBB = (root.BBB || {});

    BBB.fetchBenches = function (bounds) {
      $.ajax("/benches", {
        method: "get",
        dataType: "json",
        data: {north: bounds.n, east: bounds.e, south: bounds.s, west: bounds.w},
        contentType: 'json',
        success: BBB.Actions.getBenches,
        error: _raiseFailAlert("fetch benches")

      });
    };




}(this));
