(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});

  BBB.BenchForm = React.createClass ({
    getInitialState: function () {
    var lat = this.props.location.query.lat;
    var lon = this.props.location.query.lon;
      return { description: "",
               capacity: "4",
               lat: lat,
               lon: lon
             };
    },

    onSubmit: function (e) {
      e.preventDefault();
      BBB.createBench(this.state);
    },

    onChange: function (e) {
      e.preventDefault();
      var newState = {};
      newState[$(e.currentTarget).data("field")] = e.currentTarget.value;
      this.setState(newState);
    },

    render: function () {
      return (
          <form onSubmit={this.onSubmit}>
            <label htmlFor="new-bench-description">Bench</label>
            <input onChange={this.onChange} data-field="description" id="new-bench-description" type="text" value={this.state.description} /> <br />

            <label htmlFor="new-bench-capacity">Seats</label>
            <select onChange={this.onChange} data-field="capacity" id="new-bench-capacity" value={this.state.capacity}>
              {["1","2","3","4","5","6","7","8+"].map(function (el) {
                return ( <option key={el} value={el}>{el}</option> );
              })}
              </select><br />

            <label htmlFor="new-bench-lat">Latitude</label>
            <input onChange={this.onChange} data-field="lat" id="new-bench-lat" type="text" value={this.state.lat} /><br />

            <label htmlFor="new-bench-lon">Longitude</label>
            <input onChange={this.onChange} data-field="lon" id="new-bench-lon" type="text" value={this.state.lon} /> <br />


            <button>AddBench</button>
          </form>
        );}
  });

  }(this));
