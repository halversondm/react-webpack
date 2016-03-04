import React from 'react';
import $ from 'jquery';

var Greeting = React.createClass({
  getInitialState: function() {
    return ({ data: {} });
  },
  componentDidMount: function() {
    $.ajax({
        url: 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?jsoncallback=JSON_CALLBACK&symbol=MSFT',
        dataType: 'jsonp'
      })
      .done(function(data) {
        this.setState({ data: data });
        console.log("success");
      }.bind(this))
      .fail(function() {
        this.setState({ data: { NotFound: 'No Data is available' } });
      }.bind(this));
  },
  render: function() {
    return (
      <div className="greeting">
         {Object.keys(this.state.data).map(function(value, index) {
             return (<div key={index}><h3>{value}</h3>{this.state.data[value]}</div>)
         }.bind(this))

         }
      </div>
    );
  }

});

export default Greeting;
