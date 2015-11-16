(function(root) {
  'use strict';
  var BBB = root.BBB = (root.BBB || {});


  BBB.Index = React.createClass ({


    render: function () {
      return(
        <div className="show">
          <BBB.Map bench="this.props."/>
          <BBB.Info />
        </div>
      );
    }
    });

}(this));
