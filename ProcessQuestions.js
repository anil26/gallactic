 //if its a question
 var processQuestions = function (sentence, metalValueTable, response) {
     var arr2 = [];

     var temp2 = sentence.match(validator.regexIs); //checking the validity of question.
     var secondHalfAfterSplit = sentence.split(validator.regexIs)[1].split(" ");
     var lengthSecondHalf=secondHalfAfterSplit.length;
     //how much is prok;
     if (temp2.length === 1) {

         var type = typeOfQuestion(sentence);
         
         if(type==="A"){
            var counter4=lengthSecondHalf-2;
            var counter3=0;
            while(counter3<=counter4){
                if(!metalValueTable.hasOwnProperty(secondHalfAfterSplit[counter3]))
                {
                    response.push("Dont know what you are talking about?");
                     throw "Dont know what you are talking about?";
                 }else if(isNaN(metalValueTable[secondHalfAfterSplit[counter3]])){
                    arr2.push(metalValueTable[secondHalfAfterSplit[counter3]]);
                    counter3++;
                 }
                }
                var value4=calculateCredit(arr2,response);
                response.push(secondHalfAfterSplit.pop(1).join(" ")+ " is " + value4 + " Credits");
                return;
        }
        else if(type==="B"){
            var counter2=lengthSecondHalf-3;
            var counter1=0;
            while(counter1<=counter2){
                if(!metalValueTable.hasOwnProperty(secondHalfAfterSplit[counter1])){
                    response.push("Dont know what you are talking about?");
                     throw "Dont know what you are talking about?";
                }else if(isNaN(metalValueTable[secondHalfAfterSplit[counter1]])){
                    arr2.push(metalValueTable[secondHalfAfterSplit[counter1]]);
                    counter1++;
                }

            
            }
            var value3=calculateCredit(arr2,response);
            var metal=secondHalfAfterSplit[lengthSecondHalf-2];
            response.push(secondHalfAfterSplit.pop(1).join(" ") + " is " + value3*metalValueTable[metal] + " Credits" );
        }
        else if(type==="C"){
            response.push("Dont know what you are talking about?");
                     throw "Dont know what you are talking about?";
        }

     }
 };



 var typeOfQuestion = function (sentence) {
     var temp = sentence.split(validator.regexIs);
     var tempArr = temp[1].split(" ");
     tempArr.pop(1);
     if (RomanTable.hasOwnProperty(Table[tempArr[tempArr.length-1]])) {//how much is glob prok?
         return "A";
     } else {
         var counter2 = temparr.length - 2;
         var counter1 = 0;
     }

 };