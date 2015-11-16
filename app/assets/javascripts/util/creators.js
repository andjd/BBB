(function(root) {
  'use strict';

  var _raiseFailAlert = function (source) {
    return (function(_,__,error){ alert(source + "returned an error:" + error);});
  };
  var BBB = root.BBB = (root.BBB || {});

  BBB.createBench = function(form) {
    $.ajax("/benches", {
      method: "POST",
      data: {bench: form},
      dataType: "json",
      // contentType: 'json',
      success: BBB.Actions.getOneBench,
      error: this._raiseFailAlert

    });

  };

}(this));
