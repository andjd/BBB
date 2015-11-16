(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});

  var Actions = BBB.Actions = (BBB.Actions || {});

  Actions.updateBounds = function(mapObj) {
    return function (event) {
      var bounds = mapObj.getBounds();
      var ne = bounds.getNorthEast();
      var n = ne.lat();
      var e = ne.lng();
      var sw = bounds.getSouthWest();
      var s = sw.lat();
      var w = sw.lng();

      BBB.AppDispatcher.dispatch ({
        actionType: BBB.Constants.UPDATE_BOUNDS,
        bounds: {north: n, east: e, south: s, west: w}

      });
    };

  };



}(this));
