var setStatement = function (sentence, metalValueTable, response) {

    var setMetalTableEntry = function (sentence, metalValueTable) {
        var array = [],
        keyValueObject = {},
        type = symbolMapper.findTypeOfThis(sentence, response, keyValueObject);
        if (type == "A") {
                setValueInTable(metalValueTable, keyValueObject.key, keyValueObject.value);
        } else if (type == "B") {
            

            var arrayAfterSplitIs = sentence.split(validator.regexIs);
            if (arrayAfterSplitIs.length > 2) {

                response.push("Invalid set statement");
                throw "Invalid set statement";
            }
            var firstHalfBeforeIs = arrayAfterSplitIs[0],
            splitFirstHalf = firstHalfBeforeIs.split(validator.regexForSplitWithSpaces),//getting contents before "is"
            splitFirstHalfLength=splitFirstHalf.length,
            j = 0;
            arrayBuilder(splitFirstHalf,array,metalValueTable,j,splitFirstHalfLength-2);
            var metalValue=calculateCredit(array,response);
            if(!metalValueTable.hasOwnProperty(splitFirstHalf[splitFirstHalfLength-1])){
                setValueInTable(metalValueTable,splitFirstHalf[splitFirstHalfLength-1],keyValueObject.value/metalValue);
                
            }
            else{
                response.push("Invalid set statement");
                
                }
            
        } else {
                response.push("This is wrong set statement");
                return;
                //throw "Wrong set statement";

            }

        
     };


    if (typeof (sentence) === "string" && metalValueTable.constructor === Object) {
        return setMetalTableEntry(sentence, metalValueTable);
    } else {

        response.push("This is the wrong input statement");
        return;
    }

};

var setValueInTable = function (Table, key, value) {
    if (Table.constructor !== Object || !Table || !value || !key) {

        throw "Arguments are incorrect";
    } else {
        if (!Table.hasOwnProperty(key)) {
            Table[key] = value;
        }

    }
};

//There are three types of sentence
//Type A:prok is V
//Type B:prok glob silver is 4500 credits.
//Type C:Invalid strings.

var symbolMapper = {

    findTypeOfThis: function (sentence, response, keyValueObject) {


        if (typeof (sentence) !== "string" && !sentence) {
            return "Not a string";
        }
        var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
        var value = RomanTable.hasOwnProperty(sentenceAfterSplit[2]) !==undefined ? sentenceAfterSplit[2] : undefined;
        if (sentenceAfterSplit.length === 3 && sentenceAfterSplit.indexOf("is") < sentenceAfterSplit.indexOf(value) && sentenceAfterSplit.indexOf("is") === 1) {

            keyValueObject.key = sentenceAfterSplit[0];
            keyValueObject.value = sentenceAfterSplit[2];
            return "A";
        } else if (sentenceAfterSplit.length > 3) {
            var tempValue = sentence.match(validator.regexForNumber); //grabbed value out of the sentence for type "asdf dfsa silver is 456 credits"
            if (tempValue !== null) {
                tempValue = parseInt(tempValue);
                keyValueObject.value = tempValue;
                return "B";
            } else return "C";
        }
        return "C";
    }

};