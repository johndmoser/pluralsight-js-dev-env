//****************************************************
// This is the Express web server code
//****************************************************

//* ES5 syntax or CommonJS
// var express = require('express');
// var path = require('path');
// var open = require('open');

//* Babel syntax supporting ES6 Module syntax
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack'; // the bundler
import config from '../webpack.config.dev';

//* ES5 syntax for variable declaration
// var port = 3000;
// var app = express();

//* Babel supported ES6
const port = 3000;
const app = express();
const compiler = webpack(config);

// Integrate Webpack bundler with Express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
