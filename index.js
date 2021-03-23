/* global moment */

var moment = require('moment');
var math = require("mathjs");

console.log("Sup, my dude?");
var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);
console.log(math.sqrt(4));

var x = "Bob";
var y = "today";
console.log(`Hello ${x}! How are you ${y}?`);