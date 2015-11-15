 //if its a question
 var processQuestions = function (sentence, metalValueTable, response) {
     var array2 = [];

     var temp2 = sentence.match(validator.regexIs);
     //how much is prok;

     if (temp2 !== null && temp2.length === 1) {
         var secondHalfAfterSplit = sentence.split(validator.regexIs)[1].split(" ");

         var lengthSecondHalf = secondHalfAfterSplit.length;
         var type = typeOfQuestion(sentence, metalValueTable);

         if (type === "A") {
             var counter4 = lengthSecondHalf - 2;
             var counter3 = 0;

             arrayBuilder(secondHalfAfterSplit, array2, metalValueTable, counter3, counter4);

             var value4 = calculateCredit(array2, response);
             secondHalfAfterSplit.pop(1);
             response.push(secondHalfAfterSplit.join(" ") + " is " + value4 + " Credits");
             return;
         } else if (type === "B") {
             var counter2 = lengthSecondHalf - 3;
             var counter1 = 0;
             arrayBuilder(secondHalfAfterSplit, array2, metalValueTable, counter1, counter2);

             var value3 = calculateCredit(array2, response);
             var metal = secondHalfAfterSplit[lengthSecondHalf - 2];
             secondHalfAfterSplit.pop(1);
             response.push(secondHalfAfterSplit.join(" ") + " is " + value3 * metalValueTable[metal] + " Credits");
         } else if (type === "C") {
             response.push("Dont know what are you talking about?");
             throw "Dont know what are you talking about?";
         }

     } else {
         response.push("Dont know what are you talking about?");
         // throw "Dont know what  are you talking about?";
     }
 };



 var typeOfQuestion = function (sentence, Table) {
     var temp = sentence.split(validator.regexIs);
     var tempArr = temp[1].split(" ");
     tempArr.pop(1);
     if (Table.hasOwnProperty(tempArr[tempArr.length - 1]) && RomanTable.hasOwnProperty(Table[tempArr[tempArr.length - 1]])) { //how much is glob prok?
         return "A";//how much is glob prok tegj
     } else if (!RomanTable.hasOwnProperty(Table[tempArr[tempArr.length - 1]])) {
         return "B";//how much is glob prok silver
     }
     return "C";//invalid

 };
 var arrayBuilder = function (array, toBeFilledArray, metalValueTable, lowerIndex, higherIndex) {
     while (lowerIndex <= higherIndex) {
         if (!metalValueTable.hasOwnProperty(array[lowerIndex])) {
             response.push("Dont know what  are you talking about?");
             throw "Dont know what you are you talking about?";
         } else if (isNaN(metalValueTable[array[lowerIndex]])) {
             toBeFilledArray.push(metalValueTable[array[lowerIndex]]);
             lowerIndex++;
         }
     }
 };