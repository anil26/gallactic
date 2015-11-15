var setStatement = function (sentence, metalValueTable, response) {

    var setMetalTableEntry = function (sentence, metalValueTable,response) {
        debugger;
        var array = [],
        keyValueObject = {},
        sentenceObject=getSentenceObject(sentence,response);
        if(!sentenceObject){
           response.push("This is wrong set statement");
            return; 
        }
        sentenceObject.setter(keyValueObject,sentence,metalValueTable,response);
        
        };


        if (!(typeof (sentence) === "string" && metalValueTable.constructor === Object)) {
            response.push("This is the wrong input statement");
            return;
            
        } 
        return setMetalTableEntry(sentence, metalValueTable,response);

};
//assumption Table value are not repeating
var setValueInTable = function (Table, key, value) {
    if (!Table || Table.constructor !== Object || !value || !key) {

        throw "Arguments are incorrect";
    } 
    Table[key] = value;
};


var symbolMapper={

        isTypeOfThisAnswer:function(sentence,response){
        var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
        value=sentenceAfterSplit[2];
        return (sentenceAfterSplit.length === 3 && sentenceAfterSplit.indexOf("is") < sentenceAfterSplit.indexOf(value) && sentenceAfterSplit.indexOf("is") === 1);
        },
        setter:function(keyValueObject,sentence,metalValueTable,response){
            var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
            keyValueObject.key = sentenceAfterSplit[0];
            keyValueObject.value = sentenceAfterSplit[2];
            setValueInTable(metalValueTable,keyValueObject.key,keyValueObject.value);

        },
        isTypeOfThisQuestion:function(sentence,metalValueTable,response){
            var temp = sentence.split(validator.regexIs);
            var tempArr = temp[1].split(" ");
            tempArr.pop(1);
            return metalValueTable.hasOwnProperty(tempArr[tempArr.length - 1]) && RomanTable.hasOwnProperty(metalValueTable[tempArr[tempArr.length - 1]]);
        },
        answer:function(sentence,metalValueTable,response){
            var array=[];
            var secondHalfAfterSplit = sentence.split(validator.regexIs)[1].split(" ");

            var lengthSecondHalf = secondHalfAfterSplit.length;
            var counter4 = lengthSecondHalf - 2;
             var counter3 = 0;

             arrayBuilder(secondHalfAfterSplit, array, metalValueTable, counter3, counter4,response);

             var value4 = calculateCredit(array, response);
             secondHalfAfterSplit.pop(1);
             response.push(secondHalfAfterSplit.join(" ") + " is " + value4 + " Credits");
             return;
        }


};
var metalValueSetter={

        isTypeOfThisAnswer:function(sentence,response){
            debugger;
            var sentenceAfterSplit = sentence.split(validator.regexForSplitWithSpaces);
            return (sentenceAfterSplit.length > 3);

        },
        setter:function(keyValueObject,sentence,metalValueTable,response){
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
            arrayBuilder(splitFirstHalf,array,metalValueTable,j,splitFirstHalfLength-2,response);
            debugger;
            var metalValue=calculateCredit(array,response);
            if(!metalValueTable.hasOwnProperty(splitFirstHalf[splitFirstHalfLength-1])){
                setValueInTable(metalValueTable,splitFirstHalf[splitFirstHalfLength-1],keyValueObject.value/metalValue);
                
            }
            else{
                response.push("Invalid set statement");
                return;
                }
            
        },
        isTypeOfThisQuestion:function(sentence,metalValueTable,response){
            var temp = sentence.split(validator.regexIs);
            var tempArr = temp[1].split(" ");
            tempArr.pop(1);
            return (!RomanTable.hasOwnProperty(metalValueTable[tempArr[tempArr.length - 1]]));
        },
        answer:function(sentence,metalValueTable,response){
                var array=[];
                var secondHalfAfterSplit = sentence.split(validator.regexIs)[1].split(" ");

                var lengthSecondHalf = secondHalfAfterSplit.length;
                var counter2 = lengthSecondHalf - 3;
                var counter1 = 0;
                arrayBuilder(secondHalfAfterSplit, array, metalValueTable, counter1, counter2,response);

                var value3 = calculateCredit(array, response);
                var metal = secondHalfAfterSplit[lengthSecondHalf - 2];
                secondHalfAfterSplit.pop(1);
                response.push(secondHalfAfterSplit.join(" ") + " is " + value3 * metalValueTable[metal] + " Credits");
                return;
        }


};

var getSentenceObject=function(sentence,response){
        debugger;
        if(symbolMapper.isTypeOfThisAnswer(sentence,response))
            return symbolMapper;
        if(metalValueSetter.isTypeOfThisAnswer(sentence,response))
            return metalValueSetter;
        return ;
};







