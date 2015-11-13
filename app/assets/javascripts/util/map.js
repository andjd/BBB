(function(root) {
  'use strict';
    var BBB = root.BBB = (root.BBB || {});

    BBB.initMap = function () {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    };

}(this));
