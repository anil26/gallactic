 //if its a question
var processQuestions=function(elem,auxiliaryTable,response){
                var arr2 = [];

                var temp2 = elem.match(validator.regexIs); //checking the validity of question.

                if (temp2 !== null) {
                    var temp = elem.split(validator.regexIs);
                    var temparr = temp[1].split(" ");
                    var counter2 = temparr.length - 2;
                    var counter1 = 0;
                    while (counter1 <= counter2) {
                        if (!(auxiliaryTable.hasOwnProperty(temparr[counter1]))) {
                            debugger;
                            response.push("Dont know what you are talking about?");
                            
                            break;
                        } else if (isNaN(auxiliaryTable[temparr[counter1]]) && auxiliaryTable.hasOwnProperty(temparr[counter1])) {
                            arr2.push(auxiliaryTable[temparr[counter1]]);
                            counter1++;
                        } else {
                            var value2 = calculateCredit(arr2,response);
                            temparr.pop(1);

                            //conditions when custom units are mentioned

                            response.push(temparr.join(" ") + " is " + value2 * auxiliaryTable[temparr[temparr.length - 1]] + " Credits");


                            break;
                        }

                    }

                    if (counter1 === counter2 + 1) {

                        var value = calculateCredit(arr2,response);
                        temparr.pop(1);

                        //is Input array is blank,Wrong set statement Credits
                        if (temparr.length !== 0) {

                            response.push(temparr.join(" ") + " is " + value + " Credits");

                        } else {
                            if (response.length > 1) {
                                response.pop(1);
                            }

                            response.push("Dont know what are you talking about?");
                            return;
                        }


                    }

                } else {

                    response.push("Dont know what are you talking about?");
                    return;
                }
            

};
                