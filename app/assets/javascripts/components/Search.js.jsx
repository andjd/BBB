(function(root) {
  'use strict';

    var BBB = root.BBB = (root.BBB || {});




    BBB.Search = React.createClass({

      onMapClick: function (mapClickEvent) {
        var lat = mapClickEvent.latLng.lat();
        var lon = mapClickEvent.latLng.lng();
        this.props.history.pushState("_", "/benches/new", {lat: lat, lon: lon});
      },

      render: function () {
        return(
          <div className="search">
            <BBB.Map onClick={this.onMapClick} />
            <BBB.Index />
          </div>
        );
      }
    });

}(this));
