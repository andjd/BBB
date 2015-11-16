(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});


  BBB.CapacityFilter = React.createClass ({
    getInitialState: function(){
      return { min: "1", max: "8+" };
    },

    _onUpdate: function () {
      var filters = BBB.FilterStore.all;
      this.setState({min: filters.min, max: filters.max});
    },

    _updateMinOnChange: function (e) {
      this.setState({min: e.currentTarget.value});
      this.rangeChanged(e.currentTarget.value, this.state.max);

    },

    _updateMaxOnChange: function (e) {
      this.setState({max: e.currentTarget.value});
      this.rangeChanged(this.state.min, e.currentTarget.value);

    },

    rangeChanged: function (min, max) {
      BBB.Actions.updateRange(min, max);
    },


    render: function () {

      return (
        <div className="MinMax">
          <label htmlFor="filter-min-capacity">Minimum Seats</label>
          <select onChange={this._updateMinOnChange} id="filter-min-capacity" value={this.state.min}>
            {["1","2","3","4","5","6","7","8+"].map(function (el) {
              return ( <option key={el} value={el}>{el}</option> );
            })}
          </select>
          <label htmlFor="filter-max-capacity">Maximum Seats</label>
          <select onChange={this._updateMaxOnChange} id="filter-max-capacity" value={this.state.max}>
            {["1","2","3","4","5","6","7","8+"].map(function (el) {
              return ( <option key={el} value={el}>{el}</option> );
            })}
          </select><br />
        </div>
      );

    }


  });

}(this));
