/** @jsx React.DOM */

var App = React.createClass({
  render: function() {
    return <div classname="philipReacts" />;
  }
});

React.renderComponent(<App />, document.body);

