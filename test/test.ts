import { ionToJSON } from "../src/utils";
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