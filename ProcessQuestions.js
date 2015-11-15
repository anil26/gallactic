 //if its a question
 var processQuestions = function (sentence, metalValueTable, response) {
     var array2 = [];

     var temp2 = sentence.match(validator.regexIs);
     //how much is prok;

     if (temp2 !== null && temp2.length === 1) {
         var questionObject=getQuestionObject(sentence,metalValueTable,response);
         if(questionObject){
            questionObject.answer(sentence,metalValueTable,response);
         }
         

         else{
             response.push("Dont know what are you talking about?");
             throw "Dont know what are you talking about?";
         }

     } else {
         response.push("Dont know what are you talking about?");
         // throw "Dont know what  are you talking about?";
     }
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




