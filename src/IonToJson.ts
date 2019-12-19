import { Reader, makePrettyWriter, Writer, decodeUtf8 } from "ion-js";

export function ionToJSON(reader: Reader | Reader[]) : any {
    return Array.isArray(reader) ? ionToJSONArray(reader) : ionToJSONUnit(reader);
}

function ionToJSONArray(readerList: Reader[]): any {
    let json = [];
    readerList.forEach((reader: Reader) => {json = json.concat(ionToJsonUtil(reader))});
    return json;
}

function ionToJSONUnit(reader: Reader): any {
    return ionToJsonUtil(reader);
}

function ionToJsonUtil(reader: Reader){
    let byteString: string = decodeIonBytes(reader);
    byteString = '[' + byteString + ']';
    let [json] = eval(byteString);
    return json;
}

function decodeIonBytes(reader: Reader) : string{
    const writer: Writer = makePrettyWriter();
    writer.writeValues(reader);
    return decodeUtf8(writer.getBytes())
}




