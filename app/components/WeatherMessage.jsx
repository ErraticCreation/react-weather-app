var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <h4>It is {temp}&deg;F in {location}</h4>
      </div>
    );
  };

module.exports = WeatherMessage;
