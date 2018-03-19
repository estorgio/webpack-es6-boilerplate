import "babel-polyfill";

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getWeather} from './weather';

const $app = $('#app');
const $container = $('<div></div>')
  .addClass('container')
  .appendTo($app);

$('<h1></h1>')
  .text('Welcome to Webpack ES6 Boilerplate')
  .appendTo($container);

$('<p></p>')
  .text('Sample output:')
  .appendTo($container);

function printMessage(message) {
  $('<p></p>')
    .text(message)
    .appendTo($container);
}

getWeather('Davao City')
  .then(data => {

    if (!data) return;
    const {title, condition} = data.query.results.channel.item;

    printMessage(title);
    printMessage(condition.date);
    printMessage(`${condition.temp}°C ${condition.text}`);

  });