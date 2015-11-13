(function(root) {
  'use strict';

    var BBB = root.BBB = (root.BBB || {});



    BBB.Search = React.createClass({

      render: function () {
        return(
          <div className="search">
            <BBB.Map />
            <BBB.Index />
          </div>
        );
      }
    });

}(this));
