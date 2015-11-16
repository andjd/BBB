(function(root) {
  'use strict';

    var BBB = root.BBB = (root.BBB || {});

    BBB.Map = React.createClass({

      map: null,

      markers: [],

      _addBenches: function() {

        this.map && BBB.BenchStore.all().forEach(function (bench) {
          this.markers.push(new google.maps.Marker({
            map: this.map,
            title: bench.description,

            position: {lat: bench.lat, lng: bench.lon}
          }));
        }.bind(this));
      },


      componentDidMount: function(){
        var map = React.findDOMNode(this.refs.map);
        var mapOptions = {
          center: {lat: 40.718249, lng: -73.957127},
          zoom: 15
        };
        this.map = new google.maps.Map(map, mapOptions);
        BBB.BenchStore.addChangeHandler(this._addBenches);
        BBB.FilterStore.addUpdateHandler(this._addBenches);
        this.map.addListener ("idle", BBB.Actions.updateBounds(this.map));
        this.map.addListener ("click", this.props.onClick);

      },

      render: function () {
        return(
          <div className="map" ref="map"> </div>
        );
      }

    });

}(this));
