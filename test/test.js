"use strict";

var util = require("../src/utils");
var ion = require("ion-js");

var json;

var reader = ion.makeReader('{hello: "world"}');
json = util.ionToJSON(reader);
console.log(json);
console.log(json.hello);

var unformatted = ion.makeReader('{level1: {level2: {level3: "foo"}, x: 2}, y: [1,2,3]}');
json = util.ionToJSON(unformatted);
console.log(json);
console.log(json.level1.level2.level3);

var sampleArray = `[{
    VIN: "1HVBBAANXWH544237",
    Type: "Semi",
    Year: 2009,
    Make: "Ford",
    Model: "F 150",
    Color: "Black"
    },
    {
    VIN: "3HGGK5G53FM761765",
    Type: "Motorcycle",
    Year: 2011,
    Make: "Ducati",
    Model: "Monster 1200",
    Color: "Yellow"
    }]`;

var arrayTest = ion.makeReader(sampleArray);
json = util.ionToJSON(arrayTest);
console.log(json);
console.log(json[0].Color);
