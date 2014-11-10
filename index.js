/**
 * Module dependencies
 */

var request = require('request');
var assert = require('assert');

/**
 * Foobar
 */

var request = require('request');


console.log(process.argv);

request('http://' + process.argv[2], function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
  console.log(error);
})


var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://' + process.argv[2]);
