const webpack = require('webpack');
const dotenv = require('dotenv');
// If OPENWEATHERMAPAPIKEY system variable doesn't exist initialize dotenv script to attempt to pull it from .env file
if(!JSON.stringify(process.env.OPENWEATHERMAPAPIKEY)){
  dotenv.config();
}

module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx',
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      }),
      new webpack.DefinePlugin({
        'process.env': {
        'OPENWEATHERMAPAPIKEY': JSON.stringify(process.env.OPENWEATHERMAPAPIKEY)
      }
})
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
          Main:    'app/components/Main.jsx',
          Nav:     'app/components/Nav.jsx',
          Weather: 'app/components/Weather.jsx',
          WeatherForm: 'app/components/WeatherForm.jsx',
          WeatherMessage: 'app/components/WeatherMessage.jsx',
          About:   'app/components/About.jsx',
          Examples: 'app/components/Examples.jsx',
          openWeatherMap: 'app/api/openWeatherMap.jsx',
          ErrorModal: 'app/components/ErrorModal.jsx',
          applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};
