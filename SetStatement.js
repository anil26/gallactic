var setStatement = function (sentence, metalValueTable, response) {

    var setMetalTableEntry = function (sentence, metalValueTable,response) {
        debugger;
        var array = [],
        keyValueObject = {},
        sentenceObject=getSentenceObject(sentence,response);
        if (sentenceObject)
        sentenceObject.execute(keyValueObject,sentence,metalValueTable,response);
        else{
            response.push("This is wrong set statement");
            return;
        }
        
     };


        if (typeof (sentence) === "string" && metalValueTable.constructor === Object) {
        
            return setMetalTableEntry(sentence, metalValueTable,response);
        } else {

        response.push("This is the wrong input statement");
        return;
        }

};
//assumption Table value are not repeating
var setValueInTable = function (Table, key, value) {
    if (!Table || Table.constructor !== Object || !value || !key) {

        throw "Arguments are incorrect";
    } 
    Table[key] = value;
};


var symbolMapper={

        isTypeOfThis:function(sentence,response){
        var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
        value=sentenceAfterSplit[2];
        return (sentenceAfterSplit.length === 3 && sentenceAfterSplit.indexOf("is") < sentenceAfterSplit.indexOf(value) && sentenceAfterSplit.indexOf("is") === 1);
        },
        execute:function(keyValueObject,sentence,metalValueTable,response){
            var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
            keyValueObject.key = sentenceAfterSplit[0];
            keyValueObject.value = sentenceAfterSplit[2];
            setValueInTable(metalValueTable,keyValueObject.key,keyValueObject.value);

        }

};
var metalValueSetter={

        isTypeOfThis:function(sentence,response){
            debugger;
            var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
            return (sentenceAfterSplit.length > 3);

        },
        execute:function(keyValueObject,sentence,metalValueTable,response){
            var array=[];
            var tempValue = sentence.match(validator.regexForNumber);
            if (tempValue !== null) {
                tempValue = parseInt(tempValue);
                keyValueObject.value = tempValue;
            }else{
                response.push("This is wrong set statement");
                return;
            }
            var arrayAfterSplitIs = sentence.split(validator.regexIs);
            if (arrayAfterSplitIs.length > 2) {

                response.push("Invalid set statement");
                return;
            }
            var firstHalfBeforeIs = arrayAfterSplitIs[0],
            splitFirstHalf = firstHalfBeforeIs.split(validator.regexForSplitWithSpaces),//getting contents before "is"
            splitFirstHalfLength=splitFirstHalf.length,
            j = 0;
            arrayBuilder(splitFirstHalf,array,metalValueTable,j,splitFirstHalfLength-2);
            debugger;
            var metalValue=calculateCredit(array,response);
            if(!metalValueTable.hasOwnProperty(splitFirstHalf[splitFirstHalfLength-1])){
                setValueInTable(metalValueTable,splitFirstHalf[splitFirstHalfLength-1],keyValueObject.value/metalValue);
                
            }
            else{
                response.push("Invalid set statement");
                return;
                }
            
        }

};

var getSentenceObject=function(sentence,response){
        debugger;
        if(symbolMapper.isTypeOfThis(sentence,response))
            return symbolMapper;
        if(metalValueSetter.isTypeOfThis(sentence,response))
            return metalValueSetter;
        return ;
};







