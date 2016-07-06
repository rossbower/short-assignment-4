// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let num = 0;
// http://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(() => {
  num++;
  $('#main').html(`You\'ve been on this page for ${num} seconds!`);
}, 1000);
