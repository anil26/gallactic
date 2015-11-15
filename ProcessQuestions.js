 //if its a question
 var processQuestions = function (sentence, metalValueTable, response) {
     var array2 = [];

     var occurencesIsArray = sentence.match(validator.regexIs);
     
 
        if (occurencesIsArray=== null || occurencesIsArray.length !== 1){
            
            response.push("Dont know what are you talking about?");
             return;

        }
        var questionObject=getQuestionObject(sentence,metalValueTable,response);    
        if(!questionObject){
           response.push("Dont know what are you talking about?");
             throw "Dont know what are you talking about?"; 
        }
        questionObject.answer(sentence,metalValueTable,response);


    
 };

 var arrayBuilder = function (array, toBeFilledArray, metalValueTable, lowerIndex, higherIndex,response) {
     
     while (lowerIndex <= higherIndex) {
         if (!metalValueTable.hasOwnProperty(array[lowerIndex])|| !isNaN(metalValueTable[array[lowerIndex]])){//change
             response.push("Dont know what  are you talking about?");
             throw "Dont know what you are you talking about?";
         }
            
        toBeFilledArray.push(metalValueTable[array[lowerIndex]]);
        lowerIndex++;
         
            }
 };

var getQuestionObject=function(sentence,metalValueTable,response){
    
    if(symbolMapper.isTypeOfThisQuestion(sentence,metalValueTable,response)){
        return symbolMapper;
    }
    if(metalValueSetter.isTypeOfThisQuestion(sentence,metalValueTable,response)){
        return metalValueSetter;
    }
    return;

};




