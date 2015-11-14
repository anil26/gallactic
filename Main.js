RomanTable = {
    "I": {value:1,canBeSubtractedFrom:['V','X']},
    "V": {value:5,canBeSubtractedFrom:[]},
    "X": {value:10,canBeSubtractedFrom:['L','C']},
    "L": {value:50,canBeSubtractedFrom:[]},
    "C": {value:100,canBeSubtractedFrom:['D','M']},
    "D": {value:500,canBeSubtractedFrom:[]},
    "M": {value:1000,canBeSubtractedFrom:[]}
};


var interGalacticTransaction = function () {
    
    var processInput = function (inputArr,response) {
        var noOfSentences=inputArr.length;
        var metalValueTable = {};
        for (var sentence= 0; sentence < noOfSentences; sentence++) {
            if (!validator.isQuestion(inputArr[sentence])) //If not a question
            {
                debugger;
                setStatement(inputArr[sentence], metalValueTable,response);
            } else { //if its a question
                debugger;
                processQuestions(inputArr[sentence],metalValueTable,response);
                
            }
        
        }

        return response;
    };

    return { /*Exposed methods*/

            init: function (inputArr) {
                var response=[];
            return processInput(inputArr,response);
            }

        };


}();