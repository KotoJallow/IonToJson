### Ion to JSON

    Converts Amazon Ion to JSON.
    
### npm install ion-to-json


   ### TypeScript Sample
    import { ionToJSON } from "ion-to-json";
    import { makeReader, Reader } from "ion-js";

    let json;

    let reader: Reader = makeReader('{hello: "world"}');
    json = ionToJSON(reader);

    console.log(json);
    console.log(json.hello);

    let unformatted: Reader = makeReader('{level1: {level2: {level3: "foo"}, x: 2}, y: [1,2,3]}');
    json = ionToJSON(unformatted);

    console.log(json);
    console.log(json.level1.level2.level3)

    let sampleArray: string = `[{
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

    let arrayTest = makeReader(sampleArray);
    json = ionToJSON(arrayTest)

    console.log(json)
    console.log(json[0].Color)

   ### Javascript Sample
    "use strict";

    var iontojson = require("ion-to-json");
    var ion = require("ion-js");

    var json;

    var reader = ion.makeReader('{hello: "world"}');
    json = iontojson.ionToJSON(reader);
    console.log(json);
    console.log(json.hello);

    var unformatted = ion.makeReader('{level1: {level2: {level3: "foo"}, x: 2}, y: [1,2,3]}');
    json = iontojson.ionToJSON(unformatted);
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
    json = iontojson.ionToJSON(arrayTest);
    console.log(json);
    console.log(json[0].Color);


### 
    A very nice use case will be with Amazon QLDB.
    Pass your result.getResultList() to the utility function
    And violá! There you are with Javascript Object (JSON)
###
