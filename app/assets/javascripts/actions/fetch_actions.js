(function(root) {
  'use strict';

  var BBB = root.BBB = (root.BBB || {});
  var Actions = BBB.Actions = {};

    Actions.getAllBenches = function (data) {
      BBB.AppDispatcher.dispatch({
        actionType: BBB.Constants.ALL_BENCHES_RECD,
        benches: data
      });
    };



}(this));
