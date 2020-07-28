import { Reader, IonTypes } from "ion-js";

export function ionToJSON(reader: Reader | Reader[]) : any {
    return Array.isArray(reader) ? parseArray(reader) : parseUnit(reader);
}

const parseArray = (readerList: Reader[]) => {
    return readerList.map(parseIon);
}

const parseUnit = (reader: Reader) => {
    return parseIon(reader);
}

const parseIon = (ion: Reader) => {
    if (ion.type() === null) {
        ion.next();
    }

    if (ion.type() === IonTypes.LIST) {
        const list = [];
	let type;
	const depth = ion.depth();
        ion.stepIn();
        while (ion.depth() > depth) {
	    type = ion.next();
	    if(type == null){
		ion.stepOut();
	    }else{
           	 const itemInList = parseIon(ion);
           	 list.push(itemInList);
	    }
        }

        return list;
    }

    if (ion.type() === IonTypes.STRUCT) {
        const structToReturn = {};

        let type;
        const currentDepth = ion.depth();
        ion.stepIn();
        while (ion.depth() > currentDepth) {
            type = ion.next();
            if (type === null) {
                ion.stepOut();
            } else {
                structToReturn[ion.fieldName()] = parseIon(ion);
            }
        }
        return structToReturn;
    }

    if (ion.type().isNumeric) {
        return ion.numberValue();
    }

    if (ion.type() === IonTypes.DECIMAL) {
        return ion.decimalValue().numberValue();
    }

    if (ion.type() === IonTypes.TIMESTAMP) {
        return ion.value().toString();
    }

    return ion.value();
}


