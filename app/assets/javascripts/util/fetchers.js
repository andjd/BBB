(function(root) {
  'use strict';

  _raiseFailAlert = function (source) {
    return (function(_,__,error){ alert(source + "returned an error:" + error);});
  };
  var BBB = root.BBB = root.BBB || {};

    BBB.fetchBenches = function () {
      $.ajax("/benches", {
        method: "get",
        dataType: "json",
        success: BBB.Actions.getAllBenches(data)
        error: _raiseFailAlert("fetch benches")

      })
    };




}(this));
