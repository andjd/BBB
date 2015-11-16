$(function() {
  'use strict';


var content = document.getElementById("content");
var Search = BBB.Search;

var RR = ReactRouter;

  var App = React.createClass({
    render: function(){
      return (
          <div>
            <h1>Air Bench and Breakfast</h1>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <RR.Route path="/" component={App}>
        <RR.IndexRoute component={Search}/>
        <RR.Route path="benches/new" component={BBB.BenchForm} />
      </RR.Route>

    );

    React.render(<RR.Router>{routes}</RR.Router>, content);

});
