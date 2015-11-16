(function(root) {
  'use strict';

    var BBB = root.BBB = (root.BBB || {});




    BBB.Search = React.createClass({
      getInitialState: function () {
        return {filters: BBB.FilterStore.all};
      },

      _onUpdate: function () {
        this.setState({filters: BBB.FilterStore.all});
      },

      componentDidMount: function () {
        BBB.FilterStore.addUpdateHandler(this._onUpdate);
      },

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
