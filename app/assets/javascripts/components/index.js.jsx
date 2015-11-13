(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});


  BBB.Index = React.createClass ({
    getInitialState: function(){
      return { benches: BBB.BenchStore.all() };
    },

    _onChange: function () {
      this.setState({benches: BBB.BenchStore.all()});
    },

    componentDidMount: function () {
      BBB.BenchStore.addChangeHandler( this._onChange);
    },

    render: function () {

      return (
        <ul>
          { this.state.benches.map(function(b){
            return(
            <li key={b.lat}>
              <h5> {b.description} </h5>
            </li>
          );
        })}
        </ul>
      );
    }


  });

}(this));
