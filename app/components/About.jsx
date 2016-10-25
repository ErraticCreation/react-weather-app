var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This weather application built on React was created as a means to familiarize myself with some of the various features within the React Framework.
      </p>
      <h4 className="text-center">
        Some of the tools used:
      </h4>
      <dl>
        <dt>
          <a href="https://facebook.github.io/react/">React</a></dt>
        <dd>
          This was the JavaScript Framework used in the creation of this app.
        </dd>
      </dl>
      <dl>
        <dt>
          <a href="https://openweathermap.org/">OpenWeatherMap</a>
        </dt>
        <dd>
          Open Weather Map API was used in order to fetch current Weather Data.
        </dd>
      </dl>
    </div>
  );
};

module.exports = About;
