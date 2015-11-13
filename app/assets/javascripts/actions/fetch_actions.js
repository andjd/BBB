(function(root) {
  'use strict';

  var BBB = root.BBB = (root.BBB || {});
  var Actions = BBB.Actions = {};

    Actions.getBenches = function (data) {
      BBB.AppDispatcher.dispatch({
        actionType: BBB.Constants.ALL_BENCHES_RECD,
        benches: data
      });
    };



}(this));
