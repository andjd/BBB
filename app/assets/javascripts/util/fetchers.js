(function(root) {
  'use strict';

  var _raiseFailAlert = function (source) {
    return (function(_,__,error){ alert(source + "returned an error:" + error);});
  };
  var BBB = root.BBB = (root.BBB || {});

    BBB.fetchBenches = function () {
      var bounds = this.getBounds();
      var ne = bounds.getNorthEast();
      var n = ne.lat;
      var e = ne.lng;
      var sw = bounds.getSouthWest();
      var s = sw.lat;
      var w = sw.lng;
      $.ajax("/benches", {
        method: "get",
        dataType: "json",
        data: {north: n, east: e, south: s, west: w},
        contentType: 'json',
        success: BBB.Actions.getBenches,
        error: _raiseFailAlert("fetch benches")

      });
    };




}(this));
