"use strict";
exports.__esModule = true;
var ion = require("ion-js");

function ionToJSON(reader) {
    return Array.isArray(reader) ? ionToJSONArray(reader) : ionToJSONUnit(reader);
}

function ionToJSONArray(readerList) {
    var json = [];
    readerList.forEach(function (reader) { json = json.concat(ionToJsonUtil(reader)); });
    return json;
}

function ionToJSONUnit(reader) {
    return ionToJsonUtil(reader);
}

function ionToJsonUtil(reader) {
    var byteString = decodeIonBytes(reader);
    byteString = '[' + byteString + ']';
    var json = eval(byteString)[0];
    return json;
}

function decodeIonBytes(reader) {
    var writer = ion.makePrettyWriter();
    writer.writeValues(reader);
    return ion.decodeUtf8(writer.getBytes());
}

exports.ionToJSON = ionToJSON;
