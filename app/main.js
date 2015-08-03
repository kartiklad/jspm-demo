var $ = require('jquery')

$(document).ready(function() {
    // ES6 module with a named export hello 
    var helloES6 = require('./es6').hello;
    helloES6();

    // AMD module
    var helloAMD = require('./amd');

    // React demo
    var helloReact = require('./react-demo').hello;
    helloReact();

});